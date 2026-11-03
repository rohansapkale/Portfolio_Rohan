<template>
  <section id="hero" class="relative pt-6 pb-12 sm:pt-14 sm:pb-24 overflow-hidden">
    <!-- Subtle Top Ambient Glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] lg:w-[800px] h-[250px] sm:h-[350px] bg-red-600/[0.08] blur-[80px] sm:blur-[120px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        <!-- Left Column: Editorial Value Proposition -->
        <div class="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
          
          <!-- Section Kicker Tag -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300">
            <span class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
            <span class="tracking-wider uppercase text-[10px] sm:text-xs">Systems Architect &amp; Cloud DevOps</span>
          </div>

          <!-- Main Bold Headline -->
          <div class="space-y-2.5 sm:space-y-3">
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
              Engineering scalable architecture for modern enterprises
            </h1>
            <p class="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl font-light mx-auto lg:mx-0">
              Full-Stack Software Engineer &amp; Cloud DevOps Specialist specializing in high-performance Vue.js applications, robust Python &amp; Frappe backend systems, and automated AWS cloud infrastructure.
            </p>
          </div>

          <!-- Primary CTAs (Responsive: Stack on small mobile, row on tablet/desktop) -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-1 sm:pt-2">
            <button 
              @click="$emit('navigate', 'contact')"
              class="btn-pill-white text-center justify-center"
            >
              <span>Let's Talk</span>
            </button>

            <button 
              @click="$emit('switch-view', 'cv')"
              class="btn-pill-dark text-center justify-center"
            >
              <span>Download Resume</span>
              <span class="text-neutral-400">↗</span>
            </button>

            <button 
              @click="$emit('navigate', 'solutions')"
              class="btn-pill-dark text-center justify-center"
            >
              <span>View Solutions</span>
            </button>
          </div>

          <!-- Candidate Availability Strip -->
          <div class="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1 text-xs text-neutral-400">
            <div class="flex -space-x-1.5 overflow-hidden flex-shrink-0">
              <span class="inline-block h-5 w-5 sm:h-6 sm:w-6 rounded-full ring-2 ring-neutral-900 bg-red-600/30 text-[9px] sm:text-[10px] text-center leading-5 sm:leading-6 text-red-300 font-bold">AWS</span>
              <span class="inline-block h-5 w-5 sm:h-6 sm:w-6 rounded-full ring-2 ring-neutral-900 bg-neutral-800 text-[9px] sm:text-[10px] text-center leading-5 sm:leading-6 text-white font-bold">IaC</span>
              <span class="inline-block h-5 w-5 sm:h-6 sm:w-6 rounded-full ring-2 ring-neutral-900 bg-neutral-700 text-[9px] sm:text-[10px] text-center leading-5 sm:leading-6 text-white font-bold">Vue</span>
            </div>
            <span class="text-[11px] sm:text-xs">Immediate Joiner • Open for Cloud DevOps &amp; Full-Stack Roles</span>
          </div>

        </div>

        <!-- Right Column: Hero Visual Card with Crimson-Illuminated Perspective Grid -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div class="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(220,38,38,0.2)] bg-[#0d0d12] group">
            
            <!-- Atmospheric Tiled Perspective Grid Backdrop -->
            <div class="absolute inset-0 crimson-grid-bg transition-transform duration-700 group-hover:scale-105"></div>
            
            <!-- Intense Center Red Glow -->
            <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-red-600/30 rounded-full blur-[50px] sm:blur-[60px] pointer-events-none"></div>

            <!-- Stylized Hero Portrait / Silhouette Graphic with Crimson Lighting -->
            <div class="absolute inset-0 flex items-end justify-center pointer-events-none">
              <!-- SVG Developer Silhouette with Red Rim Lighting -->
              <svg class="w-full h-[92%] object-contain crimson-bottom-fade transition-transform duration-500 group-hover:translate-y-1" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="jacketGradient" x1="100" y1="200" x2="300" y2="500" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#dc2626" />
                    <stop offset="40%" stop-color="#991b1b" />
                    <stop offset="100%" stop-color="#450a0a" />
                  </linearGradient>
                  <filter id="crimsonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#ef4444" flood-opacity="0.6"/>
                  </filter>
                  <linearGradient id="faceGrad" x1="150" y1="90" x2="250" y2="230" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#e5e7eb" />
                    <stop offset="60%" stop-color="#9ca3af" />
                    <stop offset="100%" stop-color="#374151" />
                  </linearGradient>
                </defs>

                <!-- Ambient Glow behind Head -->
                <circle cx="200" cy="160" r="110" fill="#ef4444" fill-opacity="0.25" filter="blur(30px)" />

                <!-- Sculpted Head & Face Contour -->
                <path d="M165 95 C165 60, 235 60, 235 95 C242 120, 240 160, 232 185 C222 215, 178 215, 168 185 C160 160, 158 120, 165 95 Z" fill="url(#faceGrad)" />
                
                <!-- Hair Strands & Sharp Silhouette -->
                <path d="M158 95 C150 70, 175 42, 200 40 C225 42, 250 70, 242 95 C235 80, 225 75, 200 75 C175 75, 165 80, 158 95 Z" fill="#f3f4f6" />
                
                <!-- Strong Neck & High Turtleneck Collar -->
                <path d="M175 190 L170 245 L230 245 L225 190 Z" fill="#18181b" stroke="#ef4444" stroke-width="1.5" />
                
                <!-- Tailored Jacket in Deep Crimson / Ruby -->
                <path d="M170 245 L115 310 L50 490 L350 490 L285 310 L230 245 L200 350 Z" fill="url(#jacketGradient)" stroke="#ef4444" stroke-width="1.5" filter="url(#crimsonGlow)" />
                
                <!-- Lapel Left -->
                <path d="M170 245 L135 340 L195 440 L200 340 Z" fill="#b91c1c" />
                <!-- Lapel Right -->
                <path d="M230 245 L265 340 L205 440 L200 340 Z" fill="#7f1d1d" />

                <!-- Detail Lines -->
                <path d="M135 340 L195 440" stroke="#fca5a5" stroke-width="1" stroke-opacity="0.4" />
                <path d="M265 340 L205 440" stroke="#fca5a5" stroke-width="1" stroke-opacity="0.4" />
              </svg>
            </div>

            <!-- Soft Bottom Gradient Fade into Obsidian Base -->
            <div class="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent"></div>

            <!-- Top Right Live Status Pill -->
            <div class="absolute top-3.5 right-3.5 z-10 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-neutral-300 flex items-center gap-1.5 shadow-lg">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Hire</span>
            </div>

            <!-- Bottom Left Signature Badge -->
            <div class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md flex items-center justify-between">
              <div>
                <p class="text-white text-xs font-bold">Rohan Sapkale</p>
                <p class="text-[9px] sm:text-[10px] text-neutral-400 font-mono">AWS • Terraform • Vue 3 • Frappe</p>
              </div>
              <span class="text-red-400 font-mono text-[10px] sm:text-xs font-bold">99.99% SLA</span>
            </div>

          </div>
        </div>

      </div>

      <!-- Bottom Tech Strip / Ticker -->
      <div class="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.06]">
        <p class="text-center text-[10px] font-mono text-neutral-500 uppercase tracking-[0.25em] mb-4 sm:mb-6">
          Core Technologies &amp; Architecture Stack
        </p>
        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10 sm:gap-y-4 lg:gap-14 opacity-50 hover:opacity-90 transition-opacity duration-300 text-xs sm:text-sm font-mono tracking-wider text-neutral-300">
          <span class="font-bold">AWS</span>
          <span class="font-bold">Terraform</span>
          <span class="font-bold">Docker</span>
          <span class="font-bold">Linux</span>
          <span class="font-bold">Frappe / ERPNext</span>
          <span class="font-bold">Vue.js 3</span>
          <span class="font-bold">Python</span>
          <span class="font-bold">Redis</span>
          <span class="font-bold">PostgreSQL</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineEmits(['navigate', 'switch-view'])
</script>
