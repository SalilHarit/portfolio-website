# Fixed Asset Management System (FAMS)
## Case Study — CodeForge Labs

---

## Project Snapshot

| Field | Details |
|---|---|
| **Client** | MCS Computer Services Pvt Ltd |
| **Industry** | IT Services / Enterprise Software |
| **Role** | Founder & Lead Developer, CodeForge Labs (Contract) |
| **Duration** | ~9 Months (2024–2025) |
| **Stack** | Flutter Desktop · Spring Boot · PostgreSQL 17 · Docker |
| **Engagement Type** | End-to-end contract development |

---

## Executive Summary

Designed and delivered a full-stack **Fixed Asset Management System** for an enterprise client — a feature-complete desktop platform that digitises the entire asset lifecycle from procurement through disposal, with built-in compliance to Indian Accounting Standards (Companies Act & Income Tax Act).

The system replaced manual Excel-based asset tracking with an auditable, role-controlled application, enabling the finance team to run depreciation calculations automatically and produce CFO-ready reports on demand.

---

## The Problem

The client's finance team was managing fixed assets entirely through spreadsheets, which created several compounding risks:

- **No centralised ledger** — asset locations, custodians and condition tracked inconsistently across teams
- **Manual depreciation** — SLM, WDV and UOP calculations done in Excel, high risk of compliance errors at audit time
- **No audit trail** — asset movements, disposals and impairment events had no verifiable history
- **Reporting bottleneck** — generating depreciation schedules for auditors required days of manual effort
- **Multi-method complexity** — Companies Act and Income Tax Act use different depreciation rates; managing both simultaneously was error-prone

---

## Solution Overview

### Modules Delivered

**Asset Lifecycle Management**
- Asset master creation with multi-label support (one physical asset → multiple accounting labels for partial ownership / component accounting)
- Procurement workflow with purchase voucher generation and sequential voucher numbering
- Bulk Excel import with field-level validation, error reporting and rollback on failure
- Asset allocation to departments, cost centres and custodians with transfer history
- Disposal workflows: sale, scrap, retirement — each generating appropriate accounting entries

**Depreciation Engine**
- Three methods: Straight Line Method (SLM), Written Down Value (WDV), Units of Production (UOP)
- Companies Act and Income Tax Act rate tables built in as configurable master data
- Sequential financial-year processing with opening WDV chain integrity — each year's closing WDV becomes the next year's opening WDV automatically
- Impairment adjustments applied to opening WDV *before* depreciation is calculated (compliant with Ind AS 36)
- Preview mode with virtual computation — no database writes until the user confirms the run
- Bulk posting across all assets in a single operation

**Financial Reporting & Compliance**
- Depreciation schedule (asset-wise, period-wise)
- Fixed Asset Register (FAR) — the primary statutory document for auditors
- Asset movement report (additions, disposals, transfers by period)
- P&L impact report for sale and scrap disposals
- Period-close and year-end closing workflows with soft-lock to prevent backdated edits

**System & Operations**
- Role-based access control (Admin, Finance, Auditor, Viewer)
- Full audit log — every create/update/delete stamped with user, timestamp and delta
- Automated database backup with PostgreSQL `pg_dump`, scheduled and on-demand
- PowerShell health-check script for rapid deployment validation
- Windows installer built with Inno Setup for one-click client-site deployment

---

## Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | Flutter (Windows Desktop) | Cross-platform desktop UI, complex form workflows |
| Backend | Spring Boot (Java) | REST API, business logic, depreciation engine |
| Database | PostgreSQL 17 | Asset records, financial data, audit trails |
| Deployment | Docker + Docker Compose | Containerised, reproducible server deployment |
| Installer | Inno Setup | One-click Windows installation for client machines |
| Version Control | Git (history sanitised via git-filter-repo) | Clean repository, no binary build artifacts |

---

## Key Engineering Challenges

### 1. Depreciation Chain Integrity Across Financial Years

**Problem:** Sequential WDV depreciation broke when the bulk preview loop read closing WDV from the database mid-run. For assets being calculated for multiple periods in one session, the DB still held the *old* closing WDV from the last posted run — causing each period after the first to start from the wrong opening value.

**Solution:** Built a `virtualClosingWdvMap` maintained in memory during the sequential loop. Each period's computed closing WDV is written to this map and the *next* period reads from it — bypassing the database entirely until the user confirms and posts. This ensures mathematical chain integrity regardless of what the DB currently holds.

---

### 2. Voucher Number Uniqueness & Format Bugs

