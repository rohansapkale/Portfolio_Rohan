export const skillsData = [
  {
    category: "Cloud Infrastructure (AWS)",
    description: "Architecting resilient, highly available, and scalable cloud solutions with AWS best practices.",
    icon: "Cloud",
    skills: [
      { name: "AWS Application Load Balancer (ALB)", level: 95, highlight: "Multi-AZ, Path/Host Routing, ACM TLS 1.3" },
      { name: "Auto Scaling Groups (ASG) & EC2", level: 90, highlight: "Target Tracking, Launch Templates, Dynamic Scaling" },
      { name: "Amazon VPC & Networking", level: 92, highlight: "Public/Private Subnets, NAT Gateways, Route Tables" },
      { name: "AWS Route 53 & ACM", level: 88, highlight: "Latency DNS, Alias Records, Automated SSL Certificates" },
      { name: "Amazon CloudWatch & Alarms", level: 85, highlight: "Custom Metrics, Target Tracking, Incident Alerts" },
      { name: "Amazon S3 & IAM Security", level: 90, highlight: "Least Privilege Policies, Multi-AZ Storage, Lifecycles" }
    ]
  },
  {
    category: "DevOps & Infrastructure as Code (IaC)",
    description: "Automating deployments, provisioning infrastructure declaratively, and managing containers.",
    icon: "Cpu",
    skills: [
      { name: "Terraform (IaC)", level: 92, highlight: "Modular Architectures, State Locking, Production Workspaces" },
      { name: "Docker & Containerization", level: 95, highlight: "Custom Multi-Stage Builds, Docker Compose, Volume Optimization" },
      { name: "CI/CD Pipelines (GitHub Actions)", level: 88, highlight: "Automated Testing, Production Build Hooks, Continuous Delivery" },
      { name: "Linux / Ubuntu Administration", level: 96, highlight: "Kernel Tuning, Bash Scripting, Systemd Services, psutil" },
      { name: "Nginx & Reverse Proxies", level: 94, highlight: "SSL Termination, Upstream Balancing, WebSocket Upgrades" },
      { name: "Supervisor & Process Management", level: 90, highlight: "Gunicorn, Node Microservices, Worker Daemons" }
    ]
  },
  {
    category: "Full-Stack & Systems Engineering",
    description: "Developing robust backend APIs, asynchronous workers, and enterprise ERP systems.",
    icon: "Server",
    skills: [
      { name: "Python (Backend & Systems)", level: 95, highlight: "System Automation, REST APIs, Asynchronous Tasks" },
      { name: "Frappe Framework (v14 - v16)", level: 96, highlight: "Custom DocTypes, Hooks, Workflows, Server Scripts, Multi-Tenancy" },
      { name: "ERPNext Implementation", level: 92, highlight: "Trading, Financial Accounting, Manufacturing, Custom Modules" },
      { name: "Node.js & Express", level: 90, highlight: "Microservices, Baileys Headless WhatsApp Bridge, Socket.io" },
      { name: "MariaDB & MySQL", level: 88, highlight: "Query Optimization, Indexing, Automated Scheduled Backups" },
      { name: "Redis & WebSockets", level: 90, highlight: "Pub/Sub Queues, Distributed Caching, Real-time Push" }
    ]
  },
  {
    category: "Modern Frontend & UI Architecture",
    description: "Building ultra-fast, responsive, keyboard-driven single-page applications.",
    icon: "Layout",
    skills: [
      { name: "Vue.js 3 (Composition API)", level: 94, highlight: "<script setup>, Reactive State, Composables, Custom Directives" },
      { name: "Vite Build Engine", level: 92, highlight: "Sub-Second HMR, Production Rollup Bundling, Proxy Configurations" },
      { name: "Tailwind CSS & Responsive UI", level: 95, highlight: "Dark Mode Systems, Fluid Grids, Mobile First UX" },
      { name: "Keyboard-First UI Systems", level: 96, highlight: "Zero-Mouse Data Entry, Shortcut Engines, Grid Focus" },
      { name: "REST & WebSocket Integration", level: 90, highlight: "Optimistic UI Updates, Live Stream Telemetry, Error Boundaries" }
    ]
  }
]

