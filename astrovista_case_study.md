# AstroVista — Case Study

**Role:** Lead Developer (Full-Stack, Mobile)
**Duration:** December 2023 – November 2024
**Platforms:** Android · Web (Firebase Hosting)
**Stack:** Flutter · Firebase · Razorpay · Algolia · Node.js Cloud Functions

---

## Overview

AstroVista is a production-grade digital marketplace connecting astrologers with their followers across Android and Web. It enables astrologers to upload, price, and distribute content — video lectures, audio, PDF books, courses, articles, and news — while giving users a seamless experience to discover, purchase, and consume it with time-bound access and automated lifecycle management.

Built over 12 months as lead developer, the project spans ~100,000 lines of code across a modular Flutter frontend and a serverless Firebase backend.

---

## The Problem

Astrologers in India rely on a fragmented stack — YouTube for videos, WhatsApp for announcements, Zoom for live classes, Google Drive for PDFs. There was no single platform that allowed them to:

- Manage diverse content types with unified pricing
- Offer time-limited subscriptions (e.g., "30-day access for ₹499")
- Run discount campaigns and bundle offers
- Track revenue, engagement, and purchases in one dashboard
- Schedule upcoming courses with Zoom integration and advance booking

AstroVista was built to replace that fragmentation with a single, cohesive platform.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Flutter (Dart) — Android + Web |
| Backend & Database | Firebase Firestore (28 collections) |
| Serverless Compute | Firebase Cloud Functions — Node.js 2nd Gen |
| Payments | Razorpay SDK + server-side webhook verification |
| Search | Algolia — typo-tolerant, sub-100ms |
| State Management | Provider (`FFAppState`) · Riverpod · BLoC |
| Media | Chewie + `video_player` · `video_compress` · `syncfusion_flutter_pdfviewer` |
| Persistence | `flutter_secure_storage` · `flutter_cache_manager` |
| Monitoring | Firebase Crashlytics · Sentry |
| Notifications | Firebase Cloud Messaging (FCM) |
| Animations | Lottie · `flutter_animate` |
| Localisation | 5 languages — English, Hindi, Tamil, Telugu, Kannada |

---

## Scale & Scope

- **~99,669 lines of code** (frontend: 99,060 · backend: 609)
- **28 Firestore collections** across content, ownership, pricing, and system domains
- **15 Cloud Functions** handling payments, expiry, notifications, and email
- **13+ major navigational hubs** and dozens of sub-screens
- **5 content types:** Articles, Books, Courses, Videos, Bundles
- **5 UI languages** defined in `supportedLocales` in `main.dart`

---

## Architecture

### Modular Frontend

The codebase is partitioned into strict feature modules, each self-contained with its own UI, state, and backend triggers:

```
lib/
├── course/          # Explore, manage, upload, reorder
├── book/            # Feed, upload, PDF viewer, bookmarking
├── article/         # Read, upload, pricing tiers
├── discount/        # Campaign creation and management
├── bundle/          # Content grouping and bundle pricing
└── backend/
    ├── schema/      # 28 Firestore collection definitions
    ├── algolia/     # AlgoliaManager for search
    └── razorpay/    # Payment sheet and order flow
```

Shared UI is extracted into reusable widgets — `create_content_widget.dart` and `managecontent_widget.dart` serve all content types, eliminating duplication across modules.

### Firestore Schema Design

Despite being a NoSQL database, Firestore is structured relationally across 28 collections. Content and ownership are fully separated:

- **Content records** (`courses_record`, `videos_record`, `books_record`) store metadata, pricing, and media links
- **Ownership records** (`purchased_course_record`, `purchased_book_record`, `purchased_video_record`) track user entitlements independently — enabling fast lookups and clean Firestore security rules
- **Pricing collections** support time-limited tiers with full history via `pricing_history`

### State Management

Global app state lives in `FFAppState` — a custom `ChangeNotifier` backed by `flutter_secure_storage` for session persistence (cart data, pricing toggles, user preferences survive app kills).

A custom `StreamRequestManager` in `app_state.dart` provides memory-level caching for Firestore data streams (`paidcontentfeed`, `playlist`, `booksastrologerprofile`), preventing redundant reads and keeping feeds snappy on re-navigation.

---

## Technical Deep Dives

### 1. The Payment Security Handshake

Client-side payment confirmation is inherently insecure — a malicious user can spoof a success callback. AstroVista uses a **three-step server-side verification flow**:

1. **Order creation:** The Flutter app calls the `createOrder` Cloud Function (`index.js`), which uses the private `RAZORPAY_PROD_KEY_SECRET` server-side to generate a verified `order_id`
2. **User payment:** The user completes payment via `razorpay_payment_sheet.dart` using the Razorpay SDK
3. **Signature verification:** The app calls the `verifySignature` Cloud Function, which uses the Node.js `crypto` module to cryptographically verify the HMAC signature — content access is only unlocked after this server confirmation