**Problem:** Purchase voucher numbers were generating with an unexpected company ID suffix (e.g. `PUV/25-26/0000001/C0001` instead of `PUV/25-26/0000001`), and the uniqueness constraint on the column was global rather than per-company — blocking multi-company deployments.

**Solution:** Traced to a dangling `/%s` placeholder in a `String.format` call in the Java backend. Fixed the format string, verified the unique constraint scope, rebuilt the JAR (`mvn clean package`) and redeployed the container.

---

### 3. Flutter Platform Channel Deadlock During Bulk Import

**Problem:** Bulk asset import (500+ rows) intermittently hung. Root cause was `AuthManager.getCurrentUserId()` reading from `FlutterSecureStorage` via a platform channel on each row — the synchronous platform channel call blocked the Dart isolate event loop under sustained load.

**Solution:** Pre-warmed the auth token cache before the import loop begins, eliminating repeated platform channel calls during processing.

---

### 4. Stale Entity Manager State During Batch Writes

**Problem:** JPA entity manager cache was not being cleared between batch chunks during large depreciation posts, causing later chunks to overwrite earlier ones with stale in-memory state.

**Solution:** Explicit `entityManager.flush()` + `entityManager.clear()` calls at chunk boundaries, combined with ordering guarantees so cleared state is never re-read mid-batch.

---

### 5. PostgreSQL Path Resolution in Containerised Backup

**Problem:** `BackupService.java` had a hardcoded fallback `DbConfig` block containing a dev database name and plaintext password. On a client machine where `application-prod.properties` was missing, the service silently used dev credentials — a security and reliability risk.

**Solution:** Replaced the fallback block with a `StateError` (fail-fast), added registry-based PostgreSQL binary path resolution for Windows (`HKLM\SOFTWARE\PostgreSQL`), and implemented dynamic JDBC URL parsing so no credentials are hardcoded anywhere.

---

## Delivery Methodology

The project was delivered in phases with structured UAT cycles:

- **Sprint-based delivery** — each sprint produced a single, tested build shared with the UAT lead
- **Avinash sign-off required per sprint** before the next feature set was introduced
- **Daily progress reports** to UAT stakeholders by 6 PM; weekly summaries to the project lead
- **Written decision log** maintained throughout — all scope changes documented and acknowledged by client before implementation
- **Stable baseline builds** tagged in Git; rollback to a known-good build was possible within minutes
- **SQL assertion scripts** and Postman collections used for regression validation against known expected values (not just unit tests)

---

## Results & Impact

| Metric | Before FAMS | After FAMS |
|---|---|---|
| Depreciation calculation time | Days (manual Excel) | Minutes (automated) |
| Audit trail | None | Full — every action logged |
| Depreciation method compliance | Manual, error-prone | Automated (SLM / WDV / UOP) |
| Fixed Asset Register generation | Manual compilation | On-demand, real-time |
| Multi-company support | Not possible | Supported by design |
| Deployment repeatability | Ad-hoc | Scripted, validated, one-click |

---

## Lessons & Engineering Principles

These are the durable takeaways from this engagement — applied to every subsequent project at CodeForge Labs:

**Integration bugs dominate, not formula bugs.** The most serious failures in this project were data-flow issues (stale DB reads, platform channel deadlocks, entity manager state) — not arithmetic errors. Unit tests are necessary but insufficient. SQL assertion scripts and API collections run against known-good expected values catch far more in a system like this.

**Deployment discipline is non-negotiable.** Multiple "fixed but still broken" situations were caused by old compiled JARs still running in Docker containers. The rule now: always `mvn clean package`, always restart the container, never assume a hot-reload propagated a backend change.

**Fail fast over silent fallbacks.** The hardcoded dev-DB fallback in backup is a canonical example of a silent failure that's worse than a crash. Defensive code that swallows errors and substitutes defaults masks real problems in production. Throw, don't default.

**Scope creep disguised as bug fixes is a business risk.** Several "defect" reports during UAT were actually undiscussed new requirements. Written documentation of decisions, sprint sign-off gates, and maintaining codebase control until final payment are the protective mechanisms — not confrontation.

---

## About CodeForge Labs

CodeForge Labs is an independent software development studio specialising in enterprise desktop and web applications for regulated industries. We take on complex, long-cycle projects where domain accuracy, audit compliance and deployment reliability are as important as feature delivery.

**Contact:** [your email or portfolio URL]

---

*This case study was produced for portfolio purposes. Client name used with permission.*
