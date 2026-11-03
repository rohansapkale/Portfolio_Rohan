<template>
  <section id="impact" class="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
      
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
        <div class="space-y-2">
          <span class="section-kicker">IMPACT</span>
          <h2 class="section-title">
            Engineering Impact<br class="hidden sm:inline" />
            &amp; Measurable Metrics
          </h2>
        </div>

        <!-- Navigation Controls -->
        <div class="flex items-center gap-2 self-start sm:self-auto">
          <button 
            @click="prevSlide"
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-red-500/40 hover:bg-white/[0.08] transition-all text-xs sm:text-sm"
            title="Previous"
          >
            ←
          </button>
          <button 
            @click="nextSlide"
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-red-500/40 hover:bg-white/[0.08] transition-all text-xs sm:text-sm"
            title="Next"
          >
            →
          </button>
        </div>
      </div>

      <!-- 4 High-Impact KPI Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <!-- KPI 1 -->
        <div class="bento-card p-5 sm:p-6 space-y-2.5 sm:space-y-3 group">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center font-bold text-red-400 text-xs sm:text-sm shadow-[0_0_15px_rgba(220,38,38,0.25)]">
            AWS
          </div>
          <div>
            <span class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              99.99%
            </span>
            <p class="text-xs sm:text-sm font-bold text-neutral-200 mt-1">Multi-AZ Uptime SLA</p>
          </div>
          <p class="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed">
            Provisioned with Terraform across us-east-1a and us-east-1b with automated ALB target health checks and auto-scaling.
          </p>
        </div>

        <!-- KPI 2 -->
        <div class="bento-card p-5 sm:p-6 space-y-2.5 sm:space-y-3 group">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center font-bold text-red-400 text-xs sm:text-sm shadow-[0_0_15px_rgba(220,38,38,0.25)]">
            ⚡
          </div>
          <div>
            <span class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              &lt; 3s
            </span>
            <p class="text-xs sm:text-sm font-bold text-neutral-200 mt-1">Trade Booking Speed</p>
          </div>
          <p class="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed">
            Reduced order entry latency from 45 seconds to under 3 seconds in the Sauda trading desk with keyboard-only traversal.
          </p>
        </div>

        <!-- KPI 3 -->
        <div class="bento-card p-5 sm:p-6 space-y-2.5 sm:space-y-3 group">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center font-bold text-red-400 text-xs sm:text-sm shadow-[0_0_15px_rgba(220,38,38,0.25)]">
            📊
          </div>
          <div>
            <span class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              14-Col
            </span>
            <p class="text-xs sm:text-sm font-bold text-neutral-200 mt-1">Audit Ledger Register</p>
          </div>
          <p class="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed">
            Standardized commodity accounting register matching reference Excel spreadsheets with broker-level subtotal calculations.
          </p>
        </div>

        <!-- KPI 4 -->
        <div class="bento-card p-5 sm:p-6 space-y-2.5 sm:space-y-3 group">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center font-bold text-red-400 text-xs sm:text-sm shadow-[0_0_15px_rgba(220,38,38,0.25)]">
            ⇄
          </div>
          <div>
            <span class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              100%
            </span>
            <p class="text-xs sm:text-sm font-bold text-neutral-200 mt-1">Automated Daily Sync</p>
          </div>
          <p class="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed">
            Automated European Central Bank daily USD/INR forex currency synchronization and weighbridge net weight procurement.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const prevSlide = () => {}
const nextSlide = () => {}
</script>
