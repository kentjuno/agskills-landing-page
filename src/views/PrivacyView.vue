<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-12">
    <div class="glass-panel p-8 md:p-12 rounded-3xl">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">{{ t('privacy.title') }}</h1>
      <p class="text-gray-400 mb-8">{{ t('privacy.lastUpdated') }}</p>

      <div class="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <div class="bg-primary/10 border border-primary/30 p-6 rounded-xl mb-8">
            <h2 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {{ t('privacy.coreCommitment.title') }}
            </h2>
            <p class="text-sm" v-html="t('privacy.coreCommitment.desc')"></p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('privacy.sections.0.title') }}</h2>
          <p>{{ t('privacy.sections.0.desc') }}</p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li v-html="t('privacy.sections.0.list.0')"></li>
            <li v-html="t('privacy.sections.0.list.1')"></li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('privacy.sections.1.title') }}</h2>
          <p v-html="t('privacy.sections.1.desc')"></p>
          <ul class="list-disc pl-6 space-y-2 mt-4">
            <li v-html="t('privacy.sections.1.list.0')"></li>
            <li v-html="t('privacy.sections.1.list.1')"></li>
            <li v-html="t('privacy.sections.1.list.2')"></li>
            <li v-html="t('privacy.sections.1.list.3')"></li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('privacy.sections.2.title') }}</h2>
          <p>{{ t('privacy.sections.2.desc') }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary mb-4">{{ t('privacy.sections.3.title') }}</h2>
          <p>{{ t('privacy.sections.3.desc') }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-white mb-4 mt-12 border-t border-white/10 pt-8">{{ t('privacy.sections.4.title') }}</h2>
          <p v-html="t('privacy.sections.4.desc')"></p>
        </section>
      </div>
    </div>
  </main>
</template>
