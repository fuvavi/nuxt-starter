export default defineAppConfig({
    ui: {
        button: {
            default: {
                color: 'green'
            }
        },
        container: {
            constrained: 'max-w-5xl'
        }
    },
    icon: {
        aliases: {
            github: 'carbon:logo-github',
            nuxt: 'logos:nuxt-icon',
            rocket: 'skill-icons:rocket',
            nxt: 'NuxtLogo'
        }
    }
})
