# Rohan Sapkale - Portfolio & Cloud Ops Console 🚀

> **Cloud DevOps Specialist & Full-Stack Systems Architect**  
> *Designing resilient AWS Multi-AZ infrastructure with Terraform, containerizing distributed services with Docker, engineering mission-critical Frappe/ERPNext enterprise modules, and building high-throughput Vue.js 3 trading engines.*

---

## 🌐 Live Access URLs
- **Standard Port 80 (Recommended)**: `http://157.15.203.96/portfolio/` or `http://rohan.getmyerp.com/portfolio/`
- **Direct Port 8085**: `http://157.15.203.96:8085/`
- **Owner Passcode for Ops Console**: `rohan2026`

---

## 🎨 Theme & Visual Architecture
- **Theme**: Pure Pitch Dark Black (`#000000`, `#050505`, `#0a0a0a`, `#111111`) with sharp subtle borders (`#1c1c1c`, `#2a2a2a`) and glowing neon cyan, emerald, purple, and amber accents.
- **Typography**: Strictly uses Google Fonts **Ubuntu** (300, 400, 500, 700) for UI/text, and **Ubuntu Mono** (400, 700) for code and data models.
- **Public View**: Streamlined executive profile with clean engineering metrics — zero terminal clutter on the public interface.

---

## 📦 Enterprise Modules & Problems Solved Showcase

### 1. Sauda Module (`sauda_module`)
- **Problem Solved**: Agricultural commodity traders (sugar, grains, pulses) trade hundreds of metric tonnes per deal over rapid phone calls. Standard ERPNext forms took 40+ seconds per entry with multiple mouse clicks, causing severe booking backlogs, delayed settlements, and frequent dispatch over-allocation.
- **Configuration & Architecture**:
  - Custom Docker multi-stage build container (`sauda-desk` on port 8005).
  - DocTypes: `sauda_voucher`, `dispatch_sauda_entry`, `dispatch_sauda_history`.
  - Sub-second keyboard navigation (Enter/Tab navigation, instant numeric formatting, zero mouse dependency).
  - Redis cache & queue integration for real-time contract balance calculations.
- **Impact**: Reduced booking time from ~45 seconds to < 3 seconds; eliminated dispatch over-allocation.

### 2. Sugar Module (`sugar_module`)
- **Problem Solved**: Sugar mills and wholesale procurement hubs handle massive cane procurement queues, transit weight variations (moisture/loss), and complex broker commissions tied to specific party dispatches rather than flat invoices.
- **Configuration & Architecture**:
  - DocTypes: `sugar_purchase`, `purchase_payment`, `dispatch_entry`, `dispatch_history`, `broker`, `broker_party_payment`, `broker_quantity`.
  - Multi-tier procurement workflow: Contract → Dispatch Logging → Weighbridge Net Verification → Automated Payment.
  - Party-specific broker commission engine calculating brokerage per quintal based on verified delivered weights.
- **Impact**: 100% automated procurement tracking; eliminated commission leakage across multi-truck deliveries.

### 3. Brokerage Module (`brokerage_module`)
- **Problem Solved**: High-frequency commodity brokers struggled with complex, date-varying broker commission rules, lack of a 14-column accounting ledger audit register matching trade spreadsheets, and currency risk on export/import commodity deals without daily forex updates.
- **Configuration & Architecture**:
  - Frontend: Vue 3 (Composition API), Vite dev server (port 8082).
  - DocTypes: `broker_purchase_entry`, `broker_sales_entry`, `brokers`, `broker_rate_configuration`, `broker_rate_item`, `broker_voucher_item`, `dollar_rate_settings`, `stock_group`.
  - Real-time European Central Bank (Frankfurter) USD/INR exchange rate auto-sync with date-wise historical lookup.
  - Standardized 14-column accounting ledger audit register with broker-level subtotals and 1-click CSV/Excel export.
  - Dual-currency view selector (USD / INR) with instant recalculation of rates, contracts, and brokerage margins.
- **Impact**: 14-column standardized audit register; daily synchronized ECB foreign exchange accounting; reduced voucher audit time by 80%.

