# SEC ERP — Case Study

## Project Overview

**SEC ERP** is a full-stack Security & Manpower ERP system built for the Indian private security industry. It was designed and built solo in approximately one month, using AI-assisted coding (Gemini). The goal is to commercialize it as a SaaS product targeting the 23,000+ PSARA-licensed security agencies across India — a ₹73,000 Cr market that is almost entirely unserved by modern software.

---

## The Problem

India's private security industry is operationally complex but technologically primitive. Most agencies run on spreadsheets, WhatsApp groups, and paper registers. The core pain points are:

- **Statutory non-compliance:** PF, ESI, and Professional Tax calculations are done manually and incorrectly, creating legal liability for agency owners.
- **Attendance fraud:** Without geo-fenced mobile attendance, buddy punching and fake punch-ins are rampant, and clients have no way to verify guard presence.
- **Revenue leakage:** Unmanned posts go unbilled. Manual invoicing loses 10–15% of billable hours.
- **No deployment visibility:** Agency managers don't know in real time which guards are active, absent, or overdue for compliance renewals.
- **Foreign SaaS fails here:** Cloud-only competitors don't work in Tier 2/3 India where LAN-first or offline operation is required. Guards in industrial areas often have no connectivity.

---

## The Solution

A single integrated platform combining:

1. Guard master data with full statutory compliance tracking (PF/ESI/PT/PVC/Medical)
2. Geo-fenced GPS attendance via mobile app
3. Automated payroll engine with Indian statutory deductions
4. Attendance-locked invoicing (invoices can only be generated from verified attendance)
5. Client portal for real-time guard deployment visibility
6. Offline-first architecture — works on LAN without internet

---

## Technical Stack

| Layer | Technology |
|---|---|
| Backend | Spring Boot (Java 21), PostgreSQL, Flyway migrations |
| Desktop Client | Flutter (Windows/macOS/Linux) |
| Mobile Client | Flutter (Android/iOS), v0.0.79+1 |
| Shared Logic | Dart shared_core package |
| Auth | JWT + RBAC (role-based access control) |
| Geo | PostGIS spatial queries, GPS geofencing |
| Monitoring | Prometheus + Grafana |
| Deployment | Docker + docker-compose |

---

## System Architecture

The system is split into four components that share a common domain model:

- **secerp-backend** — Spring Boot REST API, handles all business logic, payroll calculation, invoice generation, and statutory compliance
- **secerp (desktop)** — Flutter desktop client for HR managers, finance teams, operations managers
- **sec_erp_mobile** — Flutter mobile client for guards (GPS attendance punch) and area officers (site patrol)
- **shared_core** — Dart package containing all shared models, DTOs, and API interfaces

A key architectural decision is the **LAN-first design**: the mobile and desktop clients scan the local network to discover the backend server automatically, rather than hardcoding a cloud URL. This enables offline-capable deployments in factories and industrial sites with no internet.

---

## Key Modules Built

### 1. Authentication & RBAC
- JWT-based login with role-based access: SUPER_ADMIN, HR_MANAGER, OPERATIONS_MANAGER, FINANCE_MANAGER, SUPERVISOR, GUARD, AREA_OFFICER, CLIENT_VIEWER
- Session persistence with token refresh
- Change password flow

### 2. Organization Management
- Multi-company, multi-branch, multi-zone hierarchy
- PSARA license tracking per state with expiry alerts
- Onboarding wizard for first-time setup

### 3. Guard Master
- Complete guard profiles: personal, identity (Aadhaar hash), documents, bank account
- Police Verification Certificate (PVC) tracking with expiry enforcement
- Medical fitness certificate tracking
- Guard skills and training records
- Bulk import via Excel template

### 4. Client & Contract Management
- Client → Site → Post hierarchy
- Geo-fence configuration per site (lat/lng/radius)
- Rate card management per post type
- Contract lifecycle tracking

### 5. Deployment Engine
- Guard assignment to post + shift
- Compliance validation on deployment creation: blocks deployment if PVC expired, medical expired, or training missing
- Deployment FSM: PENDING → ACTIVE → RELIEVED → TERMINATED
- Relief guard assignment with smart suggestions
- Approval workflow

### 6. Attendance
- GPS geo-fenced punch-in/punch-out from mobile
- Biometric flag support
- Selfie capture on punch
- Attendance verification by supervisor
- Bulk verify
- **Attendance regularization** — standalone dialog for manual corrections with full audit trail
- OT hours tracking

