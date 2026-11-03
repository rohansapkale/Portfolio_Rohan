export const cvData = {
  name: "Rohan Sapkale",
  title: "Cloud DevOps & Full-Stack Systems Engineer",
  status: "Actively Seeking Cloud & DevOps / Full-Stack Systems Roles",
  location: "India · Open to Remote & Global Relocation",
  email: "sapkalerohan07@gmail.com",
  github: "https://github.com/rohansapkale",
  telegram: "@ServerBoatBot / @rohan_sapkale",
  summary: "Results-driven Cloud DevOps Specialist and Full-Stack Systems Architect with hands-on experience designing high-availability AWS cloud infrastructure with Terraform, automating enterprise Frappe/ERPNext deployments, and engineering high-throughput Vue.js trading applications. Proven track record in orchestrating Application Load Balancers (ALB) across Multi-AZ environments, containerizing services with Docker, building autonomous headless microservices, and operating 24/7 server infrastructure with remote Telegram automation.",
  availability: {
    status: "Immediately Available",
    targetRoles: [
      "Cloud DevOps Engineer",
      "Site Reliability Engineer (SRE)",
      "AWS Infrastructure Engineer",
      "Full-Stack Systems Engineer (Python / Frappe / Vue.js)"
    ],
    engagementTypes: ["Full-Time", "Contract", "Consulting"],
    workPreference: "Remote / Hybrid / Relocation"
  },
  coreCompetencies: [
    { title: "Cloud & AWS", items: ["Application Load Balancer (ALB)", "Auto Scaling Groups (ASG)", "VPC Multi-AZ", "Route 53", "ACM TLS 1.3", "CloudWatch", "S3"] },
    { title: "DevOps & IaC", items: ["Terraform", "Docker & Multi-Stage Builds", "GitHub Actions CI/CD", "Linux/Ubuntu Admin", "Nginx", "Supervisor", "Systemd"] },
    { title: "Backend Systems", items: ["Python", "Frappe Framework v14-v16", "ERPNext", "Node.js", "Express", "Baileys WhatsApp Bridge", "RESTful APIs", "Socket.io"] },
    { title: "Databases & Cache", items: ["MariaDB", "MySQL", "Redis (Queue & Cache)", "Automated Backups", "Query Optimization"] },
    { title: "Frontend Engineering", items: ["Vue.js 3 (Composition API)", "Vite", "Tailwind CSS", "Keyboard-First Workstations", "Responsive Dark UX"] }
  ],
  experience: [
    {
      role: "Lead Full-Stack & DevOps Systems Engineer",
      company: "Enterprise ERP & Commodity Trading Systems",
      period: "2024 - Present",
      location: "India",
      highlights: [
        "Architected and deployed AWS Multi-AZ cloud infrastructure utilizing Terraform, incorporating Application Load Balancers, Route 53, and Auto Scaling Groups for 99.99% uptime.",
        "Engineered the Brokerage Desk trading engine with Vue 3, integrating live European Central Bank (Frankfurter) USD/INR exchange rates and an audited 14-column ledger grid.",
        "Containerized the Sauda Desk commodity management suite using custom Docker images and streamlined CI/CD pipeline triggers.",
        "Developed an independent, headless WhatsApp Connector Frappe app using Node.js and Baileys, automating instant PDF quotation and invoice delivery upon document submission.",
        "Implemented a 24/7 Telegram Server Operations Bot (@ServerBoatBot) providing remote process supervisor controls, psutil system telemetry, and remote terminal execution.",
        "Maintained and enhanced specialized industry ERP solutions including Housing Society Management, Sugar Factory Cane Procurement, and Jewellery modules."
      ]
    },
    {
      role: "Full-Stack Software Developer & Systems Administrator",
      company: "Cloud Systems & Business Automation",
      period: "2023 - 2024",
      location: "India",
      highlights: [
        "Built custom Frappe Framework DocTypes, Server Scripts, and DocEvents hooks to streamline client business workflows.",
        "Created modern single-page applications with Vue.js and Vite, replacing legacy form interfaces with high-speed keyboard-driven desks.",
        "Managed multi-tenant Ubuntu Linux production servers, setting up Nginx reverse proxy configurations with Let's Encrypt SSL certificates.",
        "Optimized MariaDB database queries and configured automated offsite backups and point-in-time recovery mechanisms."
      ]
    }
  ],
  keyProjects: [
    {
      name: "AWS Multi-AZ ALB & Terraform Infrastructure",
      tech: "AWS, Terraform, ALB, ASG, VPC, ACM",
      desc: "Complete production-ready Infrastructure as Code provisioning a resilient Application Load Balancer with path-based routing, ACM TLS offloading, dynamic Auto Scaling Groups, and health monitoring across 3 Availability Zones."
    },
    {
      name: "Brokerage Desk & Multi-Item Trading Engine",
      tech: "Vue 3, Vite, Python, Frappe v16, Frankfurter Forex API",
      desc: "High-frequency commodity trading workstation featuring real-time USD/INR daily currency conversion, 14-column accounting ledger audit registers, and date-wise broker rules."
    },
    {
      name: "Headless WhatsApp Dispatch Microservice",
      tech: "Frappe App, Node.js, Baileys, REST API",
      desc: "Zero-UI headless WhatsApp integration triggering background PDF generation and instant document dispatch to customer phone numbers upon ERPNext quotation/invoice submission."
    },
    {
      name: "Server Boat Telegram Management Bot",
      tech: "Python, Telegram Bot API, psutil, Supervisor, Systemd",
      desc: "Interactive Telegram bot providing remote server monitoring, production stack controls, bench cache purging, and remote bash shell execution."
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering / Computer Science & Systems Engineering",
      institution: "State University",
      period: "2020 - 2024",
      focus: "Cloud Computing, Distributed Systems, Database Management, Software Architecture"
    }
  ],
  certifications: [
    "AWS Certified Solutions Architect (Associate Level Track)",
    "HashiCorp Certified: Terraform Associate",
    "Linux Professional Institute - Linux System Administration"
  ]
}

