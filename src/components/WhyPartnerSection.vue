<template>
  <section id="why-partner" class="py-16 sm:py-24 relative overflow-hidden">
    <!-- Subtle Ambient Glow -->
    <div class="absolute -top-24 right-10 w-96 h-96 bg-red-600/[0.08] blur-[100px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <!-- Section Header (Matching Reference Typography) -->
      <div class="space-y-2">
        <span class="section-kicker">WHY PARTNER WITH ME</span>
        <h2 class="section-title">
          Why Partner With Me<br />
          Today And Always?
        </h2>
      </div>

      <!-- Bento Grid (4 Asymmetric Cards Matching Reference Layout) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        
        <!-- Card 1: Production-Grade Reliability (Large Left Tall Card, 7 Cols) -->
        <div class="md:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between group">
          <!-- Top Visual: Code badge and micro-nodes -->
          <div class="h-44 sm:h-52 w-full rounded-2xl bg-[#09090d] border border-white/[0.06] p-5 relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 crimson-grid-isometric opacity-60"></div>
            
            <!-- Floating Code Badge & Nodes -->
            <div class="relative z-10 flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-neutral-900/90 border border-red-500/30 flex items-center justify-center font-mono text-red-400 font-bold text-lg shadow-[0_0_25px_rgba(220,38,38,0.3)]">
                &lt;/&gt;
              </div>
              <div class="flex items-center gap-2">
                <div class="h-0.5 w-6 bg-gradient-to-r from-red-500 to-white/20"></div>
                <div class="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-xs font-mono text-neutral-300">
                  CI
                </div>
                <div class="h-0.5 w-6 bg-white/20"></div>
                <div class="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-xs font-mono text-neutral-300">
                  CD
                </div>
                <div class="h-0.5 w-6 bg-gradient-to-r from-white/20 to-red-500"></div>
                <div class="w-10 h-10 rounded-xl bg-neutral-900 border border-red-500/40 flex items-center justify-center text-xs font-mono text-red-300 shadow-[0_0_15px_rgba(220,38,38,0.25)]">
                  99.9%
                </div>
              </div>
            </div>

            <!-- Bottom Left Micro Tag -->
            <div class="absolute bottom-3 left-4 text-[10px] font-mono text-neutral-500">
              ● PROD_READY_SYSTEMS
            </div>
          </div>

          <!-- Bottom Content -->
          <div class="pt-6 space-y-2">
            <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Production-Grade Reliability
            </h3>
            <p class="text-sm text-neutral-400 leading-relaxed font-light">
              Clean, thoroughly tested, enterprise-ready source code with full observability baked in from day one. Automated Docker pipelines and zero-downtime rolling deployments.
            </p>
          </div>
        </div>

        <!-- Card 2: Performance First Mindset (Top Right, 5 Cols) -->
        <div class="md:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between group">
          <!-- Glowing Waveform Visual -->
          <div class="h-32 sm:h-36 w-full rounded-2xl bg-[#09090d] border border-white/[0.06] p-4 relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-t from-red-600/10 via-transparent to-transparent"></div>
            
            <!-- SVG Frequency Curve Wave -->
            <svg class="w-full h-20 text-red-500" viewBox="0 0 300 80" fill="none">
              <path d="M0 40 Q40 40, 60 20 T100 60 T140 10 T180 70 T220 25 T260 50 T300 40" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
              <path d="M0 40 Q40 40, 60 20 T100 60 T140 10 T180 70 T220 25 T260 50 T300 40 L300 80 L0 80 Z" fill="url(#waveFill)" opacity="0.15"/>
              <defs>
                <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ef4444"/>
                  <stop offset="1" stop-color="#ef4444" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <circle cx="140" cy="10" r="4" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
            </svg>

            <!-- Benchmark Badge -->
            <div class="absolute top-3 right-3 px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-[10px] font-mono text-red-400 font-bold">
              &lt; 15ms Latency
            </div>
          </div>

          <!-- Bottom Content -->
          <div class="pt-5 space-y-1.5">
            <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">
              Performance First Mindset
            </h3>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Sub-second database queries, sub-100ms render speeds, and aggressive multi-tier Redis and single-query caching.
            </p>
          </div>
        </div>

        <!-- Card 3: Business-Driven Decisions (Middle Right, 5 Cols) -->
        <div class="md:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between group">
          <!-- 3D Glowing Wireframe Globe / Dot-Matrix Visual -->
          <div class="h-36 sm:h-40 w-full rounded-2xl bg-[#09090d] border border-white/[0.06] p-4 relative overflow-hidden flex items-center justify-center">
            <!-- Glowing Red Dot-Matrix Sphere -->
            <div class="relative w-28 h-28 flex items-center justify-center">
              <div class="absolute inset-0 rounded-full border border-red-500/30 animate-pulse"></div>
              <div class="absolute inset-2 rounded-full border border-dashed border-red-500/20"></div>
              <!-- Grid Points -->
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
            
            <div class="absolute bottom-3 right-4 text-[10px] font-mono text-neutral-500">
              ● ROI_OPTIMIZED
            </div>
          </div>

          <!-- Bottom Content -->
          <div class="pt-5 space-y-1.5">
            <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">
              Business-Driven Decisions
            </h3>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Cross-functional alignment, clear technical communication, and systems strategy that directly accelerates revenue and reduces operational overhead.
            </p>
          </div>
        </div>

        <!-- Card 4: Scalable Cloud Architecture (Bottom Wide Card, 7 Cols) -->
        <div class="md:col-span-7 bento-card p-6 sm:p-7 flex flex-col justify-between group">
          <!-- Server Array & Trace Lines Visual -->
          <div class="h-36 sm:h-40 w-full rounded-2xl bg-[#09090d] border border-white/[0.06] p-4 relative overflow-hidden flex items-center justify-between">
            <div class="absolute inset-0 crimson-grid-isometric opacity-40"></div>
            
            <!-- Interactive Server Node Schematic -->
            <div class="relative z-10 grid grid-cols-3 gap-3 w-full max-w-sm mx-auto">
              <div class="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-center">
                <span class="text-[10px] font-mono text-neutral-400 block">ALB us-east-1</span>
                <span class="text-xs font-bold text-emerald-400">HEALTHY</span>
              </div>
              <div class="p-2.5 rounded-xl bg-neutral-900 border border-red-500/40 text-center shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <span class="text-[10px] font-mono text-red-300 block">ASG Multi-AZ</span>
                <span class="text-xs font-bold text-white">AUTO-SCALE</span>
              </div>
              <div class="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-center">
                <span class="text-[10px] font-mono text-neutral-400 block">Terraform</span>
                <span class="text-xs font-bold text-emerald-400">STATE OK</span>
              </div>
            </div>

            <div class="absolute bottom-3 left-4 text-[10px] font-mono text-neutral-500">
              ● AWS_MULTI_AZ_PERIMETER
            </div>
          </div>

          <!-- Bottom Content -->
          <div class="pt-5 space-y-1.5">
            <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">
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
