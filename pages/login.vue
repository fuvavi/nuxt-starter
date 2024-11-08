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
                        :loading="loading"
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
import { useAuth } from '~/composables/use-auth'
import { HTTP_STATUS } from '~/constants/http'
import { loginSchema } from '~/utils/validation/auth.schema'

useHead({
    title: 'Login'
})

definePageMeta({
    middleware: 'auth'
})

const { t } = useI18n()
const toast = useToast()
const { loading, login } = useAuth()
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

const onSubmit = handleSubmit(async (values) => {
    const response = await login(values)
    if (response?.status.value === HTTP_STATUS.SUCCESS) {
        toast.add({
            title: `Welcome: ${response.data.value.firstName} ${response.data.value.lastName}`
        })
        navigateTo('/')
    } else {
        toast.add({
            title: `${response?.error?.value?.data.message}`,
            color: 'red'
        })
    }
})
</script>

<style scoped></style>
