// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxt/ui'],
    css: ['~/assets/scss/style.scss'],
    ui: {
        safelistColors: ['green']
    },
    icon: {
        customCollections: [
            {
                prefix: 'icon',
                dir: './assets/icons'
            }
        ]
    }
})
