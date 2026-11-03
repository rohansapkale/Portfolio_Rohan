<template>
  <header class="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#070709]/90 backdrop-blur-xl transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-18">
        
        <!-- Brand / Identity -->
        <div class="flex items-center gap-2.5 sm:gap-3">
          <a href="#" @click.prevent="navigate('hero')" class="flex items-center gap-2.5 sm:gap-3 group">
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.4)] group-hover:scale-105 transition-transform flex-shrink-0 bg-neutral-900">
              <img src="/rohan-developer.jpg" alt="Rohan Sapkale" class="w-full h-full object-cover object-top" />
            </div>
            <div>
              <div class="flex items-center gap-1.5 sm:gap-2">
                <span class="font-bold text-white text-sm sm:text-base tracking-tight whitespace-nowrap">Rohan Sapkale</span>
                <span class="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
              </div>
              <p class="text-[10px] sm:text-[11px] text-neutral-400 font-mono tracking-wider hidden sm:block">SYSTEMS &amp; CLOUD ARCHITECT</p>
            </div>
          </a>
        </div>

        <!-- Center Desktop Navigation (>= 1024px) -->
        <nav class="hidden lg:flex items-center gap-1.5 bg-[#0e0e13]/90 border border-white/[0.08] px-3 py-1.5 rounded-full shadow-inner">
          <button 
            v-for="item in navLinks" 
            :key="item.id"
            @click="navigate(item.id)"
            :class="[
              activeSection === item.id 
                ? 'text-white bg-white/[0.08] shadow-sm' 
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]',
              'px-3.5 py-1 text-xs font-medium rounded-full transition-all whitespace-nowrap'
            ]"
          >
            {{ item.name }}
          </button>
        </nav>

        <!-- Right Action Controls -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Portfolio / CV Pill Switcher (Hidden on extra small screens, available in mobile menu) -->
          <div class="bg-[#0e0e13] border border-white/[0.08] rounded-full p-0.5 hidden xs:flex items-center text-xs">
            <button 
              @click="$emit('switch-view', 'portfolio')"
              :class="[
                currentView === 'portfolio' 
                  ? 'bg-neutral-800 text-white font-medium shadow-sm' 
                  : 'text-neutral-400 hover:text-neutral-200',
                'px-2.5 sm:px-3 py-1 rounded-full transition-all text-[11px]'
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
                'px-2.5 sm:px-3 py-1 rounded-full transition-all text-[11px]'
              ]"
            >
              CV
            </button>
          </div>

          <!-- Solid White Pill CTA Button (Hidden on small mobile, available in menu) -->
          <button 
            @click="navigate('contact')"
            class="btn-pill-white hidden md:inline-flex text-xs font-semibold !py-2 !px-5"
          >
            <span>Let's Talk</span>
          </button>

          <!-- Private Owner Ops Desk Button -->
          <button 
            @click="$emit('open-ops')" 
            class="p-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-neutral-300 hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/10 transition-all text-xs flex-shrink-0"
            title="Private Server Operations Console"
          >
            <span class="sr-only">Ops Console</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </button>

          <!-- Mobile Hamburger Toggle Button (< 1024px) -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden p-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-all flex-shrink-0"
            aria-label="Toggle mobile menu"
          >
            <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Navigation Drawer (< 1024px) -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="lg:hidden border-b border-white/[0.08] bg-[#0a0a0e]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 shadow-2xl"
      >
        <!-- View Switcher on Mobile -->
        <div class="grid grid-cols-2 gap-2 bg-[#121218] p-1 rounded-xl border border-white/10">
          <button 
            @click="$emit('switch-view', 'portfolio'); isMobileMenuOpen = false"
            :class="[
              currentView === 'portfolio' 
                ? 'bg-neutral-800 text-white font-semibold' 
                : 'text-neutral-400 hover:text-white',
              'py-2 rounded-lg text-xs font-mono transition-all text-center'
            ]"
          >
            ● Interactive Portfolio
          </button>
          <button 
            @click="$emit('switch-view', 'cv'); isMobileMenuOpen = false"
            :class="[
              currentView === 'cv' 
                ? 'bg-neutral-800 text-white font-semibold' 
                : 'text-neutral-400 hover:text-white',
              'py-2 rounded-lg text-xs font-mono transition-all text-center'
            ]"
          >
            📄 Executive CV
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="space-y-1">
          <button 
            v-for="item in navLinks" 
            :key="item.id"
            @click="navigate(item.id)"
            :class="[
              activeSection === item.id 
                ? 'text-white bg-white/[0.08] border-l-2 border-red-500 pl-3 font-semibold' 
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.03] pl-3',
              'w-full text-left py-2.5 text-sm rounded-lg transition-all flex items-center justify-between'
            ]"
          >
            <span>{{ item.name }}</span>
            <span class="text-xs text-neutral-600 font-mono">→</span>
          </button>
        </nav>

        <!-- Mobile CTA Button -->
        <div class="pt-2 border-t border-white/[0.06] flex items-center gap-3">
          <button 
            @click="navigate('contact')"
            class="btn-pill-white w-full text-center justify-center text-xs !py-2.5"
          >
            <span>Let's Talk</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

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

const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'solutions', name: 'Solutions' },
  { id: 'why-partner', name: 'Why Partner' },
  { id: 'alb-project', name: 'Cloud Architecture' },
  { id: 'experience', name: 'Experience' },
  { id: 'philosophy', name: 'Philosophy' },
  { id: 'contact', name: 'Contact' },
]

const navigate = (id) => {
  isMobileMenuOpen.value = false
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
