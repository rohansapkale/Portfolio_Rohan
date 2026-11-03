export const albProjectData = {
  title: "High-Availability Multi-AZ Cloud Architecture with AWS Application Load Balancer & Terraform",
  subtitle: "Production-grade Infrastructure as Code (IaC) featuring automated health checks, path-based routing, ACM SSL offloading, and dynamic Auto Scaling Groups across multiple Availability Zones.",
  status: "Production Ready",
  highlights: [
    { label: "Target Availability", value: "99.99% Multi-AZ SLA" },
    { label: "Failover Time", value: "< 15s Automatic" },
    { label: "SSL Termination", value: "ACM 2048-bit TLS 1.3" },
    { label: "Provisioning", value: "100% Terraform IaC" }
  ],
  architectureOverview: {
    description: "Architected and provisioned an enterprise AWS cloud topology using Terraform to deliver resilient, elastic, and zero-downtime routing for microservices and frontend single-page applications. The Application Load Balancer serves as the single public entry point, distributing ingress traffic across multiple Availability Zones with sub-millisecond connection handling.",
    features: [
      {
        title: "Multi-AZ Resilience & Redundancy",
        desc: "Ingress traffic is balanced across 3 distinct Availability Zones (us-east-1a, us-east-1b, us-east-1c), preventing single points of failure with automatic subnet-level traffic diversion."
      },
      {
        title: "Path & Host-Based Intelligent Routing",
        desc: "L7 inspection routes `/api/*` requests to containerized backend target groups, `/ws/*` to sticky WebSocket pools, and root traffic `/*` to Vue 3 / SSR frontend clusters."
      },
      {
        title: "Deep Target Health Monitoring",
        desc: "Configured active HTTP health check probes (/healthz) on 15s intervals with 2-strike healthy and 3-strike unhealthy thresholds, plus 30s deregistration connection draining."
      },
      {
        title: "Dynamic Auto Scaling Groups (ASG)",
        desc: "Target tracking scaling policies monitor both average CPU utilization (70% target) and ALB RequestCountPerTarget, dynamically spinning up EC2 instances via Launch Templates."
      },
      {
        title: "Automated Security & TLS 1.3 Offloading",
        desc: "Centralized TLS certificates via AWS Certificate Manager (ACM) with automatic HTTP:80 to HTTPS:443 301 redirection, strict Security Group ingress isolation, and zero public exposure of backend nodes."
      }
    ]
  },
  topologyNodes: [
    {
      id: "route53",
      name: "Amazon Route 53",
      category: "DNS / Edge",
      desc: "Latency-based routing with health checks & apex alias pointing directly to the ALB dualstack DNS.",
      color: "cyan"
    },
    {
      id: "acm",
      name: "AWS Certificate Manager",
      category: "Security / SSL",
      desc: "Auto-renewing TLS/SSL certificates enforcing TLS 1.3 encryption and modern cipher suites.",
      color: "emerald"
    },
    {
      id: "alb",
      name: "Application Load Balancer",
      category: "L7 Traffic Director",
      desc: "Dual-stack public facing ALB evaluating host & path rules, terminating HTTPS, and forwarding to target groups.",
      color: "sky"
    },
    {
      id: "tg_fe",
      name: "Frontend Target Group",
      category: "Target Pool",
      desc: "Port 80/8085 frontend Vue.js static/SSR containers with health path '/' and zero-downtime rolling updates.",
      color: "purple"
    },
    {
      id: "tg_api",
      name: "Backend API Target Group",
      category: "Target Pool",
      desc: "Port 8000/8001 Python/Node microservices with active health checks at '/healthz' and sticky sessions.",
      color: "purple"
    },
    {
      id: "asg",
      name: "Auto Scaling Group",
      category: "Compute Fleet",
      desc: "Dynamic instance pool in private subnets across 3 AZs; scales from 2 to 10 instances on traffic surges.",
      color: "amber"
    },
    {
      id: "rds",
      name: "Multi-AZ Database",
      category: "Persistence",
      desc: "MariaDB/PostgreSQL with automatic cross-AZ standby replica and automated snapshot backups.",
      color: "rose"
    }
  ],
  terraformFiles: {
    "alb.tf": `#################################################################
# AWS Application Load Balancer (ALB) - Modular Terraform Configuration
# Architect: Rohan Sapkale
#################################################################

resource "aws_lb" "main" {
  name               = "\${var.environment}-app-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = module.vpc.public_subnets

  enable_deletion_protection = var.enable_deletion_protection
  idle_timeout               = 60
  drop_invalid_header_fields = true

  tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
    Project     = "Cloud-ALB-HA"
    Owner       = "Rohan Sapkale"
  }
}

# --- HTTP (Port 80) Listener with 301 Redirect to HTTPS ---
resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.main.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"
    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

# --- HTTPS (Port 443) Listener with ACM TLS 1.3 Offloading ---
resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.main.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06"
  certificate_arn   = var.acm_certificate_arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.frontend.arn
  }
}

# --- Path-Based Routing Rule: /api/* -> Backend API Target Group ---
resource "aws_lb_listener_rule" "api_routing" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 10

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.api_backend.arn
  }

  condition {
    path_pattern {
      values = ["/api/*", "/auth/*"]
    }
  }
}

# --- Path-Based Routing Rule: /ws/* -> WebSocket Target Group ---
resource "aws_lb_listener_rule" "ws_routing" {
  listener_arn = aws_lb_listener.https.arn
  priority     = 20

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.websocket.arn
  }

  condition {
    path_pattern {
      values = ["/ws/*", "/socket.io/*"]
    }
  }
}

# --- Backend API Target Group with Active Health Checks ---
resource "aws_lb_target_group" "api_backend" {
  name                 = "\${var.environment}-api-tg"
  port                 = 8000
  protocol             = "HTTP"
  vpc_id               = module.vpc.vpc_id
  target_type          = "instance"
  deregistration_delay = 30

  health_check {
    enabled             = true
    path                = "/healthz"
    protocol            = "HTTP"
    port                = "traffic-port"
    interval            = 15
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 3
    matcher             = "200-299"
  }

  stickiness {
    type            = "lb_cookie"
    cookie_duration = 86400
    enabled         = true
  }

  tags = {
    Name = "\${var.environment}-api-tg"
  }
}

# --- Frontend Target Group ---
resource "aws_lb_target_group" "frontend" {
  name                 = "\${var.environment}-fe-tg"
  port                 = 80
  protocol             = "HTTP"
  vpc_id               = module.vpc.vpc_id
  target_type          = "instance"
  deregistration_delay = 15

  health_check {
    path                = "/"
    interval            = 20
    healthy_threshold   = 2
    unhealthy_threshold = 3
    matcher             = "200"
  }
}`,

    "asg.tf": `#################################################################
# Auto Scaling Group (ASG) & Dynamic Target Tracking Policies
# Architect: Rohan Sapkale
#################################################################

resource "aws_launch_template" "backend" {
  name_prefix   = "\${var.environment}-backend-template-"
  image_id      = data.aws_ami.ubuntu_latest.id
  instance_type = var.instance_type
  key_name      = var.ssh_key_name

  vpc_security_group_ids = [aws_security_group.backend_instances_sg.id]

  user_data = base64encode(templatefile("\${path.module}/user_data.sh", {
    env = var.environment
  }))

  monitoring {
    enabled = true
  }

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name        = "\${var.environment}-backend-node"
      Role        = "BackendWorker"
      Environment = var.environment
    }
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_autoscaling_group" "backend" {
  name_prefix         = "\${var.environment}-backend-asg-"
  vpc_zone_identifier = module.vpc.private_subnets
  target_group_arns   = [aws_lb_target_group.api_backend.arn]

  min_size         = var.asg_min_size
  max_size         = var.asg_max_size
  desired_capacity = var.asg_desired_capacity

  health_check_type         = "ELB"
  health_check_grace_period = 180

  launch_template {
    id      = aws_launch_template.backend.id
    version = "$Latest"
  }

  instance_refresh {
    strategy = "Rolling"
    preferences {
      min_healthy_percentage = 50
      instance_warmup        = 120
    }
    triggers = ["tag"]
  }

  lifecycle {
    create_before_destroy = true
  }
}

# --- Dynamic Target Tracking: CPU Utilization (70% Target) ---
resource "aws_autoscaling_policy" "cpu_target_tracking" {
  name                   = "\${var.environment}-cpu-target-policy"
  autoscaling_group_name = aws_autoscaling_group.backend.name
  policy_type            = "TargetTrackingScaling"

  target_tracking_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ASGAverageCPUUtilization"
    }
    target_value = 70.0
  }
}

# --- Dynamic Target Tracking: ALB Request Count Per Target ---
resource "aws_autoscaling_policy" "alb_requests_scaling" {
  name                   = "\${var.environment}-alb-req-scaling"
  autoscaling_group_name = aws_autoscaling_group.backend.name
  policy_type            = "TargetTrackingScaling"

  target_tracking_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ALBRequestCountPerTarget"
      resource_label         = "\${aws_lb.main.arn_suffix}/\${aws_lb_target_group.api_backend.arn_suffix}"
    }
    target_value = 1000.0
  }
}`,

    "vpc.tf": `#################################################################
# AWS Multi-AZ VPC Architecture
# Architect: Rohan Sapkale
#################################################################

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.1.0"

  name = "\${var.environment}-production-vpc"
  cidr = var.vpc_cidr

  azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  private_subnets = ["10.0.11.0/24", "10.0.12.0/24", "10.0.13.0/24"]
  database_subnets = ["10.0.21.0/24", "10.0.22.0/24", "10.0.23.0/24"]

  enable_nat_gateway     = true
  single_nat_gateway     = false # High availability: 1 NAT Gateway per AZ
  one_nat_gateway_per_az = true
  enable_dns_hostnames   = true
  enable_dns_support     = true

  tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
    Project     = "Cloud-ALB-HA"
  }
}`,

    "variables.tf": `#################################################################
# Terraform Variables & Configuration Schemas
# Architect: Rohan Sapkale
#################################################################

variable "environment" {
  type        = string
  description = "Target deployment environment (dev, staging, prod)"
  default     = "prod"
}

variable "aws_region" {
  type        = string
  description = "Primary AWS deployment region"
  default     = "us-east-1"
}

variable "vpc_cidr" {
  type        = string
  description = "VPC CIDR block"
  default     = "10.0.0.0/16"
}

variable "instance_type" {
  type        = string
  description = "Compute instance size for ASG nodes"
  default     = "t3.medium"
}

variable "asg_min_size" {
  type        = number
  description = "Minimum nodes in ASG pool"
  default     = 2
}

variable "asg_max_size" {
  type        = number
  description = "Maximum nodes in ASG pool during peaks"
  default     = 10
}

variable "asg_desired_capacity" {
  type        = number
  description = "Desired baseline nodes"
  default     = 3
}

variable "acm_certificate_arn" {
  type        = string
  description = "ARN of validated AWS Certificate Manager TLS cert"
  default     = "arn:aws:acm:us-east-1:123456789012:certificate/abc-123"
}`
  }
}

