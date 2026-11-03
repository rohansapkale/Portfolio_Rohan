<template>
  <section id="alb-project" class="py-16 sm:py-24 border-t border-[#1e2533] bg-[#090b10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Title & Badges -->
      <div class="space-y-3 max-w-3xl">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#141b29] text-blue-300 border border-[#24314c]">
            AWS Reference Architecture
          </span>
          <span class="text-xs text-slate-400">Terraform IaC Blueprint</span>
        </div>

        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          High-Availability Cloud Ingress Architecture (AWS ALB)
        </h2>

        <p class="text-base text-slate-300 leading-relaxed">
          Production-grade Infrastructure as Code (IaC) provisioning an elastic, fault-tolerant ingress routing layer. Features automated active health monitoring, L7 path-based routing, ACM TLS 1.3 termination, and dynamic Auto Scaling Groups spanning 3 Availability Zones.
        </p>
      </div>

      <!-- High-Impact SLA & Capability Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(item, idx) in albProjectData.highlights" :key="idx" class="p-4 sm:p-5 rounded-lg bg-[#0e1219] border border-[#1e2533]">
          <span class="text-xs uppercase tracking-wider text-slate-400">{{ item.label }}</span>
          <div class="text-xl sm:text-2xl font-bold text-white mt-1">{{ item.value }}</div>
        </div>
      </div>

      <!-- Interactive Architecture Topology Visualizer -->
      <div class="p-6 sm:p-8 space-y-6 rounded-xl border border-[#1e2533] bg-[#0d1017]">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1a202c]">
          <div>
            <h3 class="text-lg font-bold text-white flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              Multi-AZ Cloud Ingress Topology
            </h3>
            <p class="text-xs text-slate-400 mt-0.5">Select any component node below to view configuration specifications and routing rules.</p>
          </div>
          <div class="flex items-center gap-2 text-xs text-slate-300 bg-[#121620] px-3 py-1.5 rounded border border-[#1e2533]">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Target Availability: 99.99% Multi-AZ SLA</span>
          </div>
        </div>

        <!-- Visual Flow Canvas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-1">
          
          <!-- Node 1: Route 53 & ACM Edge -->
          <div 
            @click="activeNode = 'route53'"
            :class="[
              activeNode === 'route53' ? 'border-blue-500 bg-[#131b29]' : 'border-[#1e2533] bg-[#10141d] hover:border-[#2f3b50]',
              'p-4 rounded-lg border cursor-pointer transition-colors'
            ]"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-[#172033] text-blue-300 border border-[#2b3a59]">Edge DNS & SSL</span>
              <span class="text-xs text-slate-500">Step 01</span>
            </div>
            <div class="font-bold text-white text-base">Route 53 + ACM</div>
            <p class="text-xs text-slate-400 mt-1">Dual-stack alias DNS with auto-renewing TLS 1.3 certificates.</p>
            <div class="mt-3 text-xs text-blue-400 flex items-center gap-1 font-medium">
              <span>View specs</span>
              <span>→</span>
            </div>
          </div>

          <!-- Node 2: AWS Application Load Balancer -->
          <div 
            @click="activeNode = 'alb'"
            :class="[
              activeNode === 'alb' ? 'border-blue-500 bg-[#131b29]' : 'border-[#1e2533] bg-[#10141d] hover:border-[#2f3b50]',
              'p-4 rounded-lg border cursor-pointer transition-colors'
            ]"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-[#172033] text-blue-300 border border-[#2b3a59]">Public Ingress (3 AZs)</span>
              <span class="text-xs text-slate-500">Step 02</span>
            </div>
            <div class="font-bold text-white text-base">AWS ALB Gateway</div>
            <p class="text-xs text-slate-400 mt-1">L7 inspection: 80→443 redirect, /api/*, /ws/* routing rules.</p>
            <div class="mt-3 text-xs text-blue-400 flex items-center gap-1 font-medium">
              <span>View specs</span>
              <span>→</span>
            </div>
          </div>

          <!-- Node 3: Target Groups & Health Probes -->
          <div 
            @click="activeNode = 'target_groups'"
            :class="[
              activeNode === 'target_groups' ? 'border-blue-500 bg-[#131b29]' : 'border-[#1e2533] bg-[#10141d] hover:border-[#2f3b50]',
              'p-4 rounded-lg border cursor-pointer transition-colors'
            ]"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-[#172033] text-blue-300 border border-[#2b3a59]">Target Pools</span>
              <span class="text-xs text-slate-500">Step 03</span>
            </div>
            <div class="font-bold text-white text-base">Target Groups</div>
            <p class="text-xs text-slate-400 mt-1">Active /healthz probing every 15s with 30s connection draining.</p>
            <div class="mt-3 text-xs text-blue-400 flex items-center gap-1 font-medium">
              <span>View specs</span>
              <span>→</span>
            </div>
          </div>

          <!-- Node 4: Dynamic Auto Scaling Group (ASG) -->
          <div 
            @click="activeNode = 'asg'"
            :class="[
              activeNode === 'asg' ? 'border-blue-500 bg-[#131b29]' : 'border-[#1e2533] bg-[#10141d] hover:border-[#2f3b50]',
              'p-4 rounded-lg border cursor-pointer transition-colors'
            ]"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-[#172033] text-blue-300 border border-[#2b3a59]">Private Compute</span>
              <span class="text-xs text-slate-500">Step 04</span>
            </div>
            <div class="font-bold text-white text-base">Dynamic ASG Fleet</div>
            <p class="text-xs text-slate-400 mt-1">Multi-AZ private subnets with CPU 70% target tracking policy.</p>
            <div class="mt-3 text-xs text-blue-400 flex items-center gap-1 font-medium">
              <span>View specs</span>
              <span>→</span>
            </div>
          </div>

        </div>

        <!-- Active Component Inspection Panel -->
        <div class="p-4 sm:p-5 rounded-lg bg-[#10141d] border border-[#1e2533] text-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#1a202c]">
            <div class="flex items-center gap-2">
              <span class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Component:</span>
              <span class="font-bold text-white">{{ activeNodeData.title }}</span>
            </div>
            <span class="text-xs text-slate-400">{{ activeNodeData.badge }}</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 text-xs">
            <div class="space-y-1">
              <span class="text-slate-400 font-semibold block">Architectural Role:</span>
              <p class="text-slate-200">{{ activeNodeData.function }}</p>
            </div>
            <div class="space-y-1">
              <span class="text-slate-400 font-semibold block">Parameters:</span>
              <p class="text-slate-200">{{ activeNodeData.config }}</p>
            </div>
            <div class="space-y-1">
              <span class="text-slate-400 font-semibold block">Resilience Guarantee:</span>
              <p class="text-emerald-400">{{ activeNodeData.resilience }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Architectural Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(feat, fIdx) in albProjectData.architectureOverview.features" :key="fIdx" class="p-6 rounded-lg bg-[#0e1219] border border-[#1e2533] space-y-2.5">
          <div class="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Requirement 0{{ fIdx + 1 }}
          </div>
          <h4 class="text-base font-bold text-white">{{ feat.title }}</h4>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">{{ feat.desc }}</p>
        </div>
      </div>

      <!-- Terraform IaC Blueprint Viewer -->
      <div class="rounded-xl overflow-hidden border border-[#1e2533] bg-[#0c0f16]">
        
        <!-- Viewer Header & File Tabs -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#10141d] border-b border-[#1a202c]">
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-300">Terraform Source Modules</span>
          </div>

          <!-- File Tabs -->
          <div class="flex flex-wrap items-center gap-1.5">
            <button 
              v-for="(code, filename) in albProjectData.terraformFiles" 
              :key="filename"
              @click="activeTab = filename"
              :class="[
                activeTab === filename 
                  ? 'bg-[#1e2638] text-white border-[#3b4b6d] font-semibold' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#141824] border-transparent',
                'px-3 py-1 rounded text-xs font-mono border transition-colors'
              ]"
            >
              {{ filename }}
            </button>
            
            <!-- Copy Code Button -->
            <button 
              @click="copyCode" 
              class="px-2.5 py-1 text-xs rounded bg-[#171d2b] text-slate-300 hover:text-white hover:bg-[#20283b] ml-2 border border-[#273248] transition-colors"
            >
              <span>{{ copied ? 'Copied' : 'Copy Code' }}</span>
            </button>
          </div>
        </div>

        <!-- Code Block -->
        <div class="p-4 sm:p-6 bg-[#080a0f] overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed max-h-[460px] overflow-y-auto">
          <pre><code>{{ albProjectData.terraformFiles[activeTab] }}</code></pre>
        </div>

        <!-- Code Footer -->
        <div class="p-3 bg-[#10141d] border-t border-[#1a202c] flex items-center justify-between text-xs text-slate-400">
          <span>Target Provider: hashicorp/aws ~> 5.0</span>
          <span class="text-slate-300">Status: Validated with terraform validate & plan</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { albProjectData } from '../data/albArchitectureData.js'

const activeTab = ref('alb.tf')
const activeNode = ref('alb')
const copied = ref(false)

const nodeDetails = {
  route53: {
    title: "Amazon Route 53 & ACM TLS 1.3",
    badge: "Edge Ingress Gateway",
    function: "Handles DNS routing directly to the ALB dualstack alias and auto-renews TLS/SSL certificates.",
    config: "Alias target = aws_lb.main.dns_name, evaluate_target_health = true, TLS 1.3 modern ciphers.",
    resilience: "Global Anycast DNS with latency-based cross-region failover capability."
  },
  alb: {
    title: "AWS Application Load Balancer (ALB)",
    badge: "L7 Traffic Director",
    function: "Listens on port 80 (automatic 301 redirect to HTTPS) and port 443 with ACM offloading, routing to backend pools based on URL path.",
    config: "Multi-AZ subnets (us-east-1a, 1b, 1c), idle_timeout = 60, drop_invalid_header_fields = true.",
    resilience: "Cross-zone load balancing enabled; automated target failover if an AZ degrades."
  },
  target_groups: {
    title: "Target Groups & Probes",
    badge: "Health Verification",
    function: "Directs traffic to healthy compute instances and drains connections gracefully upon maintenance.",
    config: "Health path = /healthz, interval = 15s, healthy_threshold = 2, deregistration_delay = 30s.",
    resilience: "Unhealthy instances automatically detached from routing in < 30 seconds."
  },
  asg: {
    title: "Auto Scaling Group Fleet",
    badge: "Elastic Compute Pool",
    function: "Automatically provisions EC2 instances based on traffic surges and CPU demands.",
    config: "Min = 2, Desired = 3, Max = 10, target_tracking = 70% CPU & ALB RequestCountPerTarget.",
    resilience: "Instances evenly distributed across 3 private subnets behind NAT Gateways."
  }
}

const activeNodeData = computed(() => {
  return nodeDetails[activeNode.value] || nodeDetails.alb
})

function copyCode() {
  const code = albProjectData.terraformFiles[activeTab.value]
  navigator.clipboard.writeText(code).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}
</script>
