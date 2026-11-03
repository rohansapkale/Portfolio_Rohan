<template>
  <div class="min-h-screen flex flex-col bg-[#090b10] text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white">
    
    <!-- Top Navigation Bar -->
    <Navbar 
      :current-view="currentView"
      :active-section="activeSection"
      @navigate="handleNavigate"
      @switch-view="handleSwitchView"
      @open-ops="openOpsConsole"
    />

    <!-- Main View Switcher -->
    <main class="flex-grow">
      
      <!-- View 1: Complete Interactive Portfolio -->
      <div v-show="currentView === 'portfolio'" class="space-y-4">
        
        <!-- Hero Section (Formal & Official, No Terminal) -->
        <HeroSection 
          @navigate="handleNavigate"
          @switch-view="handleSwitchView"
          @open-ops="openOpsConsole"
        />

        <!-- Candidate Availability Banner -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LookingForWorkBanner 
            @navigate="handleNavigate"
            @switch-view="handleSwitchView"
          />
        </div>

        <!-- Comprehensive Enterprise Modules & Solved Problems Showcase -->
        <ModulesShowcaseSection />

        <!-- Dedicated AWS ALB & Terraform Project Showcase -->
        <AlbProjectSection />

        <!-- Skills Matrix (AWS, Terraform, Docker, Python, Vue, Linux) -->
        <SkillsSection />

      </div>

      <!-- View 2: Printable & Structured Executive CV / Resume -->
      <div v-show="currentView === 'cv'">
        <CvView 
          @switch-view="handleSwitchView"
        />
      </div>

    </main>

    <!-- Global Contact & Footer -->
    <ContactFooter 
      class="no-print"
      @navigate="handleNavigate"
      @switch-view="handleSwitchView"
      @open-ops="openOpsConsole"
    />

    <!-- Private Owner Ops Desk Modal (Password Protected for Rohan) -->
    <OpsDeskModal 
      :is-open="isOpsOpen"
      @close="closeOpsConsole"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import LookingForWorkBanner from './components/LookingForWorkBanner.vue'
import ModulesShowcaseSection from './components/ModulesShowcaseSection.vue'
import AlbProjectSection from './components/AlbProjectSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import CvView from './components/CvView.vue'
import OpsDeskModal from './components/OpsDeskModal.vue'
import ContactFooter from './components/ContactFooter.vue'

const currentView = ref('portfolio')
const activeSection = ref('hero')
const isOpsOpen = ref(false)

function handleSwitchView(viewName) {
  currentView.value = viewName
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleNavigate(sectionId) {
  if (currentView.value !== 'portfolio') {
    currentView.value = 'portfolio'
  }
  activeSection.value = sectionId
  
  setTimeout(() => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, 50)
}

function openOpsConsole() {
  isOpsOpen.value = true
}

function closeOpsConsole() {
  isOpsOpen.value = false
}
</script>
