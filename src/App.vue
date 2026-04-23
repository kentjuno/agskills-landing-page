<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const scrollToPricing = () => {
  if (route.path !== '/') {
    router.push('/#pricing')
  } else {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="min-h-screen bg-background text-gray-200 overflow-hidden font-sans selection:bg-primary selection:text-white">
    <!-- Ambient Background -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[150px] mix-blend-screen"></div>
    </div>

    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center shadow-[0_0_15px_rgba(157,78,221,0.5)]">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-xl font-bold tracking-wider text-white">KJ STUDIO</span>
        </router-link>
        <div class="flex items-center gap-6 text-sm font-medium">
          <router-link to="/#features" class="hidden md:block hover:text-primary transition-colors">Tính Năng</router-link>
          <router-link to="/#how-it-works" class="hidden md:block hover:text-primary transition-colors">Cách Hoạt Động</router-link>
          <button @click="scrollToPricing" class="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all hover:shadow-[0_0_20px_rgba(157,78,221,0.3)]">
            Mua License
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="pt-20">
      <router-view></router-view>
    </div>

    <!-- Footer -->
    <footer class="relative z-10 py-10 border-t border-white/5 text-center px-6 mt-12 bg-surface">
      <div class="flex items-center justify-center gap-2 mb-4">
        <div class="w-6 h-6 rounded bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center">
          <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span class="font-bold text-gray-300">KJ STUDIO</span>
      </div>
      <div class="flex justify-center gap-6 mb-4 text-sm text-gray-400">
        <router-link to="/terms" class="hover:text-primary transition-colors">Điều khoản dịch vụ</router-link>
        <router-link to="/privacy" class="hover:text-primary transition-colors">Chính sách bảo mật</router-link>
      </div>
      <p class="text-gray-500 text-sm">© 2026 KJ Studio. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Skill card fade transition */
.skill-fade-enter-active,
.skill-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.skill-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.skill-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
