<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-12">
    <div class="glass-panel p-8 md:p-12 rounded-3xl">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">{{ t('terms.title') }}</h1>
      <p class="text-gray-400 mb-8">{{ t('terms.lastUpdated') }}</p>

      <div class="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('terms.sections.0.title') }}</h2>
          <p>{{ t('terms.sections.0.content.0') }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('terms.sections.1.title') }}</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>{{ t('terms.sections.1.list.0') }}</li>
            <li>{{ t('terms.sections.1.list.1') }}</li>
            <li v-html="t('terms.sections.1.list.2')"></li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('terms.sections.2.title') }}</h2>
          <p>{{ t('terms.sections.2.content.0') }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('terms.sections.3.title') }}</h2>
          <p>{{ t('terms.sections.3.content.0') }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('terms.sections.4.title') }}</h2>
          <p>{{ t('terms.sections.4.content.0') }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('terms.sections.5.title') }}</h2>
          <p>{{ t('terms.sections.5.content.0') }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('terms.sections.6.title') }}</h2>
          <div class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 mb-4">
            <p class="text-amber-300 font-semibold mb-1">{{ t('terms.sections.6.alertTitle') }}</p>
            <p class="text-gray-300 text-sm">{{ t('terms.sections.6.alertDesc') }}</p>
          </div>
          <ul class="list-disc pl-6 space-y-2">
            <li v-html="t('terms.sections.6.list.0')"></li>
            <li>{{ t('terms.sections.6.list.1') }}</li>
            <li v-html="t('terms.sections.6.list.2')"></li>
            <li>{{ t('terms.sections.6.list.3') }}</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-white mb-4 mt-12 border-t border-white/10 pt-8">{{ t('terms.sections.7.title') }}</h2>
          <p v-html="t('terms.sections.7.content.0')"></p>
        </section>
      </div>
    </div>
  </main>
</template>
