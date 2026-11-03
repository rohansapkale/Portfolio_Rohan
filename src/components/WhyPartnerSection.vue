<template>
  <section id="why-partner" class="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
    <!-- Subtle Ambient Glow -->
    <div class="absolute -top-24 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-red-600/[0.08] blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
      
      <!-- Section Header -->
      <div class="space-y-2">
        <span class="section-kicker">WHY PARTNER WITH ME</span>
        <h2 class="section-title">
          Why Partner With Me<br />
          Today And Always?
        </h2>
      </div>

      <!-- Bento Grid (4 Asymmetric Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        
        <!-- Card 1: Production-Grade Reliability (Large Left Tall Card) -->
        <div class="md:col-span-7 bento-card p-5 sm:p-7 lg:p-8 flex flex-col justify-between group">
          <!-- Top Visual -->
          <div class="h-40 sm:h-52 w-full rounded-2xl bg-[#09090d] border border-white/[0.06] p-4 sm:p-5 relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 crimson-grid-isometric opacity-60"></div>
            
            <!-- Scaled Node Flow -->
            <div class="relative z-10 flex items-center gap-2 sm:gap-4 scale-[0.82] xs:scale-[0.92] sm:scale-100 origin-center">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-900/90 border border-red-500/30 flex items-center justify-center font-mono text-red-400 font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(220,38,38,0.3)] flex-shrink-0">
                &lt;/&gt;
              </div>
              <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <div class="h-0.5 w-4 sm:w-6 bg-gradient-to-r from-red-500 to-white/20"></div>
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[10px] sm:text-xs font-mono text-neutral-300">
                  CI
                </div>
                <div class="h-0.5 w-4 sm:w-6 bg-white/20"></div>
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[10px] sm:text-xs font-mono text-neutral-300">
                  CD
                </div>
                <div class="h-0.5 w-4 sm:w-6 bg-gradient-to-r from-white/20 to-red-500"></div>
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 border border-red-500/40 flex items-center justify-center text-[9px] sm:text-xs font-mono text-red-300 shadow-[0_0_15px_rgba(220,38,38,0.25)]">
                  99.9%
                </div>
              </div>
            </div>

            <!-- Bottom Left Micro Tag -->
            <div class="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 text-[9px] sm:text-[10px] font-mono text-neutral-500">
              ● PROD_READY_SYSTEMS
            </div>
          </div>

          <!-- Bottom Content -->
          <div class="pt-5 sm:pt-6 space-y-1.5 sm:space-y-2">
            <h3 class="text-lg sm:text-2xl font-bold text-white tracking-tight">
              Production-Grade Reliability
            </h3>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Clean, thoroughly tested, enterprise-ready source code with full observability baked in from day one. Automated Docker pipelines and zero-downtime rolling deployments.
            </p>
          </div>
        </div>

        <!-- Card 2: Performance First Mindset (Top Right) -->
        <div class="md:col-span-5 bento-card p-5 sm:p-6 lg:p-7 flex flex-col justify-between group">
          <!-- Glowing Waveform Visual -->
          <div class="h-32 sm:h-36 w-full rounded-2xl bg-[#09090d] border border-white/[0.06] p-4 relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-t from-red-600/10 via-transparent to-transparent"></div>
            
            <!-- SVG Frequency Curve Wave -->
            <svg class="w-full h-16 sm:h-20 text-red-500" viewBox="0 0 300 80" fill="none">
              <path d="M0 40 Q40 40, 60 20 T100 60 T140 10 T180 70 T220 25 T260 50 T300 40" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
              <path d="M0 40 Q40 40, 60 20 T100 60 T140 10 T180 70 T220 25 T260 50 T300 40 L300 80 L0 80 Z" fill="url(#waveFill2)" opacity="0.15"/>
              <defs>
                <linearGradient id="waveFill2" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ef4444"/>
                  <stop offset="1" stop-color="#ef4444" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <circle cx="140" cy="10" r="4" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
            </svg>

            <!-- Benchmark Badge -->
            <div class="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-[9px] sm:text-[10px] font-mono text-red-400 font-bold">
              &lt; 15ms Latency
            </div>
          </div>

          <!-- Bottom Content -->
          <div class="pt-4 sm:pt-5 space-y-1.5">
            <h3 class="text-base sm:text-xl font-bold text-white tracking-tight">
              Performance First Mindset
            </h3>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Sub-second database queries, sub-100ms render speeds, and aggressive multi-tier Redis and single-query caching.
            </p>
          </div>
        </div>

        <!-- Card 3: Business-Driven Decisions (Middle Right) -->
        <div class="md:col-span-5 bento-card p-5 sm:p-6 lg:p-7 flex flex-col justify-between group">
          <!-- 3D Glowing Wireframe Visual -->
          <div class="h-32 sm:h-40 w-full rounded-2xl bg-[#09090d] border border-white/[0.06] p-4 relative overflow-hidden flex items-center justify-center">
            <div class="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
              <div class="absolute inset-0 rounded-full border border-red-500/30 animate-pulse"></div>
              <div class="absolute inset-2 rounded-full border border-dashed border-red-500/20"></div>
              <svg class="w-full h-full text-red-400/80" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="3" fill="#ffffff"/>
                <circle cx="50" cy="25" r="2"/><circle cx="50" cy="75" r="2"/>
                <circle cx="25" cy="50" r="2"/><circle cx="75" cy="50" r="2"/>
                <circle cx="32" cy="32" r="2"/><circle cx="68" cy="32" r="2"/>
                <circle cx="32" cy="68" r="2"/><circle cx="68" cy="68" r="2"/>
                <path d="M25 50 Q50 30 75 50 Q50 70 25 50" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="2 2"/>
                <path d="M50 25 Q30 50 50 75 Q70 50 50 25" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="2 2"/>
              </svg>
            </div>
            
            <div class="absolute bottom-2.5 right-3 sm:bottom-3 sm:right-4 text-[9px] sm:text-[10px] font-mono text-neutral-500">
              ● ROI_OPTIMIZED
            </div>
          </div>

          <!-- Bottom Content -->
          <div class="pt-4 sm:pt-5 space-y-1.5">
            <h3 class="text-base sm:text-xl font-bold text-white tracking-tight">
              Business-Driven Decisions
            </h3>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Cross-functional alignment, clear technical communication, and systems strategy designed to maximize operational throughput and business ROI.
            </p>
          </div>
        </div>

        <!-- Card 4: Scalable Cloud Architecture (Bottom Wide Card) -->
        <div class="md:col-span-7 bento-card p-5 sm:p-6 lg:p-7 flex flex-col justify-between group">
          <!-- Server Array & Trace Lines Visual -->
          <div class="h-32 sm:h-40 w-full rounded-2xl bg-[#09090d] border border-white/[0.06] p-3 sm:p-4 relative overflow-hidden flex items-center justify-between">
            <div class="absolute inset-0 crimson-grid-isometric opacity-40"></div>
            
            <!-- Responsive Grid for Server Nodes -->
            <div class="relative z-10 grid grid-cols-3 gap-1.5 sm:gap-3 w-full max-w-sm mx-auto">
              <div class="p-2 sm:p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-center">
                <span class="text-[8px] sm:text-[10px] font-mono text-neutral-400 block truncate">ALB us-east-1</span>
                <span class="text-[10px] sm:text-xs font-bold text-emerald-400">HEALTHY</span>
              </div>
              <div class="p-2 sm:p-2.5 rounded-xl bg-neutral-900 border border-red-500/40 text-center shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <span class="text-[8px] sm:text-[10px] font-mono text-red-300 block truncate">ASG Multi-AZ</span>
                <span class="text-[10px] sm:text-xs font-bold text-white">AUTOSCALE</span>
              </div>
              <div class="p-2 sm:p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-center">
                <span class="text-[8px] sm:text-[10px] font-mono text-neutral-400 block truncate">Terraform</span>
                <span class="text-[10px] sm:text-xs font-bold text-emerald-400">STATE OK</span>
              </div>
            </div>

            <div class="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 text-[9px] sm:text-[10px] font-mono text-neutral-500">
              ● AWS_MULTI_AZ_PERIMETER
            </div>
          </div>

          <!-- Bottom Content -->
          <div class="pt-4 sm:pt-5 space-y-1.5">
            <h3 class="text-base sm:text-xl font-bold text-white tracking-tight">
              Scalable Cloud Architecture
            </h3>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Multi-AZ failovers, secure VPC perimeters, and infrastructure as code (IaC) built to seamlessly scale with modern enterprise growth.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>
