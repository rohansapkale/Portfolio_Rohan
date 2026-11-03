<template>
  <div class="rounded-xl border border-[#232d3f] bg-[#0d1118] p-6 sm:p-7 shadow-md my-8">
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      
      <!-- Left side: Status & Target Roles -->
      <div class="space-y-2.5 max-w-2xl">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span class="text-xs uppercase tracking-wider font-semibold text-emerald-400">
            Immediate Availability
          </span>
          <span class="text-slate-500 text-xs">|</span>
          <span class="text-xs text-slate-300">Open to Global Remote & Relocation</span>
        </div>

        <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Actively Seeking Roles: Cloud DevOps & Full-Stack Systems Engineering
        </h3>

        <p class="text-sm text-slate-300 leading-relaxed">
          Available for full-time positions, contracting, and enterprise architectural consulting. Experienced in building multi-tier AWS cloud infrastructure with Terraform, optimizing Docker container pipelines, and engineering high-availability Frappe & ERPNext platforms.
        </p>

        <!-- Role Badges -->
        <div class="flex flex-wrap gap-2 pt-1">
          <span class="badge-formal">Cloud DevOps Engineer</span>
          <span class="badge-formal">Site Reliability Engineer (SRE)</span>
          <span class="badge-formal">AWS & Terraform Infrastructure Specialist</span>
          <span class="badge-formal">Full-Stack Systems Engineer (Python / Frappe / Vue)</span>
        </div>
      </div>

      <!-- Right side: Actions -->
      <div class="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
        <a 
          href="#contact" 
          @click.prevent="$emit('navigate', 'contact')"
          class="btn-primary text-center px-5 py-2.5 text-xs font-semibold"
        >
          <span>Schedule an Interview</span>
          <span>→</span>
        </a>

        <button 
          @click="$emit('switch-view', 'cv')"
          class="btn-secondary text-center px-5 py-2.5 text-xs font-semibold"
        >
          <span>Review Printable CV</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
defineEmits(['navigate', 'switch-view'])
</script>
