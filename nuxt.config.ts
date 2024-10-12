// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image', '@vee-validate/nuxt'],
    css: ['~/assets/scss/style.scss'],
    ui: {
        safelistColors: ['green']
    },
    icon: {
        customCollections: [
            {
                prefix: 'vicon',
                dir: './assets/icons'
            }
        ]
    },
    i18n: {
        locales: [{ code: 'en', iso: 'en-US', file: 'en.json' }],
        defaultLocale: 'en',
        langDir: 'locales'
    },
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    }
})
