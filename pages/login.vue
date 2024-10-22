<template>
    <div class="flex justify-center">
        <BackgroundDecorator />
        <div
            class="login-container relative mx-auto flex min-h-[calc(100vh-var(--header-height)-var(--footer-height))] w-full max-w-md items-center py-8 lg:py-10"
        >
            <div
                class="m-auto w-full rounded-sm bg-white p-4 shadow-none lg:rounded-lg lg:p-8 lg:shadow-lg"
            >
                <h1 class="mb-6 text-center text-xl font-bold">Login</h1>
                <form @submit.prevent="onSubmit">
                    <FormInput
                        v-model="username"
                        :required="true"
                        :label="t('form.username.label')"
                        class="mb-6"
                        :error="errors.username"
                        :placeholder="t('form.username.placeholder')"
                        type="text"
                        icon="material-symbols:account-circle-outline"
                    />
                    <FormPassword
                        v-model="password"
                        :required="true"
                        :label="t('form.password.label')"
                        class="mb-6"
                        :error="errors.password"
                        :placeholder="t('form.password.placeholder')"
                        icon="material-symbols:lock-outline"
                    />
                    <UButton
                        type="submit"
                        block
                        :loading="isLoading"
                        size="lg"
                        icon="material-symbols:login-rounded"
                    >
                        Login
                    </UButton>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { API_ENDPOINT } from '~/constants/api-endpoint'
import { HTTP_STATUS } from '~/constants/http'
import { loginSchema } from '~/utils/validation/auth.schema'

const { t } = useI18n()
const validationSchema = loginSchema(t)
const initialValues = {
    username: 'emilys',
    password: 'emilyspass'
}

const { defineField, handleSubmit, errors } = useForm({
    initialValues,
    validationSchema
})
const [username] = defineField('username')
const [password] = defineField('password')

const isLoading = ref(false)
const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl
const toast = useToast()

const onSubmit = handleSubmit(async (values) => {
    try {
        isLoading.value = true
        const { data, status, error } = await useFetch(`${apiBaseUrl}/${API_ENDPOINT.LOGIN}`, {
            method: 'POST',
            body: values
        })
        if (status.value == HTTP_STATUS.SUCCESS) {
            toast.add({ title: `Welcome: ${data.value.firstName} ${data.value.lastName}` })
            navigateTo('/')
        } else {
            toast.add({
                title: `${error.value}`,
                color: 'red'
            })
        }
    } catch (e) {
        console.error(e)
    } finally {
        isLoading.value = false
    }
})
</script>

<style scoped></style>
