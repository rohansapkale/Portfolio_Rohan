export const modulesData = [
  {
    id: "sauda-module",
    name: "Sauda Module",
    tagline: "High-Frequency Commodity Contract & Settlement Trading Engine",
    category: "Commodity & Trading Fintech",
    badge: "Production Trading Engine",
    color: "emerald",
    role: "Lead Systems Architect & DevOps Engineer",
    techStack: ["Vue.js 3", "Vite", "Docker", "Frappe Framework", "Python", "Redis", "Bash"],
    problemSolved: {
      summary: "Manual, sluggish trade recording in volatile commodity markets caused contract reconciliation backlogs, delayed settlement tracking, and severe order booking delays during peak trading hours.",
      details: "In agricultural commodity trading (sugar, pulses, edible oils, grains), dozens of high-value deals ('Sauda') occur within seconds over broker calls. Standard ERP form interfaces required multiple mouse clicks, heavy full-page reloads, and complex child tables that paralyzed trading desks. Brokers and traders suffered from unrecorded deal slips, dispatch over-allocation, and zero real-time visibility into outstanding contract balances.",
      painPoints: [
        "Traders could not keep pace with real-time phone orders using standard ERPNext forms (taking 40+ seconds per deal).",
        "Dispatches were frequently over-allocated due to lag in updating outstanding contract balances.",
        "Lack of instant keyboard-first workflows forced traders onto paper slips, creating double-entry accounting errors.",
        "Docker deployments faced slow startup latency and environment drift across multi-tenant servers."
      ]
    },
    configuration: {
      docTypes: [
        "sauda_voucher",
        "dispatch_sauda_entry",
        "dispatch_sauda_history"
      ],
      setup: "Multi-stage Docker containerization running optimized Node/Vite frontend and Gunicorn worker on port 8005. Integrated with Frappe Bench Redis Cache (port 13001) for instant balance calculations.",
      ports: "8005 (Docker Engine) / 8001 (Frappe Web API)",
      architecture: [
        "Keyboard-driven Vue 3 SPA with sub-second voucher entry (Enter/Tab navigation, instant numeric formatting, zero mouse dependency).",
        "Automated background dispatch reconciler computing remaining contract balances across multiple trucks.",
        "Optimized Dockerfile with multi-stage caching reducing image build time by 60% and guaranteeing deterministic deployments."
      ]
    },
    impact: [
      { label: "Deal Booking Speed", value: "< 3 Seconds" },
      { label: "Dispatch Errors", value: "0% Over-allocation" },
      { label: "Deployment", value: "Docker Containerized" }
    ]
  },

  {
    id: "sugar-module",
    name: "Sugar Module",
    tagline: "Factory Cane Procurement, Weighbridge & Multi-Tier Broker ERP",
    category: "Industrial Manufacturing & Supply Chain",
    badge: "Factory Enterprise ERP",
    color: "cyan",
    role: "Systems Architect & Backend Lead",
    techStack: ["Frappe Framework", "Python", "MariaDB", "Weighbridge Hardware APIs", "DocEvents", "Redis Queue"],
    problemSolved: {
      summary: "Massive sugar procurement operations struggled with multi-truck transit weight variances, uncoordinated delivery queues, and complex party-specific broker commission leakage.",
      details: "Sugar mills and wholesale bulk procurement hubs handle hundreds of truckloads of cane and refined sugar daily. Raw materials experience moisture loss and transit weight deductions, which traditional accounting software failed to track per vehicle. Furthermore, broker commissions are not flat percentages—they are dynamically tied to specific party dispatches, mill quotas, and tonnage thresholds.",
      painPoints: [
        "Inability to reconcile dispatch weights at source vs. destination weighbridge, leading to undetected transit theft or loss.",
        "Manual calculation of broker commissions tied to individual truck dispatches caused frequent dispute and delayed farmer settlements.",
        "High-volume harvest seasons overwhelmed traditional database tables, locking procurement registers."
      ]
    },
    configuration: {
      docTypes: [
        "sugar_purchase",
        "purchase_payment",
        "dispatch_entry",
        "dispatch_history",
        "broker",
        "broker_party_payment",
        "broker_quantity"
      ],
      setup: "Configured Frappe doc_events hooks on procurement submissions, asynchronous batch processors for dispatch history aggregation, and real-time ledger accounting.",
      ports: "8001 (Frappe Web) / 11001 (Background Queue Worker)",
      architecture: [
        "Multi-tier procurement workflow: Purchase Contract → Vehicle Dispatch Logging → Weighbridge Net Verification → Automated Payment Voucher.",
        "Party-specific broker commission engine that dynamically calculates brokerage per quintal based on verified delivered weights.",
        "Historical dispatch audit log tracking individual vehicle numbers, gross/tare weights, and mill delivery stamps."
      ]
    },
    impact: [
      { label: "Procurement Tracking", value: "100% Automated" },
      { label: "Commission Leakage", value: "Eliminated (0%)" },
      { label: "Audit Readiness", value: "Instant Weighbridge Sync" }
    ]
  },

  {
    id: "brokerage-module",
    name: "Brokerage Module",
    tagline: "High-Throughput Trading Workstation with Real-Time USD/INR Forex Engine",
    category: "Commodity & Trading Fintech",
    badge: "Enterprise Fintech Desk",
    color: "sky",
    role: "Lead Full-Stack Systems Engineer",
    techStack: ["Vue.js 3", "Vite", "Frappe Framework v16", "Frankfurter ECB Forex API", "Tailwind CSS", "MariaDB"],
    problemSolved: {
      summary: "Commodity brokerage houses faced severe financial risk due to fluctuating broker rates, inability to view 14-column accounting audit ledgers, and foreign exchange exposure on import/export deals.",
      details: "Brokers handle thousands of commodity vouchers daily with date-varying brokerage rates across diverse stock groups (sugar, oil, spices, grains). Prior to this module, brokers had no consolidated 14-column ledger matching their industry spreadsheets, commissions had to be computed manually with calculators, and deals involving international quotes had no automated currency conversion, causing huge losses during rupee volatility.",
      painPoints: [
        "No single 14-column register existed in standard ERPs to cross-reference Bill Ref, Inv No, Date, Party, Item, Packages, Weight, Rate, Broker, and Margin in one view.",
        "Broker commissions vary by date, party, and commodity grade—calculating this manually caused payment disputes.",
        "Foreign currency commodity quotes lacked automated daily USD/INR exchange rate updates, risking margin erosion."
      ]
    },
    configuration: {
      docTypes: [
        "broker_purchase_entry",
        "broker_sales_entry",
        "brokers",
        "broker_rate_configuration",
        "broker_rate_item",
        "broker_voucher_item",
        "dollar_rate_settings",
        "stock_group"
      ],
      setup: "Vue 3 Composition API SPA running via Vite dev server on port 8082 with Frappe v16 backend APIs (`api.py`), Frankfurter European Central Bank automated daily cron sync, and MariaDB indexing.",
      ports: "8082 (Vite Frontend) / 8001 (Frappe REST Backend)",
      architecture: [
        "Real-time USD/INR currency converter with automated daily ECB rate fetching and date-wise historical lookup matching voucher transaction dates.",
        "Standardized 14-column accounting ledger audit register with broker-level subtotals, multi-item mapping, and 1-click CSV/Excel export.",
        "Date-wise broker rate matrix engine automatically calculating commissions by commodity item, package count, and net quintals.",
        "Dual-currency view selector allowing brokers to toggle entire contract ledgers between INR and USD instantaneously."
      ]
    },
    impact: [
      { label: "Ledger Audit Grid", value: "14 Standard Columns" },
      { label: "Forex Synchronization", value: "Real-time Daily ECB" },
      { label: "Voucher Audit Time", value: "Reduced by 80%" }
    ]
  },

  {
    id: "housing-society",
    name: "Housing Society Module",
    tagline: "Comprehensive Residential & Commercial Property Management ERP",
    category: "Property Management ERP",
    badge: "Full-Scale Property ERP",
    color: "purple",
    role: "Full-Stack Enterprise Architect",
    techStack: ["Frappe Framework", "Python", "MariaDB", "XML Tally Exporter", "Server Scripts", "Workflows"],
    problemSolved: {
      summary: "Residential and commercial societies suffered from chaotic monthly maintenance billing, square-footage calculation discrepancies, delayed interest penalty postings, and manual data re-entry into Tally.",
      details: "Housing complexes manage diverse structures (multiple buildings, wings, floors, and commercial vs. residential units). Calculating maintenance charges based on mixed square-footage and flat-rate amenities, tracking tenant vs. owner occupancy, applying statutory compound interest on overdue balances, and handing over books to auditing chartered accountants was a manual nightmare.",
      painPoints: [
        "Manual bill generation for 200+ units took over a week every month, with frequent formula errors.",
        "Tracking overdue maintenance interest and penalty waivers created disputes and trust deficits between managing committees and members.",
        "Societies maintain accounts in Tally for statutory audits, requiring tedious manual dual-entry of every payment receipt."
      ]
    },
    configuration: {
      docTypes: [
        "society_details",
        "building",
        "wing",
        "floor",
        "society_unit",
        "society_member",
        "society_member_relation",
        "society_charges",
        "billing_template",
        "billing_template_item",
        "generate_bill",
        "bulk_bill_generation",
        "applicable_charges",
        "one_time_charges",
        "post_interest",
        "interest_waiver",
        "society_transaction",
        "society_member_transaction",
        "tally_export",
        "tax_ledger"
      ],
      setup: "Full hierarchical asset model (Society → Building → Wing → Floor → Unit), automated cron jobs for monthly bulk billing, interest calculation daemons, and XML serialization for Tally.",
      ports: "8001 (Frappe Web Server)",
      architecture: [
        "Hierarchical Master Configuration: Models complex campuses with granular attributes (carpet area, built-up area, parking slots, tenant/owner tags).",
        "Dynamic Billing Template Engine: Configures tiered charges (lift maintenance, water cess, sinking fund, parking fees) per square foot or flat unit.",
        "Automated Bulk Bill Generator: Dispatches hundreds of member bills, invoices, and payment receipts with one click.",
        "Statutory Interest & Waiver Workflow: Automated monthly compound interest posting on defaulters with multi-level approval for waivers.",
        "Native Tally XML Exporter: Exports all society member transactions, receipts, and tax ledgers directly into Tally."
      ]
    },
    impact: [
      { label: "Billing Cycle", value: "1 Week → 60 Seconds" },
      { label: "Audit Sync", value: "Native Tally XML Export" },
      { label: "Member Accuracy", value: "100% Dispute-Free" }
    ]
  },

  {
    id: "whatsapp-connector",
    name: "Headless WhatsApp Connector",
    tagline: "Autonomous Document Dispatch Microservice for ERPNext",
    category: "Cloud Microservices & Automation",
    badge: "Headless Microservice",
    color: "emerald",
    role: "Backend Architect & Integrator",
    techStack: ["Node.js", "Baileys", "Frappe Backend Hooks", "Python", "PDFKit", "REST APIs"],
    problemSolved: {
      summary: "Sales and logistics teams wasted thousands of hours manually downloading Quotation and Invoice PDFs, opening WhatsApp Web, typing phone numbers, and attaching files one by one.",
      details: "ERPNext had no autonomous, lightweight mechanism to send official PDF quotations or sales invoices to customers on WhatsApp upon submission. Existing third-party tools relied on bulky browser webviews or costly paid APIs that lacked native integration with Frappe's document lifecycle.",
      painPoints: [
        "Customer communications were delayed by hours as staff manually generated and emailed or texted invoices.",
        "Webview-based wrappers were unstable, crashing frequently and causing duplicate or missing messages.",
        "Lack of direct PDF attachment capabilities forced users to send plain text with no official branding or tax breakdowns."
      ]
    },
    configuration: {
      docTypes: [
        "whatsapp_settings",
        "whatsapp_message_log"
      ],
      setup: "Independent loopback microservice built with Node.js and Baileys running on port 5050. Integrated with Frappe doc_events hooks (`on_submit`) for Quotation and Sales Invoice DocTypes.",
      ports: "5050 (Node.js Baileys Bridge) / 8001 (Frappe Web)",
      architecture: [
        "Zero-UI Headless Bridge: Connects directly to WhatsApp servers via WebSocket; no Chromium or webview overhead.",
        "Native QR Authentication: Secure terminal/modal QR code handshake in Frappe settings with persistent token storage.",
        "Automated PDF Rendering Hook: Listens for Quotation / Sales Invoice submit events, automatically fetches the customer's phone number, renders standard print format PDF in the background (`frappe.attach_print`), and dispatches immediately.",
        "Local Device Attachment Picker: Built-in local file picker in test dialog for testing manual media and document dispatch."
      ]
    },
    impact: [
      { label: "Dispatch Speed", value: "< 3s After Submit" },
      { label: "Manual Effort", value: "100% Eliminated" },
      { label: "Memory Footprint", value: "< 50MB (Zero Chromium)" }
    ]
  },

  {
    id: "accounts-desk",
    name: "Accounts Desk",
    tagline: "Tally-Style Rapid Financial Accounting Workstation",
    category: "Core Accounting & Fintech",
    badge: "Financial SPA Workstation",
    color: "amber",
    role: "Full-Stack Engineer & Maintainer",
    techStack: ["Vue.js 3", "Vite", "Frappe REST API", "Git", "MariaDB", "Tailwind CSS"],
    problemSolved: {
      summary: "Accountants migrating from Tally to ERPNext struggled with slow page reloads, excessive mouse clicks, and inability to perform rapid voucher entry and ledger audits.",
      details: "Traditional web ERP accounting interfaces are designed around multi-tab forms with save buttons and validation dialogs. Professional accountants who process hundreds of journal entries, payment vouchers, and ledger lookups daily require pure keyboard navigation, instant drill-down balance sheets, and rapid voucher posting without page reloading.",
      painPoints: [
        "Entering high-volume journal and payment vouchers on web forms took 5x longer than legacy desktop tools.",
        "Auditing party balances required opening multiple tabs and navigating through complex ledger reports.",
        "Lack of standardized keyboard hotkeys (F1-F12) frustrated accounting staff."
      ]
    },
    configuration: {
      docTypes: [
        "Journal Entry",
        "Payment Entry",
        "Sales Invoice",
        "Purchase Invoice",
        "GL Entry"
      ],
      setup: "Standalone Vue 3 SPA synced to `rohan-sapkale-cbd-it/account_desk.git`. Communicates with Frappe REST APIs with token authorization and optimized MariaDB index queries.",
      ports: "Dedicated Frontend Workstation / 8001 (Frappe API)",
      architecture: [
        "Tally-Inspired Hotkey Engine: Full keyboard navigation (F4 Contra, F5 Payment, F6 Receipt, F7 Journal, F8 Sales, F9 Purchase).",
        "Instant Party Balance Ledger: Real-time debits/credits calculation and running ledger balance as you type party names.",
        "Batch Voucher Posting: Asynchronous validation and posting of multiple vouchers with rollback on error."
      ]
    },
    impact: [
      { label: "Voucher Posting Speed", value: "5x Faster" },
      { label: "Navigation", value: "100% Keyboard-Driven" },
      { label: "GitHub Repository", value: "account_desk.git" }
    ]
  },

  {
    id: "server-management",
    name: "Server Management Suite & Telegram Ops Bot",
    tagline: "Multi-Tenant Infrastructure Suite & 24/7 Mobile Remote Management",
    category: "Cloud Infrastructure & DevOps",
    badge: "Cloud DevOps Platform",
    color: "blue",
    role: "Cloud DevOps & Systems Administrator",
    techStack: ["Python", "Telegram Bot API", "Nginx", "Supervisor", "Systemd", "Linux/Ubuntu", "psutil"],
    problemSolved: {
      summary: "Operating multi-tenant Frappe instances across multiple cloud servers was error-prone, requiring manual SSH sessions for deployments, SSL renewals, backups, and process restarts.",
      details: "Managing dozens of client sites, configuring custom domains, managing DNS records, setting up Let's Encrypt SSL certificates, taking database backups, and monitoring server health (CPU, RAM, disk space, listening ports) manually was unsustainable and led to unmonitored production outages.",
      painPoints: [
        "Engineers had to connect via SSH from laptops even for trivial operations like clearing bench cache or restarting a frozen gunicorn worker.",
        "No automated monitoring existed to alert administrators when a Redis queue stalled or a port went offline.",
        "Manual Nginx virtual host configuration caused syntax errors and site downtime during domain migrations."
      ]
    },
    configuration: {
      docTypes: [
        "server",
        "server_service",
        "server_monitoring",
        "domain_",
        "website_",
        "hosting_plan",
        "customer_",
        "deployment",
        "incident",
        "ssl_certificate",
        "bakup"
      ],
      setup: "Multi-tenant site provisioner paired with a dedicated 24/7 Telegram Bot daemon (`@ServerBoatBot`) running on systemd with interactive inline keyboards.",
      ports: "Monitors 80, 8001, 9001, 5050, 8082, 11001, 13001, 3306",
      architecture: [
        "Automated Provisioning: Automatically configures Nginx virtual hosts, DNS records, and SSL/TLS certificate renewals.",
        "Interactive Telegram Management Bot (@ServerBoatBot): Remote server dashboard with inline buttons for production stack control, dev bench toggling, and live log streaming.",
        "Real-Time Telemetry Daemon: Built with Python and `psutil`, continuously probing CPU load, RAM usage, disk storage, and TCP port connectivity.",
        "Remote Bash Terminal Mode: Execute diagnostic commands (uptime, free -m, docker ps, bench status, backup) securely from a smartphone."
      ]
    },
    impact: [
      { label: "Remote Operations", value: "24/7 Telegram Bot" },
      { label: "Service Uptime", value: "99.9% Monitored" },
      { label: "Incident Response", value: "Under 1 Minute" }
    ]
  },

  {
    id: "jewellery-module",
    name: "Jewellery Module",
    tagline: "Precious Metals, Karat Purity, Wastage & Hallmarking ERP",
    category: "Retail & Luxury Enterprise ERP",
    badge: "Specialized Retail ERP",
    color: "rose",
    role: "Enterprise Systems Developer",
    techStack: ["Frappe Framework", "Python", "MariaDB", "Barcode Generators", "Custom DocTypes", "Workflows"],
    problemSolved: {
      summary: "Jewellery merchants suffered profit leakage due to inaccurate daily gold/silver rate updates, complex karat purity conversions, and manual wastage/making charge computations.",
      details: "Gold, diamond, and precious jewellery retail and manufacturing involves volatile spot metal rates changing multiple times a day. Standard retail ERPs cannot handle items priced by gross weight minus stone weight plus purity wastage percentage (24K, 22K, 18K) plus making charges per gram.",
      painPoints: [
        "Sales staff manually calculated jewellery prices on calculators, leading to miscalculations and margin leakage during market fluctuations.",
        "Inventory reconciliation between raw bullion bars and finished hallmarked jewellery items was impossible in standard ERPs.",
        "Inability to generate dynamic barcode tags with hallmarking details and stone weight breakdowns."
      ]
    },
    configuration: {
      docTypes: [
        "gold_rate_today",
        "jewellery_product",
        "jewellery_sales_voucher",
        "jewellery_receipt_voucher",
        "jewellery_sales_item"
      ],
      setup: "Custom Frappe application with dynamic pricing formulas, automated daily gold/silver rate boards, and serialized barcode tag printers.",
      ports: "8001 (Frappe Web Server)",
      architecture: [
        "Spot Metal Rate Master (`gold_rate_today`): Centralized board where entering today's 24K rate automatically recalculates 22K, 18K, and silver rates across all active sales desks.",
        "Dynamic Pricing Calculation: Price = [(Net Weight + Wastage Weight) × Current Karat Rate] + Making Charges + Stone Value + GST.",
        "Barcode & Tag Generator: Automatically prints specialized jewellery tags displaying Net Weight, Purity, Gross Weight, and Hallmarking ID."
      ]
    },
    impact: [
      { label: "Pricing Accuracy", value: "100% Error-Free" },
      { label: "Rate Adjustment", value: "Instant Board Sync" },
      { label: "Inventory Visibility", value: "Gram-Level Precision" }
    ]
  }
]

