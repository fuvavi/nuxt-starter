import { API_ENDPOINT } from '~/constants/api-endpoint'
import { REFRESH_TOKEN_COOKIE_KEY, TOKEN_COOKIE_KEY, USER_LS_KEY } from '~/constants/common'
import { HTTP_STATUS } from '~/constants/http'

interface AuthData {
    username: string
    password: string
}

export interface User {
    id: string | number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    accessToken?: string
    refreshToken?: string
}

export const useAuth = defineStore('auth', () => {
    const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl
    const user = ref<User | null>(null)
    const loading = ref(false)
    const isLoggedIn = ref(false)
    const token = useCookie(TOKEN_COOKIE_KEY)
    const refreshToken = useCookie(REFRESH_TOKEN_COOKIE_KEY)

    const setUserData = (data: User) => {
        user.value = data
        isLoggedIn.value = true
        token.value = data.accessToken
        refreshToken.value = data.refreshToken
    }
    const clearUserData = () => {
        user.value = null
        isLoggedIn.value = false
        token.value = null
        refreshToken.value = null
    }

    const register = async (payload: AuthData) => {
        loading.value = true
        try {
            const { data, status, error } = await useFetch(
                `${apiBaseUrl}/${API_ENDPOINT.REGISTER}`,
                {
                    method: 'POST',
                    body: payload
                }
            )
            if (status.value == HTTP_STATUS.SUCCESS) {
                setUserData(data.value)
                localStorage.setItem(USER_LS_KEY, JSON.stringify(data.value))
                isLoggedIn.value = true
            }
            return {
                data,
                status,
                error
            }
        } catch (error) {
            console.error('Register failed', error)
        } finally {
            loading.value = false
        }
    }

    const login = async (payload: AuthData) => {
        loading.value = true
        try {
            const { data, status, error } = await useFetch(`${apiBaseUrl}/${API_ENDPOINT.LOGIN}`, {
                method: 'POST',
                body: payload
            })
            if (status.value == HTTP_STATUS.SUCCESS) {
                setUserData(data.value)
                localStorage.setItem(USER_LS_KEY, JSON.stringify(data.value))
                isLoggedIn.value = true
            }
            return {
                data,
                status,
                error
            }
        } catch (error) {
            console.error('Register failed', error)
        } finally {
            loading.value = false
        }
    }

    const logout = (): void => {
        user.value = null
        clearUserData()
        localStorage.removeItem(USER_LS_KEY)
    }

    const initUser = (): void => {
        const savedUser = localStorage.getItem(USER_LS_KEY)
        if (savedUser) {
            const userLS = JSON.parse(savedUser) as User
            setUserData(userLS)
        }
    }

    return {
        loading,
        user,
        isLoggedIn,
        initUser,
        register,
        login,
        logout
    }
})
