<template>
  <header class="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#070709]/85 backdrop-blur-xl transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18">
        
        <!-- Brand / Identity -->
        <div class="flex items-center gap-3">
          <a href="#" @click.prevent="navigate('hero')" class="flex items-center gap-3 group">
            <div class="w-9 h-9 rounded-full bg-gradient-to-br from-red-600 to-neutral-900 border border-red-500/40 flex items-center justify-center font-bold text-white text-xs tracking-wider shadow-[0_0_15px_rgba(220,38,38,0.35)] group-hover:scale-105 transition-transform">
              RS
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-white text-sm sm:text-base tracking-tight">Rohan Sapkale</span>
                <span class="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
              </div>
              <p class="text-[11px] text-neutral-400 font-mono tracking-wider hidden sm:block">SYSTEMS &amp; CLOUD ARCHITECT</p>
            </div>
          </a>
        </div>

        <!-- Center Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1.5 bg-[#0e0e13]/90 border border-white/[0.08] px-3 py-1.5 rounded-full shadow-inner">
          <button 
            v-for="item in navLinks" 
            :key="item.id"
            @click="navigate(item.id)"
            :class="[
              activeSection === item.id 
                ? 'text-white bg-white/[0.08] shadow-sm' 
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]',
              'px-3.5 py-1 text-xs font-medium rounded-full transition-all'
            ]"
          >
            {{ item.name }}
          </button>
        </nav>

        <!-- Right Action Controls -->
        <div class="flex items-center gap-3">
          <!-- Portfolio / CV Pill Switcher -->
          <div class="bg-[#0e0e13] border border-white/[0.08] rounded-full p-0.5 flex items-center text-xs">
            <button 
              @click="$emit('switch-view', 'portfolio')"
              :class="[
                currentView === 'portfolio' 
                  ? 'bg-neutral-800 text-white font-medium shadow-sm' 
                  : 'text-neutral-400 hover:text-neutral-200',
                'px-3 py-1 rounded-full transition-all text-[11px]'
              ]"
            >
              Portfolio
            </button>
            <button 
              @click="$emit('switch-view', 'cv')"
              :class="[
                currentView === 'cv' 
                  ? 'bg-neutral-800 text-white font-medium shadow-sm' 
                  : 'text-neutral-400 hover:text-neutral-200',
                'px-3 py-1 rounded-full transition-all text-[11px]'
              ]"
            >
              CV / Resume
            </button>
          </div>

          <!-- Solid White Pill CTA Button (Matching Reference Design) -->
          <button 
            @click="navigate('contact')"
            class="btn-pill-white hidden sm:inline-flex text-xs font-semibold !py-2 !px-5"
          >
            <span>Let's Talk</span>
          </button>

          <!-- Private Owner Ops Desk Button -->
          <button 
            @click="$emit('open-ops')" 
            class="p-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-neutral-300 hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/10 transition-all text-xs"
            title="Private Server Operations Console"
          >
            <span class="sr-only">Ops Console</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentView: {
    type: String,
    default: 'portfolio',
  },
  activeSection: {
    type: String,
    default: 'hero',
  },
})

const emit = defineEmits(['navigate', 'switch-view', 'open-ops'])

const navLinks = [
  { id: 'solutions', name: 'Solutions' },
  { id: 'why-partner', name: 'Why Partner' },
  { id: 'alb-project', name: 'Cloud Architecture' },
  { id: 'experience', name: 'Experience' },
  { id: 'philosophy', name: 'Philosophy' },
  { id: 'contact', name: 'Contact' },
]

const navigate = (id) => {
  if (props.currentView !== 'portfolio') {
    emit('switch-view', 'portfolio')
    setTimeout(() => {
      emit('navigate', id)
    }, 100)
  } else {
    emit('navigate', id)
  }
}
</script>
