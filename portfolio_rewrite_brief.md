# Portfolio Website Rewrite Brief
## Context
This is a rewrite brief for Salil Harit's personal portfolio site (React/TypeScript, currently at salilharit.netlify.app). The site is used as a credibility link in cold job applications targeting Flutter Developer roles at 8–12 LPA mid-sized product/service companies in India. Visitors are typically hiring managers or technical interviewers who land cold — they don't know Salil yet.

The current site has enterprise consulting framing ("Technology Solutions Architect", business impact language) that does not match the job-seeker context. This brief describes exactly what to change.

---

## Visitor Intent
A hiring manager or interviewer opens this link from a resume or LinkedIn. They want to answer three questions in 15 seconds:
1. What does this person build? (role clarity)
2. Can they actually build things? (proof)
3. Does their stack match ours? (technical fit)

The site must answer all three immediately, above the fold.

---

## Section 1: Hero / Header (`Home.tsx`)

### Current problems
- Headline: "Technology Solutions Architect" — sounds like a self-appointed title, not a role
- Sub-headline is about "enterprise-grade software" and "legacy modernization" — client pitch language
- No immediate stack signal
- Fake CFO testimonial in `EnterpriseModernization.tsx` — remove entirely

### Required changes

**Headline:** `Flutter Developer`

**Sub-headline (one line):** `Dart · Spring Boot · PostgreSQL · Firebase · AWS`

**Bio paragraph (2–3 sentences max):**
> I build production Flutter apps and backend APIs. Recent work includes a 106-screen enterprise asset management system for a 40-year-old IT firm (Flutter/Riverpod + Spring Boot + PostgreSQL) and a live EdTech platform on the Play Store. Based in Delhi, graduating BTech June 2025, open to full-time roles.

**Contact line:** Keep email and phone. Remove the "Ready for Your Next Business-Critical Project?" CTA section — it reads as freelance solicitation, not job seeker.

**Nav links:** Keep Projects, Technical Expertise. Remove "Business Impact" as a section label — rename to "What I've Built" or just merge into projects.

---

## Section 2: Projects (`Home.tsx` projects array)

Each project card needs:
- **Tech stack badge line FIRST** (before description)
- **One-line "what it is"** (not business impact framing)
- **2–3 technical bullets** (what you actually built)
- Business impact as a small footnote, not the headline

### FAMS project — rewrite

**Title:** FAMS — Enterprise Asset Management System

**Stack (show as badges):** Flutter · Riverpod · Spring Boot · PostgreSQL · JWT · REST APIs

**One-liner:** 106-screen Flutter app replacing a legacy VB.NET system for a 40-year-old IT services company.

**Technical bullets:**
- Financial compliance engine: SLM/WDV/UOP depreciation, IT Act + Companies Act dual-rule sets, GST, multi-company data isolation
- JWT-based role/rights system, tamper-proof audit trail, QR/barcode asset tracking
- Full UAT lifecycle: 173 requirements across 17 modules tracked with P1–P4 priority framework

**Footnote:** Presented to Rajasthan State Health Department (NIC) for government hospital deployment.

**Remove:** "₹20+ lakh cost avoidance" as the headline metric — move to footnote if kept at all. The technical complexity is the actual proof point here.

---

### AstroVista project — rewrite

**Title:** AstroVista — EdTech Platform (Live on Play Store)

**Stack:** Flutter · Firebase · Firestore · Algolia · Razorpay · GCP

**One-liner:** Full-stack mobile EdTech platform for astrology education — video, audio, live sessions, e-books.

**Technical bullets:**
- Multi-role app: student, creator, and admin dashboards with separate permission systems
- Algolia search integration, Razorpay payment gateway, multi-language support (EN/HI/TE/TA)
- White-label architecture: platform can be redeployed as custom-branded app for individual creators

**Add:** Google Play Store link / badge (already in codebase as SVG — use it)

---

### Solar IoT project — rewrite

**Title:** Solar Plant IoT Monitoring — Cloud Infrastructure

**Stack:** AWS Lambda · API Gateway · MongoDB · Python · Raspberry Pi

**One-liner:** End-to-end IoT data pipeline for real-time monitoring of 2.8MW industrial solar installation.

