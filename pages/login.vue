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
                <UFormGroup label="Username" required class="mb-6">
                    <UInput
                        type="text"
                        size="lg"
                        placeholder="Enter your username"
                        icon="material-symbols:account-circle-outline"
                    />
                </UFormGroup>
                <UFormGroup label="Password" required class="mb-6">
                    <UInput
                        size="lg"
                        type="password"
                        placeholder="Enter your password"
                        icon="material-symbols:lock-outline"
                    />
                </UFormGroup>
                <UButton
                    block
                    :loading="isLoading"
                    size="lg"
                    icon="material-symbols:login-rounded"
                    @click="handleLogin"
                    >Login</UButton
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const isLoading = ref(false)

const handleLogin = () => {
    isLoading.value = true
}
</script>

<style scoped></style>
