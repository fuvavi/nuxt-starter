<template>
    <div class="scrollable">
        <TheHeader />
        <main class="main-container min-h-[calc(100vh-var(--header-height))] relative">
            <slot />
        </main>
        <TheFooter />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-container {
    min-height: 2000px;
}
</style>

