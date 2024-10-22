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
    veeValidate: {
        autoImports: true,
        componentNames: {
            Form: 'VeeForm',
            Field: 'VeeField',
            FieldArray: 'VeeFieldArray',
            ErrorMessage: 'VeeErrorMessage'
        }
    },
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },
    runtimeConfig: {
        public: {
            apiBaseUrl: '/api/v1'
        }
    },
    routeRules: {
        '/api/v1/**': { proxy: 'https://dummyjson.com/**' }
    }
})
