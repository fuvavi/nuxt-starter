export default defineAppConfig({
    ui: {
        button: {
            default: {
                color: 'green'
            }
        },
        container: {
            constrained: 'max-w-5xl'
        },
        notifications: {
            position: 'top-0 bottom-[unset]'
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
