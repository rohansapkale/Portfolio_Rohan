<template>
  <section id="skills" class="py-16 sm:py-24 border-t border-[#1e2533] bg-[#090b10]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Header -->
      <div class="space-y-3 max-w-3xl">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#141b29] text-blue-300 border border-[#24314c]">
            Competencies & Capabilities
          </span>
          <span class="text-xs text-slate-400">Technical Matrix</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Technical Skills & Architecture Competencies
        </h2>
        <p class="text-base text-slate-300 leading-relaxed">
          Comprehensive hands-on experience spanning cloud infrastructure provisioning, container orchestration, ERP system integration, and responsive frontend architecture.
        </p>
      </div>

      <!-- Skills Matrix Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div 
          v-for="(cat, idx) in skillsData" 
          :key="idx"
          class="rounded-xl border border-[#1e2533] bg-[#0d1017] p-6 sm:p-8 space-y-6"
        >
          <!-- Category Header -->
          <div class="flex items-start justify-between pb-4 border-b border-[#1a202c]">
            <div>
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                {{ cat.category }}
              </h3>
              <p class="text-xs text-slate-400 mt-1">{{ cat.description }}</p>
            </div>
            <span class="text-xs text-slate-400 bg-[#121620] px-2.5 py-1 rounded border border-[#1e2533]">
              Section 0{{ idx + 1 }}
            </span>
          </div>

          <!-- Skills Bars & Details -->
          <div class="space-y-4">
            <div 
              v-for="skill in cat.skills" 
              :key="skill.name"
              class="space-y-1.5"
            >
              <div class="flex items-center justify-between text-xs">
                <span class="font-medium text-slate-200">{{ skill.name }}</span>
                <span class="text-slate-400 font-semibold">{{ skill.level }}%</span>
              </div>

              <!-- Progress Bar -->
              <div class="w-full h-1.5 rounded-full bg-[#18202f] overflow-hidden border border-[#232d40]">
                <div 
                  class="h-full rounded-full bg-blue-600 transition-all duration-300"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>

              <!-- Highlight note -->
              <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span class="text-slate-500">•</span>
                <span>{{ skill.highlight }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { skillsData } from '../data/skillsData.js'
</script>
