<template>
  <section id="projects" class="py-16 sm:py-20 border-t border-slate-800/80 bg-[#050811]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="space-y-3 max-w-3xl">
          <div class="flex items-center gap-2">
            <span class="badge badge-emerald font-mono text-xs">Proven Enterprise Track Record</span>
            <span class="badge badge-cyan font-mono text-xs">Production Deployed</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Enterprise Work & <span class="bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">Production Systems</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real systems designed, engineered, and maintained across commodity trading, automated messaging microservices, financial desks, and multi-tenant server infrastructure.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              activeCategory === cat 
                ? 'bg-cyan-950 text-cyan-300 border-cyan-800/60 font-semibold shadow-sm' 
                : 'text-slate-400 hover:text-slate-200 border-transparent',
              'px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="glass-panel p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all duration-200"
        >
          <!-- Top Card Meta -->
          <div class="space-y-4">
            
            <div class="flex items-start justify-between gap-3">
              <span class="badge font-mono text-xs" :class="getBadgeClass(project.color)">
                {{ project.badge }}
              </span>
              <span class="text-xs font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                {{ project.status }}
              </span>
            </div>

            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-xs font-mono text-cyan-400 mt-1">Role: {{ project.role }}</p>
            </div>

            <p class="text-sm text-slate-300 leading-relaxed">
              {{ project.summary }}
            </p>

            <!-- Key Accomplishments Bullets -->
            <div class="space-y-2 pt-2">
              <div 
                v-for="(point, pIdx) in project.keyPoints" 
                :key="pIdx"
                class="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
              >
                <span class="text-cyan-400 font-bold shrink-0 mt-0.5">▹</span>
                <span>{{ point }}</span>
              </div>
            </div>

          </div>

          <!-- Bottom Card: Tech Stack & Metrics -->
          <div class="space-y-4 pt-4 border-t border-slate-800/80">
            
            <!-- Tech Pills -->
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="t in project.technologies" 
                :key="t"
                class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
              >
                {{ t }}
              </span>
            </div>

            <!-- Metrics Row -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              <div 
                v-for="(m, mIdx) in project.metrics" 
                :key="mIdx"
                class="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80"
              >
                <span class="text-[10px] uppercase font-mono text-slate-400 block">{{ m.label }}</span>
                <span class="text-xs sm:text-sm font-bold font-mono text-slate-100 truncate block mt-0.5">{{ m.value }}</span>
              </div>
            </div>

            <!-- GitHub link if present -->
            <div v-if="project.github" class="pt-2">
              <a 
                :href="project.github" 
                target="_blank" 
                rel="noopener"
                class="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View GitHub Repository</span>
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
import { projectsData } from '../data/projectsData.js'

const activeCategory = ref('All Projects')

const categories = ['All Projects', 'Cloud & DevOps', 'Full-Stack & Fintech', 'ERP Microservices']

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All Projects') {
    return projectsData
  }
  if (activeCategory.value === 'Cloud & DevOps') {
    return projectsData.filter(p => p.category.includes('Cloud') || p.category.includes('DevOps') || p.category.includes('Containerization'))
  }
  if (activeCategory.value === 'Full-Stack & Fintech') {
    return projectsData.filter(p => p.category.includes('Fintech') || p.category.includes('Full-Stack'))
  }
  if (activeCategory.value === 'ERP Microservices') {
    return projectsData.filter(p => p.category.includes('ERP') || p.category.includes('Microservice'))
  }
  return projectsData
})

function getBadgeClass(color) {
  if (color === 'emerald') return 'badge-emerald'
  if (color === 'purple') return 'badge-purple'
  if (color === 'amber') return 'badge-amber'
  if (color === 'rose') return 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
  return 'badge-cyan'
}
</script>

