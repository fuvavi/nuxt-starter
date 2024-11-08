import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { TOKEN_COOKIE_KEY } from '~/constants/common'

export default defineNuxtRouteMiddleware(() => {
    const token = useCookie(TOKEN_COOKIE_KEY)
    if (token.value) {
        return navigateTo('/')
    }
})
