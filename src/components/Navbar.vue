<template>
  <header class="sticky top-0 z-40 w-full border-b border-[#1e2533] bg-[#090b10]/95 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-18">
        
        <!-- Brand / Identity -->
        <div class="flex items-center gap-3">
          <a href="#" @click.prevent="navigate('hero')" class="flex items-center gap-3 group">
            <div class="w-9 h-9 rounded-lg bg-[#161c28] border border-[#2a3447] flex items-center justify-center font-bold text-white text-sm tracking-wider">
              RS
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-100 text-base tracking-tight">Rohan Sapkale</span>
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
                  Open to Opportunities
                </span>
              </div>
              <p class="text-xs text-slate-400 hidden sm:block">Cloud DevOps & Systems Architect</p>
            </div>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          <button 
            v-for="item in navLinks" 
            :key="item.id"
            @click="navigate(item.id)"
            :class="[
              activeSection === item.id 
                ? 'text-white bg-[#161c28] border-[#2a3447]' 
                : 'text-slate-300 hover:text-white hover:bg-[#121620] border-transparent',
              'px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md border transition-colors'
            ]"
          >
            {{ item.name }}
          </button>
        </nav>

        <!-- Right Action Controls -->
        <div class="flex items-center gap-2.5">
          <!-- Portfolio / CV Switcher -->
          <div class="bg-[#10141d] border border-[#1e2533] rounded-lg p-0.5 flex items-center text-xs">
            <button 
              @click="$emit('switch-view', 'portfolio')"
              :class="[
                currentView === 'portfolio' 
                  ? 'bg-[#2563eb] text-white font-medium shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200',
                'px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5'
              ]"
            >
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Portfolio</span>
            </button>
            <button 
              @click="$emit('switch-view', 'cv')"
              :class="[
                currentView === 'cv' 
                  ? 'bg-[#2563eb] text-white font-medium shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200',
                'px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5'
              ]"
            >
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Executive CV</span>
            </button>
          </div>

          <!-- Private Owner Ops Desk Button (Formal Amber/Gold) -->
          <button 
            @click="$emit('open-ops')" 
            class="btn-ops"
            title="Private Server Operations Console"
          >
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span class="hidden sm:inline">Ops Console</span>
            <span class="sm:hidden">Ops</span>
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button 
            @click="mobileOpen = !mobileOpen"
            class="md:hidden p-2 text-slate-400 hover:text-white rounded-md bg-[#121620] border border-[#1e2533]"
          >
            <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div v-if="mobileOpen" class="md:hidden border-t border-[#1e2533] bg-[#0c0f16] px-4 py-3 space-y-1.5">
      <button 
        v-for="item in navLinks" 
        :key="item.id"
        @click="navigate(item.id); mobileOpen = false"
        class="w-full text-left px-3 py-2 text-sm font-medium rounded-md text-slate-300 hover:text-white hover:bg-[#161c28] block"
      >
        {{ item.name }}
      </button>
      <div class="pt-2 border-t border-[#1e2533] flex items-center justify-between">
        <span class="text-xs text-slate-400">Server Administrator:</span>
        <button @click="$emit('open-ops'); mobileOpen = false" class="btn-ops text-xs py-1">
          Lock / Unlock Console
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  currentView: {
    type: String,
    default: 'portfolio'
  },
  activeSection: {
    type: String,
    default: 'hero'
  }
})

const emit = defineEmits(['navigate', 'switch-view', 'open-ops'])

const mobileOpen = ref(false)

const navLinks = [
  { id: 'hero', name: 'Overview' },
  { id: 'modules', name: 'Enterprise Modules' },
  { id: 'alb-project', name: 'AWS Cloud Architecture' },
  { id: 'skills', name: 'Technical Matrix' },
  { id: 'contact', name: 'Contact' }
]

function navigate(id) {
  emit('navigate', id)
}
</script>