### 4. Housing Society Module (`housing_society`)
- **Problem Solved**: Multi-building residential and commercial societies faced chaotic monthly billing, manual calculation of square-footage vs flat-rate maintenance fees, delayed compound interest penalties on overdue accounts, and manual data re-entry into Tally for accounting audits.
- **Configuration & Architecture**:
  - DocTypes: `society_details`, `building`, `wing`, `floor`, `society_unit`, `society_member`, `society_member_relation`, `society_charges`, `billing_template`, `billing_template_item`, `generate_bill`, `bulk_bill_generation`, `applicable_charges`, `one_time_charges`, `post_interest`, `interest_waiver`, `society_transaction`, `society_member_transaction`, `tally_export`, `tax_ledger`.
  - Hierarchical asset structure (Society → Building → Wing → Floor → Unit).
  - Dynamic billing template engine with automated bulk billing triggers.
  - Automated compound interest posting with formal waiver approval workflows.
  - Native Tally XML export engine for synchronized accounting audits.
- **Impact**: Monthly billing cycle cut from 1 week to < 60 seconds for hundreds of units; 100% dispute-free interest calculation.

### 5. Headless WhatsApp Connector (`whatsapp_connector`)
- **Problem Solved**: Sales and operations teams wasted thousands of hours manually downloading PDF quotations and invoices from ERPNext, opening WhatsApp Web, typing phone numbers, and attaching documents manually.
- **Configuration & Architecture**:
  - 100% native custom Frappe app without heavy webview wrappers.
  - Loopback Node.js & Baileys microservice bridge running on port `5050`.
  - DocTypes: `whatsapp_settings`, `whatsapp_message_log`.
  - Automated Frappe `doc_events` hooks on `Quotation` and `Sales Invoice` submission (`frappe.attach_print`).
  - QR code pairing modal in Frappe settings with persistent token storage and local device attachment selector.
- **Impact**: 100% automated document dispatch in < 3 seconds; zero webview lag; < 50MB memory footprint.

### 6. Accounts Desk (`accounts_desk`)
- **Problem Solved**: Accountants migrating from desktop Tally to ERPNext struggled with slow form reloads, excessive mouse clicks, and inability to perform rapid voucher entry and ledger audits.
- **Configuration & Architecture**:
  - GitHub Repository: `rohan-sapkale-cbd-it/account_desk.git`.
  - High-speed single-page application built with Vue 3 and Vite.
  - Tally-inspired hotkey engine (F4-F9), instant party balance ledger drill-down, and batch voucher posting.
- **Impact**: 5x faster daily accounting voucher throughput with full keyboard navigation.

### 7. Server Management Suite (`server_management`)
- **Problem Solved**: Operating multi-tenant Frappe instances across multiple cloud servers was fragile, requiring manual SSH sessions for site deployments, SSL renewals, backups, and process restarts.
- **Configuration & Architecture**:
  - DocTypes: `server`, `server_service`, `server_monitoring`, `domain_`, `website_`, `hosting_plan`, `customer_`, `deployment`, `incident`, `ssl_certificate`, `bakup`.
  - Dynamic Nginx virtual host generator and automated Let's Encrypt SSL script hooks.
  - 24/7 Telegram Management Bot (`@ServerBoatBot`) with interactive inline keyboards, live `psutil` telemetry, supervisor process controls, and remote terminal diagnostics.
- **Impact**: Unified 24/7 remote operations from a smartphone via Telegram; zero unmonitored server crashes.

### 8. Jewellery Module (`jewellery_module`)
- **Problem Solved**: Gold and fine jewellery merchants suffered profit leakage due to inaccurate daily metal market rates, complex karat purity conversions (24K, 22K, 18K), and manual wastage/making charge computations.
- **Configuration & Architecture**:
  - DocTypes: `gold_rate_today`, `jewellery_product`, `jewellery_sales_voucher`, `jewellery_receipt_voucher`, `jewellery_sales_item`.
  - Centralized spot metal rate master (`gold_rate_today`) with automatic purity conversion matrices.
  - Dynamic pricing engine: `[(Net Weight + Wastage) × Karat Rate] + Making Charges + Stone Value + GST`.
  - Serialized barcode tag printing with hallmarking IDs.
- **Impact**: 100% pricing accuracy across all sales desks with gram-level vault inventory precision.

---

## ⚡ Featured AWS ALB & Terraform Project
- High-Availability Multi-AZ Cloud Architecture with **AWS Application Load Balancer & Terraform**
- ACM TLS 1.3 Termination, automated 301 HTTPS redirect, path-based routing (`/api/*`, `/ws/*`, `/*`), active `/healthz` health probes, and dynamic Auto Scaling Groups (ASG) across 3 Availability Zones.
- Interactive Terraform code viewer tabs for `alb.tf`, `asg.tf`, `vpc.tf`, and `variables.tf`.
