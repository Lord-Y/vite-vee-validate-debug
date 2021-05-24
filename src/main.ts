import { createApp } from 'vue'
import App from './App.vue'
import { defineRule, configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import AllRules from '@vee-validate/rules'
import en from '@vee-validate/i18n/dist/locale/en.json'
import fr from '@vee-validate/i18n/dist/locale/fr.json'

configure({
  generateMessage: localize({
    en,
    fr,
  }),
})

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

createApp(App).mount('#app')
