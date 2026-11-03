<template>
  <section id="modules" class="py-16 sm:py-24 border-t border-[#1e2533] bg-[#090b10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="space-y-3 max-w-3xl">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#141b29] text-blue-300 border border-[#24314c]">
              Enterprise Systems Catalog
            </span>
            <span class="text-xs text-slate-400">8 Production Modules</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Enterprise Modules & Technical Solutions
          </h2>
          <p class="text-base text-slate-300 leading-relaxed">
            Engineered systems solving critical business bottlenecks across commodity brokerage, industrial manufacturing, property management, headless messaging, and multi-tenant server infrastructure. Each module includes problem analysis, technical configuration, and verified production impact.
          </p>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap gap-1.5 p-1 bg-[#10141d] border border-[#1e2533] rounded-lg self-start md:self-end">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              activeCategory === cat 
                ? 'bg-[#2563eb] text-white font-medium shadow-sm' 
                : 'text-slate-400 hover:text-slate-200 border-transparent',
              'px-3 py-1.5 rounded-md text-xs transition-colors'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Modules List -->
      <div class="space-y-8">
        <div 
          v-for="mod in filteredModules" 
          :key="mod.id"
          class="rounded-xl border border-[#1e2533] bg-[#0d1017] hover:border-[#2b3548] transition-all overflow-hidden shadow-md"
        >
          <!-- Module Header Bar -->
          <div class="p-6 sm:p-7 border-b border-[#1a202c] bg-[#10141d] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-[#172033] text-blue-300 border border-[#2b3a59]">
                  {{ mod.badge }}
                </span>
                <span class="text-xs text-slate-400 bg-[#141822] px-2.5 py-0.5 rounded border border-[#202738]">
                  {{ mod.category }}
                </span>
              </div>
              <h3 class="text-2xl font-bold text-white tracking-tight">
                {{ mod.name }}
              </h3>
              <p class="text-sm font-medium text-slate-300">
                {{ mod.tagline }}
              </p>
            </div>

            <!-- Role & Tech Stack Summary -->
            <div class="md:text-right space-y-2 shrink-0">
              <div class="text-xs text-slate-400">
                Engineering Role: <span class="text-slate-200 font-semibold">{{ mod.role }}</span>
              </div>
              <div class="flex flex-wrap md:justify-end gap-1.5">
                <span 
                  v-for="t in mod.techStack" 
                  :key="t"
                  class="px-2 py-0.5 rounded text-xs font-mono bg-[#141824] border border-[#222a3d] text-slate-300"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>

          <!-- Deep-Dive Columns: Problem Solved vs Configuration & Architecture -->
          <div class="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <!-- Left Column: Problem Solved -->
            <div class="lg:col-span-6 space-y-4">
              <div class="flex items-center gap-2 pb-2 border-b border-[#1a202c]">
                <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Business Challenge & Problem Solved
                </h4>
              </div>

              <div class="p-4 rounded-lg bg-[#121622] border border-[#1e2533] space-y-2.5">
                <div class="text-sm font-semibold text-white">
                  {{ mod.problemSolved.summary }}
                </div>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  {{ mod.problemSolved.details }}
                </p>
              </div>

              <!-- Pain Points List -->
              <div class="space-y-2 pt-1">
                <span class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Key Operational Bottlenecks Eliminated:</span>
                <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li 
                    v-for="(point, pIdx) in mod.problemSolved.painPoints" 
                    :key="pIdx"
                    class="flex items-start gap-2"
                  >
                    <span class="text-slate-500 font-bold shrink-0 mt-0.5">—</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Right Column: Configuration & Architecture -->
            <div class="lg:col-span-6 space-y-4">
              <div class="flex items-center gap-2 pb-2 border-b border-[#1a202c]">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <h4 class="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Technical Architecture & Data Models
                </h4>
              </div>

              <!-- DocTypes Pills -->
              <div class="space-y-2">
                <div class="flex items-center justify-between text-xs text-slate-400">
                  <span class="uppercase tracking-wider font-semibold">Configured DocTypes (Models):</span>
                  <span class="text-slate-300 font-mono">{{ mod.configuration.docTypes.length }} Master / Child Records</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="dt in mod.configuration.docTypes" 
                    :key="dt"
                    class="px-2.5 py-1 rounded text-xs font-mono bg-[#141b29] border border-[#23314d] text-blue-200"
                  >
                    {{ dt }}
                  </span>
                </div>
              </div>

              <!-- Setup & Ports -->
              <div class="p-3.5 rounded-lg bg-[#121622] border border-[#1e2533] space-y-2 text-xs">
                <div class="flex items-start gap-2">
                  <span class="text-slate-400 shrink-0 font-medium">Deployment / Runtime:</span>
                  <span class="text-slate-200">{{ mod.configuration.setup }}</span>
                </div>
                <div class="flex items-center gap-2 pt-1 border-t border-[#1a202c] font-mono">
                  <span class="text-slate-400 shrink-0">Ports & Sockets:</span>
                  <span class="text-emerald-400 font-semibold">{{ mod.configuration.ports }}</span>
                </div>
              </div>

              <!-- Architectural Implementation Highlights -->
              <div class="space-y-2 pt-1">
                <span class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Engineering Implementation:</span>
                <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li 
                    v-for="(arch, aIdx) in mod.configuration.architecture" 
                    :key="aIdx"
                    class="flex items-start gap-2"
                  >
                    <span class="text-blue-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{{ arch }}</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          <!-- Bottom Bar: Verified Production Impact -->
          <div class="px-6 py-4 sm:px-8 sm:py-3.5 bg-[#10141d] border-t border-[#1a202c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <!-- Metrics Row -->
            <div class="flex flex-wrap items-center gap-4 sm:gap-8">
              <div 
                v-for="(m, mIdx) in mod.impact" 
                :key="mIdx"
                class="flex items-center gap-2"
              >
                <span class="text-xs text-slate-400 uppercase tracking-wider">{{ m.label }}:</span>
                <span class="text-xs sm:text-sm font-semibold text-white bg-[#161c28] px-2.5 py-0.5 rounded border border-[#283447]">
                  {{ m.value }}
                </span>
              </div>
            </div>

            <!-- Repo link if available -->
            <div v-if="mod.id === 'accounts-desk'" class="shrink-0">
              <a 
                href="https://github.com/rohan-sapkale-cbd-it/account_desk.git" 
                target="_blank" 
                rel="noopener"
                class="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 hover:underline"
              >
                <span>github.com/rohan-sapkale-cbd-it/account_desk</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { modulesData } from '../data/modulesData.js'

const activeCategory = ref('All Modules')

const categories = [
  'All Modules',
  'Commodity & Trading Fintech',
  'Industrial Manufacturing & Supply Chain',
  'Property Management ERP',
  'Cloud Microservices & Automation',
  'Core Accounting & Fintech',
  'Retail & Luxury Enterprise ERP',
  'Cloud Infrastructure & DevOps'
]

const filteredModules = computed(() => {
  if (activeCategory.value === 'All Modules') {
    return modulesData
  }
  return modulesData.filter(m => m.category === activeCategory.value)
})
</script>