**Technical bullets:**
- Raspberry Pi data loggers → API Gateway → Lambda → MongoDB Atlas pipeline processing 150+ parameters per reading
- Time-series schema design, Lambda layers, VTL mapping templates, 99.9% pipeline uptime
- Replaced manual on-site data collection across 3 industrial sites, 31 inverters

---

## Section 3: Technical Skills (`Home.tsx` expertise section)

Replace the current 4-card grid ("Enterprise Development", "Cloud & IoT", etc.) with a simple clean skills table or tag cloud. Suggested categories:

| Category | Skills |
|---|---|
| Mobile | Flutter, Dart, Riverpod, FlutterFlow |
| Backend | Spring Boot, Node.js, Express, AWS Lambda |
| Databases | PostgreSQL, Firebase Firestore, MongoDB |
| Cloud & IoT | AWS (Lambda, API Gateway, S3), GCP, Raspberry Pi |
| Tools | Git, Jira, Algolia, Razorpay, Linux/Bash |

---

## Section 4: Remove or Significantly Downplay

- **"Business Impact & Scale" metrics section** (`₹20+ Lakh`, `₹2-3L Annual`, etc.) — these are client pitch metrics, not useful to a hiring manager. Remove the section entirely or reduce to a single unobtrusive line.
- **Fake CFO quote** in `EnterpriseModernization.tsx` — delete the entire blockquote element.
- **"Ready for Your Next Business-Critical Project?" CTA** — remove. Replace with simple "Get in touch" with email link.
- **"40+ Years Enterprise client trust"** metric card — remove.

---

## Section 5: `EnterpriseModernization.tsx` page

This is the detail page for FAMS. The content is mostly good — it has real technical depth. Specific fixes:

- Remove the fake CFO testimonial blockquote entirely
- Change page title from "FAMS Enterprise Modernization" to "FAMS — Fixed Asset Management System"
- Status badges: change "Active Development - Testing Phase Complete" and "Production Deployment In Progress" to "Delivered" or "UAT Complete" — in-progress signals unfinished work to a hiring manager
- The `projectPhases` array shows Phase 4 "Production Deployment" at 75% progress — either update to 100% if true, or reframe as "Deployment Support" rather than showing an incomplete progress bar

---

## Section 6: `AstroVista.tsx` page

This page is actually well-structured for a portfolio. Minor fixes:
- The GitHub link in the footer points to `github.com/yourusername/astrovista` — replace with actual URL or remove
- The Play Store link points to `play.google.com/store/apps/details?id=com.astrovista` — verify this is the correct package ID

---

## Overall Tone Shift

| Current | Target |
|---|---|
| "Technology Solutions Architect" | "Flutter Developer" |
| "business-critical operations" | "production apps" |
| "enterprise partner" | "engineer who ships" |
| "₹20 lakh cost avoidance" | "106-screen Flutter app" |
| "C-level stakeholders" | "worked with real clients" |
| "legacy system modernization" | "Flutter + Spring Boot + PostgreSQL" |

The framing shift is: **from consultant selling services → engineer looking for a team to join.**

---

## Files to Edit (in order of priority)

1. `src/components/Home.tsx` — hero section, projects array, skills section, CTA section
2. `src/components/EnterpriseModernization.tsx` — remove fake quote, fix status badges, fix progress bars
3. `src/components/AstroVista.tsx` — fix GitHub link, verify Play Store URL
4. `public/index.html` — update meta description from "Technology Solutions Architect specializing in enterprise software modernization" to "Flutter Developer · Spring Boot · PostgreSQL · Firebase · Open to roles in Delhi/Remote"
5. `src/components/Home.css` — no structural changes needed, cosmetic only if desired

---

## Do Not Change

- The overall React/Bootstrap/Framer Motion structure — it works fine
- The Solar Power Plant Monitoring page — content is solid, technical depth is good
- Routing in `App.tsx`
- The AstroVista detail page structure (just fix the two broken links)
- Animation variants — they're fine

---

## Summary of Key Removals

- Fake CFO testimonial blockquote
- "Business Impact & Scale" section with rupee metrics
- "Ready for Your Next Business-Critical Project?" freelance CTA
- "Technology Solutions Architect" title everywhere
- In-progress status badges on completed/delivered work
- "40+ Years Enterprise client trust" metric
