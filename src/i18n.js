import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'

const savedLanguage = localStorage.getItem('language') || 'en'

const i18n = createI18n({
  legacy: false, // use Composition API
  locale: savedLanguage,
  fallbackLocale: 'en',
  warnHtmlMessage: false,
  messages: {
    en,
    vi
  }
})

export default i18n
