<template>
    <div>
        <TheHeader />
        <main class="main-container mt-16">
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