### 7. Payroll Engine
- Payroll run lifecycle: DRAFT → PROCESSING → COMPLETED
- Per-guard salary slip with full breakdown:
  - Basic, HRA, DA, Special Allowance, OT Amount
  - PF (employee + employer), ESI (employee + employer), Professional Tax, Advance Recovery
- Calculate All / Approve & Lock workflow
- Guard grade system for salary templates
- Salary advance management

### 8. Billing & Invoicing
- Attendance-locked invoice preview before generation
- GST calculation (18%)
- Invoice PDF download
- AR Aging dashboard (0–30, 30–60, 60–90, 90+ days buckets)
- Overdue invoice tracking

### 9. Compliance Module
- Guard compliance score per guard (PVC + Medical + Training)
- Company-wide compliance audit view
- PSARA license calendar with 60-day expiry warnings
- Dashboard compliance alerts

### 10. Leave Management
- Leave request and approval workflow
- Leave balance display (Casual / Sick / Earned)
- Approve / Reject with reason

### 11. Incident Reporting
- Incident creation from mobile or desktop
- Priority levels: LOW / MEDIUM / HIGH / CRITICAL
- Status workflow: OPEN → INVESTIGATING → RESOLVED → CLOSED
- Detail panel with resolution notes

### 12. Conveyance & Trip Tracking
- GPS route recording for field staff
- Route reconstruction on map (Google Maps)
- Patrol heatmap view
- Claim approval workflow with per-km rate

### 13. Area Officer Module
- Zone-based area officer assignment
- Patrol session tracking
- Site inspection check-ins with GPS proof

### 14. Client Portal
- Separate portal shell for CLIENT_VIEWER role
- Dashboard, Sites, Attendance, Invoices, Compliance tabs
- CLRA compliance proof view

### 15. Reports & Audit
- Analytics dashboard with attendance trend charts, deployment distribution, branch performance
- Report generator (Attendance Summary, Payroll Register, Billing Statement, Compliance Audit, etc.)
- Audit log viewer with guard action history

---

## Database Design

17 Flyway migrations covering:

- Core schema (V1): Companies, Branches, Guards, Clients, Sites, Posts, Shifts, Deployments, Attendance, Invoices, Payroll
- Business IDs (V2): Auto-generating prefixed codes (G0001, CL001, S001) via PostgreSQL sequences and triggers
- Unified operational core (V3): Users, RBAC, Leave, Incidents, Payroll Entries, Guard Grades, Salary Advances
- Audit columns and financial constraints (V4): Unique invoice constraint per client/period, multi-tenancy enforcement
- PostGIS spatial (V17): Geography columns on Sites, Attendance, Trips, Incidents for spatial queries

Key design decisions:
- Guard ID is never reused
- Aadhaar stored as SHA-256 hash only
- `updated_at` triggers on all operational tables
- Composite indexes on attendance (date, status) and deployment (guard, date)
- Unique constraint on invoices (client_id, period_start, period_end) to prevent double billing

---

## Known Issues / Commercial Blockers

These are active bugs identified during audit that must be fixed before commercial deployment:

| Issue | Impact |
|---|---|
| Missing PF ₹15,000 basic wage ceiling | Statutory non-compliance — PF calculated on full basic |
| PT slabs hardcoded to Maharashtra brackets only | Wrong deductions for guards in other states |
| ESI contribution base uses full gross | Should use ESIC wage definition, not gross |
| OT hours silently zero out on regularized attendance | Regularized records lose overtime data |
| `AppState` god object triggers full re-fetch on every mutation | Performance issue at scale |
| Invoice security checks in controller, not repository layer | Architectural gap |
| Hardcoded developer LAN IP in MobileApiClient fallback | Must be removed before production |
| Mobile AppBar title hardcoded as "Trip Tracker" | UX bug on all screens |
| Effectively zero real test coverage | Risk for commercial deployment |

---

## Competitive Positioning

| Feature | SEC ERP | TeamStation | Securens | Generic HRMS |
|---|---|---|---|---|
| Offline / LAN-first | ✅ | ❌ | ❌ | ❌ |
| GPS geo-fenced attendance | ✅ | ✅ | ✅ | ❌ |
| Indian statutory payroll | ✅ | ❌ | Partial | Partial |
| PSARA license calendar | ✅ | ❌ | ❌ | ❌ |
| Attendance-locked invoicing | ✅ | ❌ | ❌ | ❌ |
| Client proof portal (CLRA) | ✅ | ❌ | ❌ | ❌ |
| Built for Tier 2/3 India | ✅ | ❌ | ❌ | ❌ |
| Guard deployment FSM | ✅ | Partial | Partial | ❌ |

