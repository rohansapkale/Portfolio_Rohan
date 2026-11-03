export const projectsData = [
  {
    id: "brokerage-desk",
    title: "Brokerage Desk & Multi-Item Trading Engine",
    category: "Full-Stack & Fintech",
    badge: "Enterprise Trading System",
    color: "cyan",
    role: "Lead Full-Stack Systems Engineer",
    technologies: ["Vue 3", "Vite", "Frappe v16", "Python", "ECB Forex API", "Tailwind CSS", "MariaDB"],
    summary: "High-throughput commodity brokerage workstation featuring real-time European Central Bank (Frankfurter) USD/INR forex conversion, 14-column accounting ledger audit registers, date-wise broker rules, and keyboard-first trade execution.",
    keyPoints: [
      "Integrated real-time ECB Frankfurter USD/INR foreign exchange rate API with automated daily rate fetching and date-wise historical lookup.",
      "Engineered a high-performance 14-column financial audit ledger with multi-item contract mapping and instantaneous margin computation.",
      "Built custom keyboard shortcut navigation engine for lightning-fast trade booking without mouse dependency.",
      "Designed date-wise broker rule evaluation engine for automatic commission calculation and settlement deductions."
    ],
    metrics: [
      { label: "Trade Execution Speed", value: "< 200ms" },
      { label: "Forex Sync", value: "Real-time Daily ECB" },
      { label: "Ledger Columns", value: "14-Col Audit Grid" }
    ],
    github: "https://github.com/rohan-sapkale-cbd-it/brokerage_module",
    status: "Active Production"
  },
  {
    id: "sauda-desk",
    title: "Sauda Desk & Commodity Trading Platform",
    category: "Fintech & Containerization",
    badge: "Dockerized Trading Suite",
    color: "emerald",
    role: "DevOps & Systems Engineer",
    technologies: ["Docker", "Vue.js", "Python", "Frappe Framework", "Redis", "Bash"],
    summary: "Ultra-fast commodity contract management platform containerized with custom Docker images, automated multi-stage builds, and rapid order reconciliation.",
    keyPoints: [
      "Containerized complete Sauda Desk stack with optimized custom Docker image reducing cold start time by 60%.",
      "Engineered automated settlement tracking and contract reconciliation for high-frequency commodity trades.",
      "Implemented seamless keyboard shortcuts for rapid contract entry, pricing formulas, and instant order confirmations.",
      "Integrated with Frappe background workers and Redis cache for sub-second database transactions."
    ],
    metrics: [
      { label: "Docker Image Size", value: "Optimized Multi-Stage" },
      { label: "Order Booking", value: "Sub-second" },
      { label: "Reliability", value: "100% Uptime" }
    ],
    github: "https://github.com/rohan-sapkale-cbd-it/sauda_module",
    status: "Active Production"
  },
  {
    id: "whatsapp-connector",
    title: "Headless WhatsApp Connector for ERPNext",
    category: "Cloud Microservice & ERP",
    badge: "Autonomous Dispatch Engine",
    color: "purple",
    role: "Backend Architect & Integrator",
    technologies: ["Node.js", "Baileys", "Frappe Backend Hooks", "Python", "REST APIs", "PDFKit"],
    summary: "Independent custom Frappe application built from scratch without UI chat wrappers. Connects via headless Node.js/Baileys QR authentication and automatically generates and dispatches Quotations and Invoices to customer WhatsApp numbers upon submission.",
    keyPoints: [
      "Engineered zero-UI headless WhatsApp bridge using Baileys and Node.js microservice communicating over local loopback HTTP API (port 5050).",
      "Created automated Frappe doc-events hooks: triggers upon Quotation / Sales Invoice submit, renders PDF in background, and delivers via WhatsApp.",
      "Implemented local device file attachment selector for test dispatches and media messages.",
      "Built resilient reconnection engine handling session token persistence, QR code re-generation, and socket health probes."
    ],
    metrics: [
      { label: "Dispatch Latency", value: "< 3s End-to-End" },
      { label: "Architecture", value: "100% Headless API" },
      { label: "Overhead", value: "Zero Webview Lag" }
    ],
    status: "Active Production"
  },
  {
    id: "accounts-desk",
    title: "Accounts Desk - Financial Workstation",
    category: "Full-Stack Financial SPA",
    badge: "Production Financial SPA",
    color: "amber",
    role: "Full-Stack Engineer & Maintainer",
    technologies: ["Vue.js", "Vite", "Frappe REST API", "Git", "MariaDB", "Tailwind CSS"],
    summary: "Specialized financial management single-page workstation for rapid balance sheet reconciliation, journal entries, vouchers, and cash flow analysis.",
    keyPoints: [
      "Architected responsive SPA deployed and synced directly to rohan-sapkale-cbd-it/account_desk.git.",
      "Delivered real-time ledger drill-downs, dynamic party balance lookups, and batch voucher posting.",
      "Built automated Git deployment hooks for seamless production updates and zero-downtime rebuilds."
    ],
    metrics: [
      { label: "GitHub Repo", value: "rohan-sapkale-cbd-it/account_desk" },
      { label: "Voucher Posting", value: "Batch Enabled" }
    ],
    github: "https://github.com/rohan-sapkale-cbd-it/account_desk.git",
    status: "Active Production"
  },
  {
    id: "server-management",
    title: "Server Management Suite & 24/7 Telegram Ops Bot",
    category: "Cloud Infrastructure & DevOps",
    badge: "Infrastructure & Remote Ops",
    color: "blue",
    role: "Cloud DevOps & Systems Admin",
    technologies: ["Python", "Telegram Bot API", "Supervisor", "Systemd", "Nginx", "Linux/Ubuntu", "psutil"],
    summary: "Multi-tenant server provisioning infrastructure paired with an interactive Telegram Bot (@ServerBoatBot) enabling full remote server monitoring, process control, dev/prod bench toggling, and live terminal execution.",
    keyPoints: [
      "Developed Telegram Management Bot with interactive inline keyboards for remote operations (frappe-web, node-socketio, brokerage desk, redis).",
      "Engineered real-time system health telemetry using psutil: CPU load meters, RAM consumption, disk health, and TCP port listening probes.",
      "Implemented remote quick tools: Bench cache purge, database backup triggers, WhatsApp bridge health tests, and remote bash terminal mode.",
      "Configured multi-tenant Nginx reverse proxy, DNS records, and SSL/TLS auto-renewal scripts."
    ],
    metrics: [
      { label: "Remote Admin", value: "24/7 Telegram Bot" },
      { label: "Monitored Ports", value: "80, 8001, 9001, 5050, 8082" },
      { label: "Uptime Tracking", value: "Continuous Polling" }
    ],
    status: "Active Production"
  },
  {
    id: "domain-erp-suites",
    title: "Enterprise ERP Suites: Sugar, Housing & Jewellery",
    category: "Domain Enterprise Systems",
    badge: "ERP Architecture",
    color: "rose",
    role: "Systems Architect & Developer",
    technologies: ["Frappe Framework", "Python", "MariaDB", "Custom DocTypes", "Workflows", "Role Permissions"],
    summary: "Suite of specialized industry ERP applications catering to high-volume manufacturing, real estate management, and luxury retail workflows.",
    keyPoints: [
      "Sugar Module: Factory cane procurement, farmer weighing bridge integrations, crushing batches, and automated grower payments.",
      "Housing Society ERP: Automated maintenance billing, tenant registers, society asset tracking, and payment gateway integration.",
      "Jewellery Module: Real-time metal rate matrices, karat purity wastage calculations, certified gemstone inventory, and barcode tag generation."
    ],
    metrics: [
      { label: "Industry Sectors", value: "Manufacturing, Housing, Retail" },
      { label: "Custom DocTypes", value: "50+ Data Models" }
    ],
    status: "Active Production"
  }
]

