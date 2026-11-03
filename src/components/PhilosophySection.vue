<template>
  <section id="philosophy" class="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-2">
        <span class="section-kicker">THE ENGINEER BEHIND THE CODE</span>
        <h2 class="section-title">
          A deep dive into my engineering philosophy
        </h2>
        <p class="text-xs sm:text-base text-neutral-400 font-light max-w-xl mx-auto px-2">
          "Architecture isn't just about making things work — it's about engineering resilient systems that fail gracefully, scale effortlessly, and operate with sub-second responsiveness."
        </p>
      </div>

      <!-- Large Cinematic Card Matching Reference Layout -->
      <div class="bento-card p-4 sm:p-7 lg:p-8 relative overflow-hidden bg-[#0c0c10] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(220,38,38,0.15)] group">
        
        <!-- Top Screen Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-3 sm:pb-4 mb-5 sm:mb-6">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span class="ml-2 font-mono text-[10px] sm:text-xs text-neutral-400 font-bold truncate">AWS_MULTI_AZ_TOPOLOGY_CONSOLE // us-east-1</span>
          </div>

          <div class="flex items-center gap-2 self-start sm:self-auto">
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-[9px] sm:text-[10px] font-mono text-emerald-400 font-semibold whitespace-nowrap">
              ● PROD ALL SYSTEMS GO
            </span>
          </div>
        </div>

        <!-- Interactive Architecture Blueprint & Topology -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          <!-- Visual Topology Simulator -->
          <div class="lg:col-span-8 p-4 sm:p-6 rounded-2xl bg-[#08080b] border border-white/[0.06] relative overflow-hidden space-y-4 sm:space-y-6">
            <div class="absolute inset-0 crimson-grid-isometric opacity-40 pointer-events-none"></div>

            <div class="relative z-10 space-y-3 sm:space-y-4">
              <!-- Tier 1: Client & ALB -->
              <div class="p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-red-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shadow-[0_0_20px_rgba(220,38,38,0.15)]">
                <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center font-bold text-red-400 text-xs sm:text-sm flex-shrink-0">
                    ALB
                  </div>
                  <div class="min-w-0">
                    <span class="text-xs font-bold text-white block">Application Load Balancer</span>
                    <span class="text-[9px] sm:text-[10px] font-mono text-neutral-400 break-all block">DNS: portfolio-alb-12948.us-east-1.elb.amazonaws.com</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 flex-shrink-0">
                  <span class="px-2 py-0.5 rounded bg-black/60 text-[9px] sm:text-[10px] font-mono text-emerald-400 font-bold border border-emerald-500/30">
                    HTTPS 443 SSL
                  </span>
                  <span class="px-2 py-0.5 rounded bg-black/60 text-[9px] sm:text-[10px] font-mono text-red-400 font-bold border border-red-500/30">
                    ROUND-ROBIN
                  </span>
                </div>
              </div>

              <!-- Connecting Line -->
              <div class="flex justify-around px-4 sm:px-8 text-neutral-600 text-center">
                <span class="text-[10px] sm:text-xs font-mono text-red-500">↓ Availability Zone A</span>
                <span class="text-[10px] sm:text-xs font-mono text-red-500">↓ Availability Zone B</span>
              </div>

              <!-- Tier 2: Multi-AZ Auto-Scaling Group Targets -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <!-- AZ us-east-1a -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-white/10 space-y-1.5 sm:space-y-2">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-bold text-white font-mono text-[11px] sm:text-xs">us-east-1a (Subnet Priv-1)</span>
                    <span class="text-emerald-400 font-mono text-[9px] sm:text-[10px]">HEALTHY 200 OK</span>
                  </div>
                  <div class="space-y-1 font-mono text-[10px] sm:text-[11px] text-neutral-400">
                    <p>• EC2 Target 1: <span class="text-neutral-200">10.0.1.42:8000</span> (Active)</p>
                    <p>• Redis Cache: <span class="text-neutral-200">Primary Node</span></p>
                  </div>
                </div>

                <!-- AZ us-east-1b -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-white/10 space-y-1.5 sm:space-y-2">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-bold text-white font-mono text-[11px] sm:text-xs">us-east-1b (Subnet Priv-2)</span>
                    <span class="text-emerald-400 font-mono text-[9px] sm:text-[10px]">HEALTHY 200 OK</span>
                  </div>
                  <div class="space-y-1 font-mono text-[10px] sm:text-[11px] text-neutral-400">
                    <p>• EC2 Target 2: <span class="text-neutral-200">10.0.2.89:8000</span> (Active)</p>
                    <p>• Redis Replica: <span class="text-neutral-200">Read Replica</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Philosophy Pillars -->
          <div class="lg:col-span-4 space-y-3 sm:space-y-4">
            <div class="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span class="text-red-500 font-mono">01.</span>
                <span>Automate Every Layer (IaC)</span>
              </h4>
              <p class="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed">
                Nothing is configured by hand in production. Terraform manages infrastructure states, version-controlled in Git.
              </p>
            </div>

            <div class="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span class="text-red-500 font-mono">02.</span>
                <span>Eliminate Single Points of Failure</span>
              </h4>
              <p class="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed">
                If an entire AWS data center goes offline, traffic automatically routes to healthy instances in parallel zones with 0 user disruption.
              </p>
            </div>

            <div class="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span class="text-red-500 font-mono">03.</span>
                <span>Obsession with Sub-Second Speed</span>
              </h4>
              <p class="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed">
                From Redis in-memory pipelines to single-query database joins, milliseconds matter for traders and enterprise workflows.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>
