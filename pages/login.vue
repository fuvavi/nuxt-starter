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
                <Form :validation-schema="loginSchema" @submit="onSubmit">
                    <UFormGroup required label="Username" class="mb-6">
                        <Field v-slot="{ handleChange, handleBlur }" name="username" type="text">
                            <UInput
                                type="text"
                                size="lg"
                                placeholder="Enter your username"
                                icon="material-symbols:account-circle-outline"
                                @change="handleChange"
                                @blur="handleBlur"
                            />
                        </Field>
                        <ErrorMessage
                            class="mt-2 text-sm text-red-500 dark:text-red-400"
                            name="username"
                        />
                    </UFormGroup>
                    <UFormGroup required label="Password" name="password" class="mb-6">
                        <Field v-slot="{ handleChange, handleBlur }" name="password" type="text">
                            <UInput
                                size="lg"
                                type="password"
                                placeholder="Enter your password"
                                icon="material-symbols:lock-outline"
                                @change="handleChange"
                                @blur="handleBlur"
                            />
                        </Field>
                        <ErrorMessage
                            class="mt-2 text-sm text-red-500 dark:text-red-400"
                            name="password"
                        />
                    </UFormGroup>
                    <UButton
                        type="submit"
                        block
                        :loading="isLoading"
                        size="lg"
                        icon="material-symbols:login-rounded"
                        >Login</UButton
                    >
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate'
import { loginSchema } from '~/utils/validation/user.schema'

const { defineField, handleSubmit } = useForm({
    validationSchema: loginSchema,
    initialValues: {
        username: 'fuvavi'
    }
})

const username = defineField('username')
const password = defineField('password')

const isLoading = ref(false)

const onSubmit = handleSubmit((values) => {
    console.log('Submitted with', values)
})
</script>

<style scoped></style>
