<template>
  <div class="py-10 sm:py-16 bg-[#090b10] min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      
      <!-- Top Action Bar (hidden in print) -->
      <div class="no-print p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#1e2533] bg-[#0d1017]">
        <div class="flex items-center gap-2">
          <button 
            @click="$emit('switch-view', 'portfolio')"
            class="btn-secondary text-xs py-1.5 px-3"
          >
            ← Return to Portfolio
          </button>
          <span class="text-xs text-slate-400">Official Executive CV Format</span>
        </div>

        <div class="flex items-center gap-2 w-full sm:w-auto">
          <button 
            @click="printCV"
            class="btn-primary text-xs py-2 px-4 w-full sm:w-auto font-semibold"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Print / Save as PDF</span>
          </button>

          <button 
            @click="copySummary"
            class="btn-secondary text-xs py-2 px-3"
          >
            <span>{{ copied ? 'Copied' : 'Copy Text' }}</span>
          </button>
        </div>
      </div>

      <!-- Resume Sheet Container -->
      <div class="cv-sheet p-8 sm:p-12 rounded-xl border border-[#1e2533] shadow-md space-y-9 bg-[#0d1017]">
        
        <!-- Header -->
        <div class="border-b border-[#1a202c] pb-8 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {{ cvData.name }}
              </h1>
              <p class="text-lg font-semibold text-blue-400 mt-1">
                {{ cvData.title }}
              </p>
              <div class="flex items-center gap-2 mt-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
                  {{ cvData.status }}
                </span>
              </div>
            </div>

            <!-- Contact info block -->
            <div class="text-xs space-y-1.5 text-slate-300 sm:text-right shrink-0">
              <div>Location: {{ cvData.location }}</div>
              <div>Email: <a :href="'mailto:' + cvData.email" class="text-blue-400 hover:underline">{{ cvData.email }}</a></div>
              <div>GitHub: <a :href="cvData.github" target="_blank" class="text-blue-400 hover:underline">{{ cvData.github }}</a></div>
              <div>Telegram: {{ cvData.telegram }}</div>
            </div>
          </div>
        </div>

        <!-- Career Target & Availability -->
        <div class="p-4 rounded-lg bg-[#11151f] border border-[#1e2533] space-y-1.5">
          <div class="flex items-center justify-between text-xs text-slate-300 font-semibold uppercase">
            <span>Availability Status: {{ cvData.availability.status }}</span>
            <span>Preferences: {{ cvData.availability.workPreference }}</span>
          </div>
          <div class="text-xs text-slate-300">
            <span class="font-semibold text-white">Target Roles: </span>
            <span class="text-slate-300">{{ cvData.availability.targetRoles.join(' • ') }}</span>
          </div>
        </div>

        <!-- Executive Summary -->
        <div class="space-y-2.5">
          <h2 class="text-sm uppercase tracking-wider text-slate-300 font-bold border-b border-[#1a202c] pb-1">
            Executive Summary
          </h2>
          <p class="text-sm text-slate-300 leading-relaxed text-justify">
            {{ cvData.summary }}
          </p>
        </div>

        <!-- Core Competencies -->
        <div class="space-y-3.5">
          <h2 class="text-sm uppercase tracking-wider text-slate-300 font-bold border-b border-[#1a202c] pb-1">
            Technical Competencies Matrix
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              v-for="group in cvData.coreCompetencies" 
              :key="group.title"
              class="p-3.5 rounded-lg bg-[#11151f] border border-[#1e2533] space-y-1"
            >
              <div class="text-xs font-bold text-white flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                {{ group.title }}
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                {{ group.items.join(', ') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Professional Experience -->
        <div class="space-y-5">
          <h2 class="text-sm uppercase tracking-wider text-slate-300 font-bold border-b border-[#1a202c] pb-1">
            Professional Experience
          </h2>

          <div class="space-y-6">
            <div 
              v-for="(job, jIdx) in cvData.experience" 
              :key="jIdx"
              class="space-y-2 border-l-2 border-[#20293a] pl-4 sm:pl-5"
            >
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 class="text-base font-bold text-white">{{ job.role }}</h3>
                <span class="text-xs font-semibold text-blue-400">{{ job.period }}</span>
              </div>

              <div class="text-xs text-slate-400">
                {{ job.company }} • {{ job.location }}
              </div>

              <ul class="space-y-1.5 pt-1.5 text-xs sm:text-sm text-slate-300">
                <li 
                  v-for="(hl, hIdx) in job.highlights" 
                  :key="hIdx"
                  class="flex items-start gap-2"
                >
                  <span class="text-slate-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{{ hl }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Key Cloud & Software Projects -->
        <div class="space-y-3.5">
          <h2 class="text-sm uppercase tracking-wider text-slate-300 font-bold border-b border-[#1a202c] pb-1">
            Key Architectural Systems & Projects
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              v-for="(kp, kIdx) in cvData.keyProjects" 
              :key="kIdx"
              class="p-4 rounded-lg bg-[#11151f] border border-[#1e2533] space-y-1.5"
            >
              <div class="font-bold text-white text-sm">{{ kp.name }}</div>
              <div class="text-xs font-mono text-blue-300">{{ kp.tech }}</div>
              <p class="text-xs text-slate-300 leading-relaxed">{{ kp.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Education & Certifications -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#1a202c]">
          <div class="space-y-2">
            <h3 class="text-xs uppercase tracking-wider text-slate-300 font-bold">Education</h3>
            <div v-for="(edu, eIdx) in cvData.education" :key="eIdx" class="text-xs space-y-1">
              <div class="font-bold text-white">{{ edu.degree }}</div>
              <div class="text-slate-400">{{ edu.institution }} • {{ edu.period }}</div>
              <div class="text-slate-400">{{ edu.focus }}</div>
            </div>
          </div>

          <div class="space-y-2">
            <h3 class="text-xs uppercase tracking-wider text-slate-300 font-bold">Certifications & Training</h3>
            <ul class="space-y-1 text-xs text-slate-300">
              <li v-for="(cert, cIdx) in cvData.certifications" :key="cIdx" class="flex items-center gap-2">
                <span class="text-emerald-400 font-bold">✓</span>
                <span>{{ cert }}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { cvData } from '../data/cvData.js'

defineEmits(['switch-view'])

const copied = ref(false)

function printCV() {
  window.print()
}

function copySummary() {
  const text = `${cvData.name} - ${cvData.title}\n${cvData.status}\nEmail: ${cvData.email}\nGitHub: ${cvData.github}\n\nSummary:\n${cvData.summary}`
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}
</script>
