<template>
  <section id="hero" class="pt-10 pb-14 sm:pt-16 sm:pb-20 bg-[#090b10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left Column: Executive Summary & Core Competencies -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Top Tag -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#121620] border border-[#1e2533] text-xs font-medium text-slate-300">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Cloud Infrastructure & Systems Engineering</span>
          </div>

          <!-- Main Heading -->
          <div class="space-y-2">
            <h1 class="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Rohan Sapkale
            </h1>
            <p class="text-xl sm:text-2xl font-medium text-slate-300">
              Cloud DevOps Specialist & Full-Stack Systems Architect
            </p>
          </div>

          <!-- Description -->
          <p class="text-base text-slate-300 leading-relaxed max-w-2xl">
            Specializing in resilient AWS Multi-AZ cloud infrastructure provisioned with Terraform, containerized services with Docker on Linux, mission-critical enterprise Frappe & ERPNext platforms, and high-performance Vue.js trading applications.
          </p>

          <!-- Core Competencies Pills -->
          <div class="flex flex-wrap gap-2 pt-1">
            <span class="badge-formal">AWS ALB & ASG</span>
            <span class="badge-formal">Terraform (IaC)</span>
            <span class="badge-formal">Docker & Linux Administration</span>
            <span class="badge-formal">Frappe Framework v14-v16</span>
            <span class="badge-formal">Python & REST APIs</span>
            <span class="badge-formal">Vue.js 3 & Vite</span>
          </div>

          <!-- Primary CTAs -->
          <div class="flex flex-wrap items-center gap-3 pt-3">
            <button 
              @click="$emit('navigate', 'modules')"
              class="btn-primary"
            >
              <span>Review Enterprise Modules</span>
              <span>→</span>
            </button>

            <button 
              @click="$emit('navigate', 'alb-project')"
              class="btn-secondary"
            >
              <span>AWS Cloud Architecture</span>
            </button>

            <button 
              @click="$emit('switch-view', 'cv')"
              class="btn-secondary"
            >
              <span>Download / Print CV</span>
            </button>
          </div>

        </div>

        <!-- Right Column: Formal Executive Profile Card (Clean & Official) -->
        <div class="lg:col-span-5">
          <div class="p-6 sm:p-7 rounded-xl border border-[#1e2533] bg-[#0e1219] shadow-lg space-y-5">
            
            <!-- Card Header -->
            <div class="flex items-center justify-between pb-4 border-b border-[#1c2331]">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-[#18202f] border border-[#26334a] flex items-center justify-center font-bold text-white text-base">
                  RS
                </div>
                <div>
                  <div class="font-bold text-white text-sm">Professional Profile</div>
                  <div class="text-xs text-slate-400">Available for Full-Time & Contract</div>
                </div>
              </div>

              <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
                Active
              </span>
            </div>

            <!-- Core Engineering Metrics -->
            <div class="grid grid-cols-2 gap-3">
              
              <div class="p-3.5 rounded-lg bg-[#131822] border border-[#1e2533]">
                <span class="text-[11px] text-slate-400 uppercase tracking-wider block">Enterprise Modules</span>
                <div class="text-2xl font-bold text-white mt-1">8 Systems</div>
                <div class="text-xs text-slate-400 mt-0.5">Commodity, Supply Chain, ERP</div>
              </div>

              <div class="p-3.5 rounded-lg bg-[#131822] border border-[#1e2533]">
                <span class="text-[11px] text-slate-400 uppercase tracking-wider block">Target Availability</span>
                <div class="text-2xl font-bold text-blue-400 mt-1">99.99%</div>
                <div class="text-xs text-slate-400 mt-0.5">AWS Multi-AZ Redundancy</div>
              </div>

              <div class="p-3.5 rounded-lg bg-[#131822] border border-[#1e2533]">
                <span class="text-[11px] text-slate-400 uppercase tracking-wider block">IaC Automation</span>
                <div class="text-2xl font-bold text-slate-200 mt-1">100% Code</div>
                <div class="text-xs text-slate-400 mt-0.5">Modular Terraform Architecture</div>
              </div>

              <div class="p-3.5 rounded-lg bg-[#131822] border border-[#1e2533]">
                <span class="text-[11px] text-slate-400 uppercase tracking-wider block">Trade Entry Speed</span>
                <div class="text-2xl font-bold text-emerald-400 mt-1">&lt; 3 Seconds</div>
                <div class="text-xs text-slate-400 mt-0.5">Keyboard-First Workstations</div>
              </div>

            </div>

            <!-- Core Competencies Matrix -->
            <div class="pt-2 border-t border-[#1c2331] space-y-2 text-xs">
              <div class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Specialized Practice Areas</div>
              <div class="grid grid-cols-2 gap-2 text-slate-300">
                <div class="flex items-center gap-1.5">
                  <span class="w-1 h-1 rounded-full bg-blue-400"></span>
                  <span>AWS ALB & ASG Multi-AZ</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="w-1 h-1 rounded-full bg-blue-400"></span>
                  <span>Terraform IaC Provisioning</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="w-1 h-1 rounded-full bg-blue-400"></span>
                  <span>Docker Containerization</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="w-1 h-1 rounded-full bg-blue-400"></span>
                  <span>Frappe & ERPNext Modules</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="w-1 h-1 rounded-full bg-blue-400"></span>
                  <span>High-Throughput Vue 3 SPAs</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="w-1 h-1 rounded-full bg-blue-400"></span>
                  <span>Ubuntu Linux Administration</span>
                </div>
              </div>
            </div>

            <!-- Footer Details -->
            <div class="pt-3 border-t border-[#1c2331] flex items-center justify-between text-xs text-slate-400">
              <span>Location: India (Remote & Relocation)</span>
              <a href="mailto:sapkalerohan07@gmail.com" class="text-blue-400 hover:text-blue-300 hover:underline">
                sapkalerohan07@gmail.com
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
defineEmits(['navigate', 'switch-view'])
</script>
