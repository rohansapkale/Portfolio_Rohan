<template>
  <section id="experience" class="py-16 sm:py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Header -->
      <div class="space-y-2">
        <span class="section-kicker">EXPERIENCE</span>
        <h2 class="section-title">
          Professional<br />
          milestones &amp; impact
        </h2>
      </div>

      <!-- Split Layout Matching Reference Image -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left Side: Framed Portrait in Crimson-Illuminated Grid (Exact Match to Reference!) -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(220,38,38,0.2)] bg-[#0d0d12] group">
            
            <!-- Isometric Crimson Grid Backdrop -->
            <div class="absolute inset-0 crimson-grid-bg transition-transform duration-700 group-hover:scale-105"></div>
            
            <!-- Intense Center Red Glow -->
            <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-red-600/30 rounded-full blur-[50px] pointer-events-none"></div>

            <!-- Stylized Silhouette Profile -->
            <div class="absolute inset-0 flex items-end justify-center pointer-events-none">
              <svg class="w-full h-[90%] object-contain crimson-bottom-fade transition-transform duration-500 group-hover:translate-y-1" viewBox="0 0 360 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Head -->
                <path d="M145 85 C145 50, 215 50, 215 85 C222 110, 220 150, 212 175 C202 205, 158 205, 148 175 C140 150, 138 110, 145 85 Z" fill="#e5e7eb" />
                <!-- Hair -->
                <path d="M138 85 C130 60, 155 35, 180 32 C205 35, 230 60, 222 85 C215 70, 205 65, 180 65 C155 65, 145 70, 138 85 Z" fill="#ffffff" />
                <!-- Neck & Dark Turtleneck -->
                <path d="M155 180 L150 230 L210 230 L205 180 Z" fill="#18181b" stroke="#ef4444" stroke-width="1.5" />
                <!-- Jacket in Crimson -->
                <path d="M150 230 L95 290 L40 450 L320 450 L265 290 L210 230 L180 330 Z" fill="#991b1b" stroke="#ef4444" stroke-width="1.5" />
              </svg>
            </div>

            <!-- Soft Bottom Gradient Fade into Obsidian Base -->
            <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent"></div>

            <!-- Signature Tag -->
            <div class="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
              <p class="text-white text-xs font-bold">Rohan Sapkale</p>
              <p class="text-[10px] text-neutral-400 font-mono">Continuous Delivery &amp; Architecture</p>
            </div>

          </div>
        </div>

        <!-- Right Side: Clean Minimalist Timeline List -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Milestone 1 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-[#0e0e13] border border-white/[0.08] hover:border-red-500/30 transition-all space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
              <div>
                <h3 class="text-base sm:text-lg font-bold text-white">
                  Lead Cloud DevOps &amp; Systems Architect
                </h3>
                <p class="text-xs text-red-400 font-mono">CBD IT Solutions • Pune, MH</p>
              </div>
              <span class="text-xs font-mono text-neutral-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                Sept 2024 — Present
              </span>
            </div>
            <ul class="text-xs sm:text-sm text-neutral-300 space-y-2 font-light leading-relaxed">
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">▪</span>
                <span>Architected AWS Multi-AZ infrastructure with Terraform (Application Load Balancers, Auto Scaling Groups, private VPC subnets, and automated failover).</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">▪</span>
                <span>Engineered high-throughput Vue 3 commodity brokerage desk with 14-column accounting ledgers and automated European Central Bank daily forex rate updates.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">▪</span>
                <span>Designed single-query database optimization replacing 55 sequential HTTP API loops with sub-15ms response latency.</span>
              </li>
            </ul>
          </div>

          <!-- Milestone 2 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-[#0e0e13] border border-white/[0.08] hover:border-red-500/30 transition-all space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
              <div>
                <h3 class="text-base sm:text-lg font-bold text-white">
                  Full-Stack Enterprise Systems Engineer
                </h3>
                <p class="text-xs text-neutral-400 font-mono">CBD IT Solutions</p>
              </div>
              <span class="text-xs font-mono text-neutral-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                Dec 2023 — Aug 2024
              </span>
            </div>
            <ul class="text-xs sm:text-sm text-neutral-300 space-y-2 font-light leading-relaxed">
              <li class="flex items-start gap-2">
                <span class="text-neutral-500 mt-1">▪</span>
                <span>Developed custom ERPNext procurement platforms for sugar mills, integrating automated weighbridge verification and multi-tier broker commission rules.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-neutral-500 mt-1">▪</span>
                <span>Built sub-3-second high-speed agricultural commodity trading terminal (Sauda Module) with Redis contract balance queue.</span>
              </li>
            </ul>
          </div>

          <!-- Milestone 3 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-[#0e0e13] border border-white/[0.08] hover:border-red-500/30 transition-all space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
              <div>
                <h3 class="text-base sm:text-lg font-bold text-white">
                  Cloud Infrastructure &amp; Web Systems Engineer
                </h3>
                <p class="text-xs text-neutral-400 font-mono">Software Systems</p>
              </div>
              <span class="text-xs font-mono text-neutral-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-auto">
                Aug 2022 — Nov 2023
              </span>
            </div>
            <ul class="text-xs sm:text-sm text-neutral-300 space-y-2 font-light leading-relaxed">
              <li class="flex items-start gap-2">
                <span class="text-neutral-500 mt-1">▪</span>
                <span>Administered Linux production hosts (Ubuntu), Nginx reverse proxy routing, SSL automation with Let's Encrypt, and Dockerized microservices.</span>
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
