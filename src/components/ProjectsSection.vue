<template>
  <section id="solutions" class="py-16 sm:py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Header Matching Reference -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div class="space-y-2">
          <span class="section-kicker">WORK</span>
          <h2 class="section-title">
            Featured Solutions &amp; Projects
          </h2>
        </div>

        <button 
          @click="$emit('open-case-studies')"
          class="btn-pill-dark text-xs self-start sm:self-auto"
        >
          <span>All Case Studies</span>
          <span>↗</span>
        </button>
      </div>

      <!-- 2x2 Grid of High-Impact Solution Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        <!-- Card 1: Brokerage Desk / Fintech Ledger -->
        <div 
          @click="selectProject('brokerage')"
          class="bento-card group cursor-pointer flex flex-col justify-between"
        >
          <!-- Upper Half: UI Preview Frame with Crimson Grid Backlight -->
          <div class="h-56 sm:h-64 w-full bg-[#0a0a0e] relative overflow-hidden border-b border-white/[0.06] flex items-center justify-center p-6">
            <div class="absolute inset-0 crimson-grid-isometric opacity-60 transition-transform duration-500 group-hover:scale-105"></div>
            
            <!-- Mockup Dashboard Container -->
            <div class="relative z-10 w-full max-w-sm rounded-xl bg-[#111116] border border-white/10 p-4 shadow-2xl space-y-3">
              <div class="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-neutral-400">
                <span>BROKERAGE_DESK_AUDIT</span>
                <span class="text-emerald-400 font-bold">$1 = ₹84.95 (ECB SYNC)</span>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center">
                <div class="p-2 rounded bg-black/40 border border-white/5">
                  <span class="text-[9px] text-neutral-400 block font-mono">BROKERS</span>
                  <span class="text-xs font-bold text-white">55 Masters</span>
                </div>
                <div class="p-2 rounded bg-black/40 border border-red-500/30">
                  <span class="text-[9px] text-red-400 block font-mono">LATENCY</span>
                  <span class="text-xs font-bold text-red-300">~15ms SQL</span>
                </div>
                <div class="p-2 rounded bg-black/40 border border-white/5">
                  <span class="text-[9px] text-neutral-400 block font-mono">COLUMNS</span>
                  <span class="text-xs font-bold text-white">14-Col Ledger</span>
                </div>
              </div>
            </div>

            <!-- Top Right Live Pill -->
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 border border-red-500/30 text-[10px] font-mono text-red-300">
              Live Engine
            </div>
          </div>

          <!-- Lower Half: Meta & Copy -->
          <div class="p-6 sm:p-7 space-y-4">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                  Fintech Ledger API &amp; Brokerage Desk
                </h3>
                <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mt-1.5">
                  High-throughput commodity brokerage ledger engine processing standardized 14-column accounting audits with automated European Central Bank daily forex rate updates.
                </p>
              </div>
              <div class="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-red-600 transition-all">
                ↗
              </div>
            </div>

            <!-- Technology Pills -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">Vue.js 3</span>
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">Python REST API</span>
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">MariaDB</span>
              <span class="px-2.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-[11px] font-mono text-red-300">Single-Query SQL</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Sugar Procurement Engine / SaaS Analytics Dashboard -->
        <div 
          @click="selectProject('sugar')"
          class="bento-card group cursor-pointer flex flex-col justify-between"
        >
          <!-- Upper Half: UI Preview Frame with Crimson Grid Backlight -->
          <div class="h-56 sm:h-64 w-full bg-[#0a0a0e] relative overflow-hidden border-b border-white/[0.06] flex items-center justify-center p-6">
            <div class="absolute inset-0 crimson-grid-isometric opacity-60 transition-transform duration-500 group-hover:scale-105"></div>
            
            <!-- Mockup Dashboard Container -->
            <div class="relative z-10 w-full max-w-sm rounded-xl bg-[#111116] border border-white/10 p-4 shadow-2xl space-y-3">
              <div class="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-neutral-400">
                <span>PROCUREMENT_TELEMETRY</span>
                <span class="text-red-400 font-bold">100% AUTOMATED</span>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center">
                <div class="p-2 rounded bg-black/40 border border-white/5">
                  <span class="text-[9px] text-neutral-400 block font-mono">WEIGHBRIDGE</span>
                  <span class="text-xs font-bold text-white">Net Verified</span>
                </div>
                <div class="p-2 rounded bg-black/40 border border-red-500/30">
                  <span class="text-[9px] text-red-400 block font-mono">COMMISSIONS</span>
                  <span class="text-xs font-bold text-red-300">Per Quintal</span>
                </div>
                <div class="p-2 rounded bg-black/40 border border-white/5">
                  <span class="text-[9px] text-neutral-400 block font-mono">PIPELINES</span>
                  <span class="text-xs font-bold text-white">Contract→Pay</span>
                </div>
              </div>
            </div>

            <!-- Top Right Live Pill -->
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 border border-red-500/30 text-[10px] font-mono text-red-300">
              Enterprise SaaS
            </div>
          </div>

          <!-- Lower Half: Meta & Copy -->
          <div class="p-6 sm:p-7 space-y-4">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                  SaaS Analytics &amp; Sugar Procurement Engine
                </h3>
                <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mt-1.5">
                  End-to-end agro-commodity procurement platform integrating multi-tier weighbridge verification, moisture variance controls, and automated party commission payouts.
                </p>
              </div>
              <div class="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-red-600 transition-all">
                ↗
              </div>
            </div>

            <!-- Technology Pills -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">ERPNext v16</span>
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">Frappe Framework</span>
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">MariaDB</span>
              <span class="px-2.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-[11px] font-mono text-red-300">Docker Deploy</span>
            </div>
          </div>
        </div>

        <!-- Card 3: Sauda Module / High-Speed Trade Execution Hub -->
        <div 
          @click="selectProject('sauda')"
          class="bento-card group cursor-pointer flex flex-col justify-between"
        >
          <!-- Upper Half: UI Preview Frame with Crimson Grid Backlight -->
          <div class="h-56 sm:h-64 w-full bg-[#0a0a0e] relative overflow-hidden border-b border-white/[0.06] flex items-center justify-center p-6">
            <div class="absolute inset-0 crimson-grid-isometric opacity-60 transition-transform duration-500 group-hover:scale-105"></div>
            
            <!-- Mockup Dashboard Container -->
            <div class="relative z-10 w-full max-w-sm rounded-xl bg-[#111116] border border-white/10 p-4 shadow-2xl space-y-3">
              <div class="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-neutral-400">
                <span>TRADE_EXECUTION_ENGINE</span>
                <span class="text-emerald-400 font-bold">&lt; 3s BOOKING</span>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center">
                <div class="p-2 rounded bg-black/40 border border-red-500/30">
                  <span class="text-[9px] text-red-400 block font-mono">SPEEDUP</span>
                  <span class="text-xs font-bold text-red-300">15x Faster</span>
                </div>
                <div class="p-2 rounded bg-black/40 border border-white/5">
                  <span class="text-[9px] text-neutral-400 block font-mono">NAVIGATION</span>
                  <span class="text-xs font-bold text-white">0 Mouse Traversal</span>
                </div>
                <div class="p-2 rounded bg-black/40 border border-white/5">
                  <span class="text-[9px] text-neutral-400 block font-mono">SYNC</span>
                  <span class="text-xs font-bold text-white">Redis Queue</span>
                </div>
              </div>
            </div>

            <!-- Top Right Live Pill -->
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 border border-red-500/30 text-[10px] font-mono text-red-300">
              Low Latency
            </div>
          </div>

          <!-- Lower Half: Meta & Copy -->
          <div class="p-6 sm:p-7 space-y-4">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                  Rapid Trade Execution Hub (Sauda Desk)
                </h3>
                <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mt-1.5">
                  Sub-second keyboard-driven trading terminal reducing trade booking turnaround from 45 seconds to under 3 seconds, eliminating contract over-allocations with Redis state synchronization.
                </p>
              </div>
              <div class="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-red-600 transition-all">
                ↗
              </div>
            </div>

            <!-- Technology Pills -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">Vue 3 Composition</span>
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">Redis Cache &amp; Queue</span>
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">Docker Port 8005</span>
              <span class="px-2.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-[11px] font-mono text-red-300">Sub-3s Execution</span>
            </div>
          </div>
        </div>

        <!-- Card 4: AWS Multi-AZ ALB & Terraform Infrastructure -->
        <div 
          @click="selectProject('alb')"
          class="bento-card group cursor-pointer flex flex-col justify-between"
        >
          <!-- Upper Half: UI Preview Frame with Crimson Grid Backlight -->
          <div class="h-56 sm:h-64 w-full bg-[#0a0a0e] relative overflow-hidden border-b border-white/[0.06] flex items-center justify-center p-6">
            <div class="absolute inset-0 crimson-grid-isometric opacity-60 transition-transform duration-500 group-hover:scale-105"></div>
            
            <!-- Mockup Dashboard Container -->
            <div class="relative z-10 w-full max-w-sm rounded-xl bg-[#111116] border border-white/10 p-4 shadow-2xl space-y-3">
              <div class="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-neutral-400">
                <span>AWS_IAC_INFRASTRUCTURE</span>
                <span class="text-emerald-400 font-bold">99.99% MULTI-AZ</span>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center">
                <div class="p-2 rounded bg-black/40 border border-red-500/30">
                  <span class="text-[9px] text-red-400 block font-mono">TERRAFORM</span>
                  <span class="text-xs font-bold text-red-300">100% IaC</span>
                </div>
                <div class="p-2 rounded bg-black/40 border border-white/5">
                  <span class="text-[9px] text-neutral-400 block font-mono">FAILOVER</span>
                  <span class="text-xs font-bold text-white">Zero Downtime</span>
                </div>
                <div class="p-2 rounded bg-black/40 border border-white/5">
                  <span class="text-[9px] text-neutral-400 block font-mono">REGIONS</span>
                  <span class="text-xs font-bold text-white">us-east-1a/b</span>
                </div>
              </div>
            </div>

            <!-- Top Right Live Pill -->
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 border border-red-500/30 text-[10px] font-mono text-red-300">
              Cloud DevOps
            </div>
          </div>

          <!-- Lower Half: Meta & Copy -->
          <div class="p-6 sm:p-7 space-y-4">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                  AWS High-Availability ALB &amp; Terraform Infrastructure
                </h3>
                <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mt-1.5">
                  Production-grade AWS infrastructure engineered with Terraform IaC, multi-AZ Application Load Balancers, automated health-checking target groups, and dynamic Auto-Scaling Groups.
                </p>
              </div>
              <div class="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-red-600 transition-all">
                ↗
              </div>
            </div>

            <!-- Technology Pills -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">Terraform (HCL)</span>
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">AWS ALB &amp; ASG</span>
              <span class="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">Multi-AZ VPC</span>
              <span class="px-2.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-[11px] font-mono text-red-300">Route 53 DNS</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['open-case-studies', 'select-project'])

const selectProject = (id) => {
  emit('select-project', id)
}
</script>
