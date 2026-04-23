<script setup>
import { ref } from 'vue'

const showPricing = ref(false)
const activeSkill = ref(0)
const copied = ref(false)

const scrollToPricing = () => {
  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })
}

const buyLicense = () => {
  window.open('https://fb.com/kentjuno', '_blank')
}

const copyCommand = (cmd) => {
  navigator.clipboard.writeText(cmd)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

const skills = [
  {
    id: 'copywriting',
    emoji: '✍️',
    label: 'Copywriting',
    command: 'akm:copywriting',
    hint: '[type] [context]',
    title: 'Conversion Copywriting Engine',
    description: 'Áp dụng 6 công thức copy thực chiến (AIDA, PAS, BAB, 4Ps, 4Us, FAB) để viết nội dung chuyển đổi cao cho landing page, email, quảng cáo. Tự động trích xuất phong cách viết từ file của bạn.',
    useCases: [
      'Viết headline/subject line thu hút',
      'Landing page copy theo công thức AIDA',
      'Email campaign sequence',
      'CTA optimization A/B variants',
      'Áp dụng brand voice từ tài liệu nội bộ',
    ],
    rightTitle: 'Công thức Copy',
    rightItems: [
      { label: 'AIDA', desc: 'Attention → Interest → Desire → Action', tag: 'Landing Page' },
      { label: 'PAS', desc: 'Problem → Agitate → Solution', tag: 'Email / Sales' },
      { label: 'BAB', desc: 'Before → After → Bridge', tag: 'Testimonial' },
      { label: '4Us', desc: 'Urgent + Unique + Useful + Ultra-specific', tag: 'Headline' },
      { label: 'FAB', desc: 'Feature → Advantage → Benefit', tag: 'Product' },
    ],
  },
  {
    id: 'seo',
    emoji: '🔍',
    label: 'SEO',
    command: 'akm:seo',
    hint: '[audit|keywords|pseo] [target]',
    title: 'SEO Intelligence Suite',
    description: 'Nghiên cứu từ khóa với data thật (volume, CPC, độ khó) qua ReviewWeb.site API. Kết nối Google Search Console để phân tích traffic, CTR, vị trí. Tạo schema JSON-LD và kiểm tra Core Web Vitals.',
    useCases: [
      'Keyword research với data volume thật',
      'Phân tích đối thủ (traffic, top keywords)',
      'Audit SEO kỹ thuật toàn diện',
      'Tạo JSON-LD schema cho rich snippet',
      'Programmatic SEO template generation',
    ],
    rightTitle: 'Scripts Tích Hợp',
    rightItems: [
      { label: 'gsc-query.cjs', desc: 'Google Search Console API', tag: 'OAuth2' },
      { label: 'analyze-keywords.cjs', desc: 'Keyword research (ReviewWeb API)', tag: 'Data thật' },
      { label: 'audit-core-web-vitals.cjs', desc: 'CWV measurement', tag: 'LCP/CLS/FID' },
      { label: 'generate-schema.cjs', desc: 'JSON-LD Schema generator', tag: 'Rich Snippet' },
      { label: 'pseo-generator.cjs', desc: 'Programmatic SEO pages', tag: 'Scale' },
    ],
  },
  {
    id: 'ads',
    emoji: '📣',
    label: 'Ads Management',
    command: 'akm:ads-management',
    hint: '[platform] [campaign-type]',
    title: 'Multi-Platform Ads Engine',
    description: 'Quản lý quảng cáo trả phí trên Google, Meta, LinkedIn, TikTok qua API trực tiếp. Viết copy quảng cáo, tối ưu ngân sách, theo dõi ROAS. Tạo ảnh/video quảng cáo bằng AI (Gemini + Veo 3.1).',
    useCases: [
      'Tạo và tối ưu chiến dịch quảng cáo',
      'Viết copy ads theo platform (Google, Meta, TikTok)',
      'Generate hình ảnh ads bằng AI (Gemini Pro)',
      'Tạo video quảng cáo 15s với Veo 3.1',
      'A/B testing strategy và ROAS tracking',
    ],
    rightTitle: 'Platform API Scripts',
    rightItems: [
      { label: 'google-ads-manager.py', desc: 'Tạo campaign, pause, report', tag: 'Google Ads' },
      { label: 'meta-ads-manager.py', desc: 'Create ad, adset, campaign', tag: 'Meta / FB' },
      { label: 'Gemini Pro Image', desc: 'Gen ảnh ads chất lượng 4K', tag: 'AI Image' },
      { label: 'Veo 3.1 Video', desc: 'Gen video ads 15s', tag: 'AI Video' },
    ],
  },
  {
    id: 'social',
    emoji: '📲',
    label: 'Social Media',
    command: 'akm:social',
    hint: '[platform] [type]',
    title: 'Social Media Content Factory',
    description: 'Tạo nội dung tối ưu cho 7 nền tảng: X/Twitter, Facebook, Instagram, LinkedIn, TikTok, YouTube, Threads. Tự động viết hook, hashtag research, và lên lịch đăng bài qua API.',
    useCases: [
      'Viết post theo format chuẩn từng platform',
      'Thread, carousel, reel script creation',
      'Hook writing viral cho TikTok/Reels',
      'Content calendar planning',
      'Lên lịch tự động qua API',
    ],
    rightTitle: 'Nền Tảng Hỗ Trợ',
    rightItems: [
      { label: 'X / Twitter', desc: 'Thread, post, hook writing', tag: 'API ✓' },
      { label: 'Facebook & Instagram', desc: 'Feed, Stories, Reels', tag: 'API ✓' },
      { label: 'LinkedIn', desc: 'B2B content, thought leadership', tag: 'API ✓' },
      { label: 'TikTok', desc: 'Script, hook, hashtag research', tag: 'API ✓' },
      { label: 'YouTube', desc: 'Script, description, tags', tag: 'API ✓' },
    ],
  },
  {
    id: 'content',
    emoji: '📐',
    label: 'Content Strategy',
    command: 'akm:content-marketing',
    hint: '[content-type] [topic]',
    title: 'Content Strategy Framework',
    description: 'Xây dựng chiến lược nội dung dài hạn với Content Pillar mapping, editorial calendar, và content audit workflow. Tự động repurpose 1 bài blog thành social post, email sequence, video script.',
    useCases: [
      'Xây dựng Content Pillar (3-5 trụ cột)',
      'Editorial calendar 3/6 tháng',
      'Blog post planning theo keyword intent',
      'Content audit (Keep / Update / Delete)',
      'Repurpose 1 nội dung → nhiều định dạng',
    ],
    rightTitle: 'Content Workflow',
    rightItems: [
      { label: 'Content Strategy', desc: 'Audit → Pillar → Calendar', tag: '7 bước' },
      { label: 'Blog Planning', desc: 'Keyword → Brief → Draft → Publish', tag: 'SEO-first' },
      { label: 'Repurpose Engine', desc: 'Blog → Social + Email + Video', tag: 'x3 Output' },
      { label: 'Content Audit', desc: 'Keep, Update, Consolidate, Delete', tag: 'Quarterly' },
    ],
  },
]
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

    <!-- Skills Showcase Section -->
    <section id="skills" class="relative z-10 py-28 px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-5">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Skill Preview
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">130+ Skills Thực Chiến</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Mỗi skill là một chuyên gia độc lập. Gõ 1 lệnh, AI tự biết phải làm gì — từ nghiên cứu từ khóa đến viết quảng cáo hoàn chỉnh.</p>
        </div>

        <!-- Skill Tabs -->
        <div class="flex flex-wrap justify-center gap-2 mb-10">
          <button
            v-for="(skill, idx) in skills"
            :key="skill.id"
            @click="activeSkill = idx"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border"
            :class="activeSkill === idx
              ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(157,78,221,0.4)]'
              : 'border-white/10 text-gray-400 hover:text-white hover:border-primary/40 bg-surface-elevated/50'"
          >
            {{ skill.emoji }} {{ skill.label }}
          </button>
        </div>

        <!-- Skill Card -->
        <transition name="skill-fade" mode="out-in">
          <div :key="activeSkill" class="glass-panel rounded-2xl overflow-hidden border-white/10 shadow-2xl shadow-primary/10">
            <!-- Card Header -->
            <div class="border-b border-white/5 px-8 py-5 flex items-center justify-between bg-surface-elevated/40">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-primary/10 border border-primary/20">
                  {{ skills[activeSkill].emoji }}
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-mono text-xs px-2 py-0.5 rounded bg-primary/15 text-primary border border-primary/20">{{ skills[activeSkill].command }}</span>
                    <span class="text-xs text-gray-500 font-mono">{{ skills[activeSkill].hint }}</span>
                  </div>
                  <p class="text-white font-semibold mt-1">{{ skills[activeSkill].title }}</p>
                </div>
              </div>
              <button
                @click="copyCommand(skills[activeSkill].command)"
                class="text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 font-medium"
                :class="copied ? 'border-green-500/40 text-green-400 bg-green-500/10' : 'border-white/10 text-gray-400 hover:border-primary/40 hover:text-white'"
              >
                {{ copied ? '✓ Copied!' : 'Copy lệnh' }}
              </button>
            </div>

            <!-- Card Body -->
            <div class="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
              <!-- Left: Desc + Use Cases -->
              <div class="p-8">
                <p class="text-gray-300 text-sm leading-relaxed mb-6">{{ skills[activeSkill].description }}</p>
                <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Khi nào dùng</h4>
                <ul class="space-y-2">
                  <li
                    v-for="useCase in skills[activeSkill].useCases"
                    :key="useCase"
                    class="flex items-start gap-2.5 text-sm text-gray-400"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    {{ useCase }}
                  </li>
                </ul>
              </div>

              <!-- Right: Output + Formulas -->
              <div class="p-8 bg-surface/40">
                <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{{ skills[activeSkill].rightTitle }}</h4>
                <div class="space-y-2.5">
                  <div
                    v-for="item in skills[activeSkill].rightItems"
                    :key="item.label"
                    class="flex items-center justify-between p-3 rounded-lg bg-surface-elevated/60 border border-white/5 group hover:border-primary/20 transition-colors"
                  >
                    <div>
                      <span class="text-sm text-white font-medium">{{ item.label }}</span>
                      <p v-if="item.desc" class="text-xs text-gray-500 mt-0.5">{{ item.desc }}</p>
                    </div>
                    <span v-if="item.tag" class="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/15 font-mono">{{ item.tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- Browse all hint -->
        <p class="text-center text-sm text-gray-500 mt-8">
          🔥 Đây chỉ là <span class="text-primary font-medium">5/130+</span> skills. Mua license để mở khoá toàn bộ.
        </p>
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

  </div>
</template>
