<template>
    <footer class="pb-6">
        <div class="text-center">Copyright by Fuvavi</div>
        <div class="flex justify-center">
            <ul class="flex gap-2">
                <li>
                    <NuxtLink
                        to="about"
                        class="text-black-100 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >About</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        to="services"
                        class="text-black-100 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >Services</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        to="contact"
                        class="text-black-100 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                        >Contact</NuxtLink
                    >
                </li>
            </ul>
        </div>
        <UButton
            @click="backToTop"
            icon="mi:chevron-up"
            size="sm"
            color="primary"
            :ui="{ rounded: 'rounded-full' }"
            variant="solid"
            class="fixed bottom-4 right-4"
        />
    </footer>
</template>

<script setup lang="ts">
const backToTop = () => {
    window.scrollTo(0, 0)
}
</script>

<style scoped></style>