**The moat:** No competitor combines geo-fenced attendance + Indian statutory payroll + offline-first sync + attendance-locked invoicing in a single product for this segment.

---

## Business Model

### SaaS Pricing Tiers

| Tier | Price/month | Guard cap | Target customer |
|---|---|---|---|
| Starter | ₹2,499 | ≤ 75 guards | Small agencies, first-time software buyers |
| Growth | ₹7,499 | ≤ 300 guards | Mid-size agencies, Tier 2 cities |
| Pro | ₹18,999 | ≤ 1,000 guards | Large agencies, multi-state operations |

### Revenue Projections

| Year | Customers | ARR |
|---|---|---|
| Year 1 | 60 customers | ₹39 L |
| Year 2 | 200 customers | ₹1.3 Cr |
| Year 3 | 450 customers | ₹2.9 Cr |
| Year 5 | ~1,050 customers | ₹8.6 Cr |

Year 5 represents ~4.6% penetration of the addressable SMB market.

### Key Risks
- **SMB price sensitivity** — Frame as compliance cost avoidance, not software spend
- **Onboarding friction for Growth+ tier** — Need white-glove onboarding playbook
- **Churn** — Mitigate with annual billing push and sticky payroll data

---

## Competitive White-Space Features (Not Yet Built)

These are identified opportunities with time estimates:

| Feature | Estimate | Why it matters |
|---|---|---|
| PSARA multi-state license calendar | ~1 week | Multi-state agencies have renewal management pain |
| Guard replacement SLA engine | ~3 days | Wire existing `AttendanceScheduler` to `ReliefGuard` entity |
| CLRA compliance proof tab in client portal | ~2 days | Makes audit-readiness a selling point to large enterprise clients |
| Gratuity liability tracker | ~2 days | Use guard join dates and grade history, legally required |

### Partially Built (75%+)
- Attendance-locked invoicing with GPS dispute proof
- Per-client P&L margin view (using existing rate card + payroll data)

---

## Build Process

Built solo in approximately one month using Gemini as an AI coding assistant. The development approach was:

1. **Schema-first** — All 17 Flyway migrations were designed before implementation, establishing domain contracts
2. **Iterative audits** — Structured re-audits after each sprint to identify gaps between documentation and actual code state
3. **Ground-truth verification** — Source files are the authority; markdown documentation was found to lag behind actual code state multiple times

The key principle: documentation ≠ ground truth. All technical assessments require reading actual source files.

---

## Key Technical Decisions & Learnings

### Offline-First is a Market Access Feature
The LAN-first architecture (network scanner, `DiscoveredServer`, `DataSourceConfig`) was not an academic choice — it's the reason the product can be sold to factories, warehouses, and industrial sites in Tier 2/3 India where cloud SaaS simply does not work. Foreign competitors have structurally failed here.

### Statutory Compliance is the Commercial Moat
The Indian payroll engine (PF/ESI/PT/pro-rated days/advance capping) is technically difficult to build correctly and legally required. Agencies that get it wrong face penalties. This makes it sticky — once an agency's payroll data is in the system and accurate, switching cost is very high.

### The God Object Problem
`AppState` acting as a single ChangeNotifier for all application data means any mutation triggers full re-renders and re-fetches across the app. At current scale (UAT) this is tolerable. At 300+ guards this will be a performance issue. The fix is module-level state objects with targeted `notifyListeners` calls.

### Testing Debt
Despite a test scaffold existing (Spring Boot test context, `AuthE2ETest`), there is effectively zero real test coverage. For a payroll system touching statutory deductions, this is commercial risk. The fix requires payroll calculation unit tests before any paid customer onboarding.

---

## Repository

**GitHub:** `SalilHarit/SEC_ERP` (public)

**Components:**
- `secerp-backend/` — Spring Boot backend, PostgreSQL, Flyway
- `secerp/` — Flutter desktop client
- `sec_erp_mobile/` — Flutter mobile client
- `shared_core/` — Shared Dart package

---

## Status

As of current state: feature-complete for core operational workflows. Three UAT blockers were resolved in a prior sprint (leaves, incidents, attendance regularization). The remaining blockers before commercial deployment are the four statutory compliance bugs listed above, plus the hardcoded developer IP and mobile AppBar title.

The architecture is sound. The market is real. The commercial path is clear.
