<template>
  <section id="experience" class="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      
      <!-- Section Header -->
      <div class="space-y-2">
        <span class="section-kicker">EXPERIENCE</span>
        <h2 class="section-title">
          Professional<br />
          milestones &amp; impact
        </h2>
      </div>

      <!-- Split Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        <!-- Left Side: Framed Portrait in Crimson-Illuminated Grid -->
        <div class="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div class="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(220,38,38,0.2)] bg-[#0d0d12] group">
            
            <!-- Isometric Crimson Grid Backdrop -->
            <div class="absolute inset-0 crimson-grid-bg transition-transform duration-700 group-hover:scale-105"></div>
            
            <!-- Center Red Glow -->
            <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-56 h-44 sm:h-56 bg-red-600/30 rounded-full blur-[50px] pointer-events-none"></div>

            <!-- Real Developer Portrait with Ambient Lighting -->
            <div class="absolute inset-0 flex items-center justify-center overflow-hidden">
              <img 
                src="/rohan-developer.jpg" 
                alt="Rohan Sapkale - Enterprise Systems & Cloud DevOps" 
                class="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <!-- Soft Bottom Gradient Fade into Obsidian Base -->
            <div class="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent"></div>

            <!-- Signature Tag -->
            <div class="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 z-10 p-2.5 sm:p-3 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
              <p class="text-white text-xs font-bold">Rohan Sapkale</p>
              <p class="text-[9px] sm:text-[10px] text-neutral-400 font-mono">Continuous Delivery &amp; Architecture</p>
            </div>

          </div>
        </div>

        <!-- Right Side: Clean Minimalist Timeline List -->
        <div class="lg:col-span-7 space-y-4 sm:space-y-6 order-1 lg:order-2">
          <!-- Milestone 2 -->
          <div class="p-4 sm:p-6 rounded-2xl bg-[#0e0e13] border border-white/[0.08] hover:border-red-500/30 transition-all space-y-2.5 sm:space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-2.5 sm:pb-3">
              <div>
                <h3 class="text-sm sm:text-lg font-bold text-white">
                  Software Engineer | ERP Developer
                </h3>
                <p class="text-[11px] sm:text-xs text-neutral-400 font-mono">CBD IT Solutions</p>
              </div>
              <span class="text-[10px] sm:text-xs font-mono text-neutral-400 px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto whitespace-nowrap">
                Dec 2025 — Continue
              </span>
            </div>
            <ul class="text-[11px] sm:text-sm text-neutral-300 space-y-2 font-light leading-relaxed">
              <li class="flex items-start gap-2">
                <span class="text-neutral-500 mt-0.5 sm:mt-1 flex-shrink-0">▪</span>
                <span>Developed custom ERPNext procurement platforms for sugar mills, integrating automated weighbridge verification and multi-tier broker commission rules.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-neutral-500 mt-0.5 sm:mt-1 flex-shrink-0">▪</span>
                <span>Built sub-3-second high-speed agricultural commodity trading terminal (Sauda Module) with Redis contract balance queue.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>
