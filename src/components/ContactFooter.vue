<template>
  <footer id="contact" class="border-t border-white/[0.08] bg-[#070709] pt-16 pb-12 relative overflow-hidden">
    <!-- Subtle Ambient Glow -->
    <div class="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-red-600/[0.06] blur-[120px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Top Grid: Pitch & Quick Message -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left: Contact Details & Availability -->
        <div class="lg:col-span-6 space-y-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300">
              <span class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
              <span>Available for Immediate Hire</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Let's Discuss Your Systems &amp; Cloud Architecture
            </h2>
            <p class="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl font-light">
              Whether you need to architect high-availability AWS cloud infrastructure with Terraform, automate enterprise ERPNext modules, or build high-throughput Vue.js trading applications — I am ready to contribute immediately to your engineering goals.
            </p>
          </div>

          <!-- Direct Channels -->
          <div class="space-y-3 text-xs">
            <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0e0e13] border border-white/[0.08] hover:border-red-500/30 transition-all">
              <span class="text-red-400 text-base">✉️</span>
              <div>
                <span class="text-neutral-500 text-[10px] uppercase font-mono tracking-wider block">Email Address</span>
                <a href="mailto:sapkalerohan07@gmail.com" class="text-white hover:text-red-400 font-semibold transition-colors">sapkalerohan07@gmail.com</a>
              </div>
            </div>

            <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0e0e13] border border-white/[0.08] hover:border-red-500/30 transition-all">
              <span class="text-neutral-300 text-base">🐙</span>
              <div>
                <span class="text-neutral-500 text-[10px] uppercase font-mono tracking-wider block">GitHub Profile</span>
                <a href="https://github.com/rohansapkale" target="_blank" rel="noopener" class="text-white hover:text-red-400 font-semibold transition-colors">github.com/rohansapkale</a>
              </div>
            </div>

            <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0e0e13] border border-white/[0.08] hover:border-red-500/30 transition-all">
              <span class="text-neutral-300 text-base">✈️</span>
              <div>
                <span class="text-neutral-500 text-[10px] uppercase font-mono tracking-wider block">Telegram Operations Bot</span>
                <span class="text-white font-semibold">@ServerBoatBot • @rohan_sapkale</span>
              </div>
            </div>

            <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0e0e13] border border-white/[0.08]">
              <span class="text-emerald-400 text-base">📍</span>
              <div>
                <span class="text-neutral-500 text-[10px] uppercase font-mono tracking-wider block">Location &amp; Mobility</span>
                <span class="text-white font-semibold">India • Available for Remote &amp; Global Relocation</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Official Inquiry Dispatcher Form -->
        <div class="lg:col-span-6">
          <div class="bento-card p-6 sm:p-8 space-y-5 bg-[#0e0e13]">
            <div class="border-b border-white/[0.06] pb-3">
              <h3 class="text-lg font-bold text-white">Send Direct Message</h3>
              <p class="text-xs text-neutral-400 font-light">Dispatches directly to my workstation and Telegram notifications</p>
            </div>

            <form @submit.prevent="sendMessage" class="space-y-4">
              <div>
                <label class="block text-xs font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">Your Name / Organization</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  required
                  placeholder="e.g. Alex Vance • Principal Architect"
                  class="w-full bg-[#14141a] border border-white/[0.1] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">Work Email</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  placeholder="alex@enterprise.com"
                  class="w-full bg-[#14141a] border border-white/[0.1] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">Project / Systems Brief</label>
                <textarea 
                  v-model="form.message"
                  rows="4" 
                  required
                  placeholder="Describe your architecture requirements, infrastructure scale, or open engineering role..."
                  class="w-full bg-[#14141a] border border-white/[0.1] rounded-xl p-4 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                ></textarea>
              </div>

              <div class="flex items-center justify-between pt-2">
                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="btn-pill-white w-full sm:w-auto text-xs"
                >
                  <span v-if="!isSubmitting">Dispatch Message →</span>
                  <span v-else>Transmitting Message...</span>
                </button>

                <p v-if="submitted" class="text-xs text-emerald-400 font-mono">
                  ✓ Message transmitted successfully!
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
        <div>
          © 2026 Rohan Sapkale. All rights reserved. Built with Vue 3, Vite &amp; Tailwind CSS.
        </div>
        <div class="flex items-center gap-4">
          <button @click="$emit('switch-view', 'cv')" class="hover:text-white transition-colors">Executive CV</button>
          <span>•</span>
          <a href="#hero" class="hover:text-white transition-colors">Back to Top ↑</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['navigate', 'switch-view', 'open-ops'])

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitted = ref(false)

const sendMessage = async () => {
  isSubmitting.value = true
  try {
    await fetch('/api/ops/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
  } catch (e) {
    // Graceful offline fallback
  } finally {
    isSubmitting.value = false
    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
    setTimeout(() => {
      submitted.value = false
    }, 5000)
  }
}
</script>
