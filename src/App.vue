<template>
  <div class="min-h-screen flex flex-col bg-[#070709] text-neutral-100 font-sans selection:bg-red-600/30 selection:text-white">
    
    <!-- Top Floating Navbar -->
    <Navbar 
      :current-view="currentView"
      :active-section="activeSection"
      @navigate="handleNavigate"
      @switch-view="handleSwitchView"
      @open-ops="openOpsConsole"
    />

    <!-- Main View Switcher -->
    <main class="flex-grow">
      
      <!-- View 1: Complete Interactive Portfolio (Matching Reference Design) -->
      <div v-show="currentView === 'portfolio'" class="space-y-4">
        
        <!-- Hero Section (Left Title & Value Prop + Right Framed Silhouette in Crimson Grid) -->
        <HeroSection 
          @navigate="handleNavigate"
          @switch-view="handleSwitchView"
        />

        <!-- Section 1: Why Partner With Me / Today And Always? (Bento Grid) -->
        <WhyPartnerSection />

        <!-- Section 2: Featured Solutions & Projects (2x2 Visual Grid) -->
        <ProjectsSection 
          @open-case-studies="scrollToCaseStudies"
          @select-project="handleSelectProject"
        />

        <!-- Section 3: Professional milestones & impact (Timeline + Framed Red Grid Portrait) -->
        <ExperienceMilestonesSection />

        <!-- Section 4: A deep dive into my engineering philosophy (Interactive Architecture) -->
        <PhilosophySection />

        <!-- Section 5: Engineering Impact & Measurable Metrics (High-Impact KPIs) -->
        <ImpactSection />

        <!-- Deep Dive 1: AWS ALB & Terraform High-Availability Cloud Architecture -->
        <AlbProjectSection />

        <!-- Deep Dive 2: Comprehensive Enterprise Modules Catalog & Solved Problems -->
        <div id="case-studies">
          <ModulesShowcaseSection />
        </div>

      </div>

      <!-- View 2: Printable & Structured Executive CV / Resume -->
      <div v-show="currentView === 'cv'">
        <CvView 
          @switch-view="handleSwitchView"
        />
      </div>

    </main>

    <!-- Global Contact & Footer (Matching Obsidian & Crimson Palette) -->
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
import WhyPartnerSection from './components/WhyPartnerSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceMilestonesSection from './components/ExperienceMilestonesSection.vue'
import PhilosophySection from './components/PhilosophySection.vue'
import ImpactSection from './components/ImpactSection.vue'
import AlbProjectSection from './components/AlbProjectSection.vue'
import ModulesShowcaseSection from './components/ModulesShowcaseSection.vue'
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

function scrollToCaseStudies() {
  handleNavigate('case-studies')
}

function handleSelectProject(projectId) {
  handleNavigate('case-studies')
}

function openOpsConsole() {
  isOpsOpen.value = true
}

function closeOpsConsole() {
  isOpsOpen.value = false
}
</script>
