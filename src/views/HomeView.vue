<script setup>
import { ref } from 'vue'

const showPricing = ref(false)

const scrollToPricing = () => {
  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })
}

const buyLicense = () => {
  window.open('https://fb.com/kentjuno', '_blank')
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
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center shadow-[0_0_15px_rgba(157,78,221,0.5)]">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-xl font-bold tracking-wider text-white">KJ STUDIO</span>
        </div>
        <div class="flex items-center gap-6 text-sm font-medium">
          <a href="#features" class="hidden md:block hover:text-primary transition-colors">Tính Năng</a>
          <a href="#how-it-works" class="hidden md:block hover:text-primary transition-colors">Cách Hoạt Động</a>
          <button @click="scrollToPricing" class="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all hover:shadow-[0_0_20px_rgba(157,78,221,0.3)]">
            Mua License
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <main class="relative z-10 pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto text-center space-y-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(157,78,221,0.2)]">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Antigravity Marketing Dashboard
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Làm Chủ AI Marketing.<br/>
          <span class="text-gradient">Lắp Ráp Dễ Như Lego.</span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Biến máy tính của bạn thành bộ não sáng tạo với 130+ kỹ năng AI chạy Local. Tự động hóa nội dung, SEO, quảng cáo mà không lo lộ dữ liệu.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <button @click="scrollToPricing" class="px-8 py-4 w-full sm:w-auto rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-hover transition-all animate-glow-pulse shadow-[0_0_30px_rgba(157,78,221,0.4)] flex items-center justify-center gap-2">
            Nhận License Ngay
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <a href="#how-it-works" class="px-8 py-4 w-full sm:w-auto rounded-xl glass-panel text-gray-300 font-medium hover:text-white transition-colors flex items-center justify-center gap-2">
            Tìm hiểu thêm
          </a>
        </div>
      </div>

      <!-- Dashboard Mockup Image -->
      <div class="max-w-5xl mx-auto mt-20 relative">
        <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <div class="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 relative">
          <!-- Phony browser bar -->
          <div class="h-8 bg-surface-elevated border-b border-white/5 flex items-center px-4 gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div class="mx-auto text-xs text-gray-500 font-mono">localhost:5173</div>
          </div>
          <!-- Dashboard Image -->
          <div class="aspect-video bg-surface relative overflow-hidden group">
            <img src="../assets/image.png" alt="Antigravity Marketing Dashboard" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </main>

    <!-- Features Section -->
    <section id="features" class="relative z-10 py-24 bg-surface-elevated/50 border-y border-white/5">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Mọi Thứ Bạn Cần Ở Một Nơi</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Không còn phải copy-paste phức tạp. Hệ thống tự động lưu trữ và quản lý tài sản số của bạn một cách thông minh.</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Feature 1 -->
          <div class="glass-panel p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">130+ AI Marketing Skills</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Bộ sưu tập câu lệnh prompt chuyên sâu từ Copywriting, SEO, Analytics đến Ads Management. Chép 1 click là dùng ngay.</p>
          </div>
          <!-- Feature 2 -->
          <div class="glass-panel p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">UI Command Center</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Giao diện trực quan giúp bạn quản lý Brand Voice, Fonts, Logos và toàn bộ File (Assets) do AI tạo ra trên máy của bạn.</p>
          </div>
          <!-- Feature 3 -->
          <div class="glass-panel p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Bảo Mật Local 100%</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Dữ liệu công ty bạn không bao giờ rời khỏi máy tính. Antigravity chạy hoàn toàn Local, an toàn tuyệt đối cho doanh nghiệp.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section id="how-it-works" class="relative z-10 py-24">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Triển Khai Trong 3 Bước</h2>
        </div>
        
        <div class="space-y-12">
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="w-16 h-16 shrink-0 rounded-full bg-surface-elevated border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary shadow-[0_0_15px_rgba(157,78,221,0.2)]">1</div>
            <div class="flex-1 glass-panel p-6 rounded-xl w-full">
              <h3 class="text-xl font-bold text-white mb-2">Cài Đặt Lõi Hệ Thống</h3>
              <p class="text-gray-400 text-sm mb-4">Mở Terminal và tải lõi KJ Studio CLI bằng lệnh NPM.</p>
              <div class="bg-background rounded-lg p-3 font-mono text-xs text-green-400 border border-white/5">
                > npm install -g @kjantigravity/cli<br/>
                > kj-kit init -k marketing
              </div>
            </div>
          </div>
          
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="w-16 h-16 shrink-0 rounded-full bg-surface-elevated border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary shadow-[0_0_15px_rgba(157,78,221,0.2)]">2</div>
            <div class="flex-1 glass-panel p-6 rounded-xl w-full">
              <h3 class="text-xl font-bold text-white mb-2">Nhập Mã Quyền (License)</h3>
              <p class="text-gray-400 text-sm mb-4">Sau khi cài đặt, điền GitHub Personal Access Token của bạn để xác thực quyền lợi truy cập mã nguồn gốc.</p>
              <div class="bg-background rounded-lg p-3 font-mono text-xs text-gray-300 border border-white/5 flex items-center gap-2">
                <span class="text-primary">Token:</span> ghp_xxxxxxxxxxxxxxxxxxxx
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="w-16 h-16 shrink-0 rounded-full bg-surface-elevated border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary shadow-[0_0_15px_rgba(157,78,221,0.2)]">3</div>
            <div class="flex-1 glass-panel p-6 rounded-xl w-full">
              <h3 class="text-xl font-bold text-white mb-2">Mở Dashboard & Tận Hưởng</h3>
              <p class="text-gray-400 text-sm mb-4">Chỉ cần gõ 1 câu lệnh, toàn bộ trung tâm chỉ huy sẽ mở ra trên trình duyệt của bạn.</p>
              <div class="bg-background rounded-lg p-3 font-mono text-xs text-primary border border-white/5">
                > kj-kit dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="relative z-10 py-24 bg-surface border-y border-white/5">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Trọn Đời License</h2>
          <p class="text-gray-400 max-w-xl mx-auto">Mua 1 lần, dùng trọn đời. Nâng cấp miễn phí. Trở thành học trò chân truyền với đầy đủ binh khí.</p>
        </div>
        
        <div class="glass-panel max-w-lg mx-auto rounded-3xl overflow-hidden relative border-primary/30 shadow-[0_0_40px_rgba(157,78,221,0.15)]">
          <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div class="p-8 sm:p-10 text-center relative z-10">
            <h3 class="text-2xl font-bold text-white mb-2">Marketing License</h3>
            <div class="flex items-end justify-center gap-1 my-6">
              <span class="text-5xl font-bold text-white">$49</span>
              <span class="text-gray-400 mb-1">/ vĩnh viễn</span>
            </div>
            
            <ul class="text-left space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span class="text-gray-300">Truy cập toàn bộ 130+ Marketing Skills</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span class="text-gray-300">Giao diện Dashboard Local siêu xịn</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span class="text-gray-300">Tự động scan Assets và bài viết</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span class="text-gray-300">Update tính năng và skills mới miễn phí</span>
              </li>
              <li class="flex items-start gap-3 pt-4 border-t border-white/10">
                <svg class="w-5 h-5 text-gray-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span class="text-gray-400 text-sm">Tuỳ chọn: Dịch vụ cài đặt tận giường (Setup từ A-Z qua UltraViewer) thêm <strong>$10</strong> phí nhân sự.</span>
              </li>
            </ul>
            
            <button @click="buyLicense" class="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-hover transition-all shadow-[0_0_20px_rgba(157,78,221,0.3)]">
              Nhắn Tin Mua Ngay
            </button>
            <p class="text-xs text-gray-500 mt-4">Sẽ mở khung chat Facebook fb.com/kentjuno</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 py-10 border-t border-white/5 text-center px-6">
      <div class="flex items-center justify-center gap-2 mb-4">
        <div class="w-6 h-6 rounded bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center">
          <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span class="font-bold text-gray-300">KJ STUDIO</span>
      </div>
      <p class="text-gray-500 text-sm">© 2026 KJ Studio. All rights reserved.</p>
    </footer>

  </div>
</template>
