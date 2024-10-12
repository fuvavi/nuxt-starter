<template>
    <footer class="py-4">
        <div class="text-center">{{ $t('footer.copyright') }}</div>
        <UButton
            @click="backToTop"
            icon="mi:chevron-up"
            size="sm"
            color="primary"
            :ui="{ rounded: 'rounded-full' }"
            variant="solid"
            class="fixed bottom-4 right-4 z-10"
        />
    </footer>
</template>

<script setup lang="ts">
const backToTop = () => {
    window.scrollTo(0, 0)
}
</script>

<style scoped></style>