Access is granted by writing to the appropriate ownership collection (`purchased_course_record` etc.) and updating the user's array fields (`PcourseID`) in Firestore. The system also handles the Razorpay webhook for cases where the app crashes mid-payment.

### 2. Automated Content Expiry Engine

Time-bound access (e.g., a 3-month course subscription) requires server-side enforcement at scale. Three scheduled Cloud Functions handle this automatically:

- `updateExpiredCourses` (`update_expired_courses.js`)
- `updateExpiredArticle`
- `updateExpiredBooks`

**Schedule:** Every 12 hours — cron `0 */12 * * *`

**Operation:** Each function queries its respective purchased collection for records where `expiry < currentTime`, batch-writes `isExpired: true` to the sub-collection in safe batches of **490 writes** (just under Firestore's 500-write atomic limit), and `arrayRemove`s the content ID from the parent user document.

**Notifications:** On expiry, `sendZoomClassNotifications()` triggers FCM push notifications via `admin.messaging().send()` to prompt renewal.

This replaced an estimated **40+ hours/month** of manual access management.

### 3. Sub-100ms Search with Algolia

Standard Firestore queries don't support typo tolerance or full-text search. Algolia is integrated via `lib/backend/algolia/algolia_manager.dart` — content records are indexed automatically via Firestore triggers, and all search queries route through `FFAlgoliaManager.instance.algoliaQuery`, delivering results in under 100ms across 30,000+ records with typo correction built in.

### 4. Media Performance

- **Video uploads:** `video_compress` reduces file size before upload to Cloud Storage
- **Video playback:** Chewie wraps `video_player`; `flutter_cache_manager` and `cached_network_image` minimise repeat data usage
- **PDF rendering:** `syncfusion_flutter_pdfviewer` handles long-form documents with bookmarking and progress tracking persisted per user in `purchased_book_record`
- **Feeds:** Infinite scroll with query pagination keeps list rendering efficient across hundreds of content items

### 5. Course Content Ordering

Within a course, the sequence of videos and books matters. Reordering is handled in `lib/course/reordercoursecontent/` — a drag-and-drop UI that writes updated `sort_order` values back to Firestore, which all downstream queries respect for consistent playback order.

---

## Role System

The `UserRecord` (`user_record.dart`) contains two boolean flags — `userType` (astrologer vs. user) and `isAdmin` — which gate features at both the UI and database level.

**Astrologer-only features**, enforced via Firestore security rules and conditional navigation in `routes.dart`:

- All content upload flows (`uploadcourse`, `bookupload`, `upload_article`)
- Pricing and discount management
- Analytics and engagement dashboard (`userengagementdashboard`)
- Zoom link management for scheduled courses

**Mode switching** between astrologer and user personas is controlled by `userType`, allowing astrologers to experience the platform from a buyer's perspective in the same session.

---

## Results

- Live on Google Play Store with open testing enabled
- Real transactions processed from day one of live launch — multiple external paying users in the first cohort
- First external astrologers onboarded with their own content uploaded and priced
- 5-language UI covering the primary South Indian astrology market
- Infrastructure maintained under ₹200/month during early stage
- Zero fraudulent transactions since implementing server-side payment verification

---

## For Hiring Managers

AstroVista demonstrates the ability to take a product from zero to production across the full stack — designing a Firestore schema for 28 collections, building a secure server-side payment flow, writing scheduled automation that handles thousands of records, integrating third-party search, and delivering a polished multi-language mobile experience under real production conditions.

The project involved live payment edge cases with real users, content expiry at scale, and iterative delivery over 12 months with a non-technical client. Every major technical decision is reflected in verifiable, production code.

---

## For Engineers

**Notable implementation details:**

- **Stream caching:** `StreamRequestManager` in `app_state.dart` as a memory-level cache layer over Firestore streams — preventing redundant reads on tab re-navigation without the full complexity of an offline-first architecture
- **Batch safety:** Cloud Function expiry scripts use batches of 490 (just under Firestore's 500-write atomic limit) to guarantee safe bulk operations at any scale
- **Secure payment:** Three-way HMAC handshake using Node.js `crypto` — the private Razorpay key never touches the client device
- **Role enforcement:** Dual-layer gating (Firestore security rules + Flutter route guards in `routes.dart`) ensures UI-level bypasses don't compromise data integrity
- **Pricing flexibility:** Dynamic list of up to 3 pricing tiers per content item, each with an independent duration unit (days/months/years), price, and active/inactive state — persisted in Firestore and validated before Razorpay order creation

---

*AstroVista — December 2023 to November 2024*
*Lead Developer: Salil*
