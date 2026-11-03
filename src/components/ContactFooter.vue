<template>
  <footer id="contact" class="border-t border-[#1e2533] bg-[#090b10] pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Top Grid: Pitch & Quick Message -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left: Contact Details & Availability -->
        <div class="lg:col-span-6 space-y-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Available for Immediate Hire</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let's Discuss Your Systems & Cloud Architecture
            </h2>
            <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Whether you need to architect high-availability AWS cloud infrastructure with Terraform, automate enterprise ERPNext modules, or build high-throughput Vue.js trading applications — I am ready to contribute immediately to your engineering goals.
            </p>
          </div>

          <!-- Direct Channels -->
          <div class="space-y-3 text-xs">
            <div class="flex items-center gap-3 p-3.5 rounded-lg bg-[#0e1219] border border-[#1e2533]">
              <span class="text-blue-400 text-base">✉️</span>
              <div>
                <span class="text-slate-400 text-[10px] uppercase tracking-wider block">Email Address</span>
                <a href="mailto:sapkalerohan07@gmail.com" class="text-white hover:text-blue-400 font-semibold transition-colors">sapkalerohan07@gmail.com</a>
              </div>
            </div>

            <div class="flex items-center gap-3 p-3.5 rounded-lg bg-[#0e1219] border border-[#1e2533]">
              <span class="text-blue-400 text-base">🐙</span>
              <div>
                <span class="text-slate-400 text-[10px] uppercase tracking-wider block">GitHub Profile</span>
                <a href="https://github.com/rohansapkale" target="_blank" rel="noopener" class="text-white hover:text-blue-400 font-semibold transition-colors">github.com/rohansapkale</a>
              </div>
            </div>

            <div class="flex items-center gap-3 p-3.5 rounded-lg bg-[#0e1219] border border-[#1e2533]">
              <span class="text-amber-400 text-base">✈️</span>
              <div>
                <span class="text-slate-400 text-[10px] uppercase tracking-wider block">Telegram Operations Bot</span>
                <span class="text-white font-semibold">@ServerBoatBot • @rohan_sapkale</span>
              </div>
            </div>

            <div class="flex items-center gap-3 p-3.5 rounded-lg bg-[#0e1219] border border-[#1e2533]">
              <span class="text-emerald-400 text-base">📍</span>
              <div>
                <span class="text-slate-400 text-[10px] uppercase tracking-wider block">Location & Mobility</span>
                <span class="text-white font-semibold">India • Available for Remote & Global Relocation</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Official Inquiry Dispatcher Form -->
        <div class="lg:col-span-6">
          <div class="p-6 sm:p-8 rounded-xl border border-[#1e2533] bg-[#0d1017] space-y-4">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <svg class="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Direct Inquiry Form</span>
            </h3>

            <form @submit.prevent="sendMessage" class="space-y-3.5 text-xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div class="space-y-1">
                  <label class="text-slate-400 font-medium">Your Name</label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    required 
                    placeholder="Recruiter / Hiring Manager" 
                    class="w-full px-3 py-2 rounded-md bg-[#121620] border border-[#202738] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div class="space-y-1">
                  <label class="text-slate-400 font-medium">Your Email</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    required 
                    placeholder="contact@company.com" 
                    class="w-full px-3 py-2 rounded-md bg-[#121620] border border-[#202738] text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label class="text-slate-400 font-medium">Subject / Target Role</label>
                <input 
                  v-model="form.subject" 
                  type="text" 
                  required 
                  placeholder="Cloud DevOps Engineer / Full-Stack Systems Specialist" 
                  class="w-full px-3 py-2 rounded-md bg-[#121620] border border-[#202738] text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div class="space-y-1">
                <label class="text-slate-400 font-medium">Message Details</label>
                <textarea 
                  v-model="form.message" 
                  rows="3" 
                  required 
                  placeholder="Hello Rohan, we are reviewing your experience in AWS, Terraform, and enterprise Frappe systems..." 
                  class="w-full px-3 py-2 rounded-md bg-[#121620] border border-[#202738] text-white focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full btn-primary py-2.5 text-xs font-semibold"
              >
                <span>Submit Inquiry</span>
                <span>→</span>
              </button>

              <div v-if="sent" class="p-3 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-center font-medium">
                ✓ Message received! Launching email client to deliver message.
              </div>
            </form>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-[#1e2533] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>
          © 2026 Rohan Sapkale. All rights reserved.
        </div>
        <div class="flex items-center gap-4">
          <a href="#hero" @click.prevent="$emit('navigate', 'hero')" class="hover:text-white transition-colors">Top of Page ↑</a>
          <span>•</span>
          <button @click="$emit('switch-view', 'cv')" class="hover:text-white transition-colors">Executive CV</button>
          <span>•</span>
          <button @click="$emit('open-ops')" class="hover:text-amber-400 transition-colors">Private Console</button>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { reactive, ref } from 'vue'

defineEmits(['navigate', 'switch-view', 'open-ops'])

const sent = ref(false)
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

function sendMessage() {
  sent.value = true
  const mailtoLink = `mailto:sapkalerohan07@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent("From: " + form.name + " (" + form.email + ")\n\n" + form.message)}`
  window.open(mailtoLink, '_blank')
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    sent.value = false
  }, 4000)
}
</script>
