<template>
    <div class="scrollable">
        <TheHeader />
        <main
            class="main-container min-h-[calc(100vh-var(--header-height)-var(--footer-height))] relative"
        >
            <slot />
        </main>
        <TheFooter />
    </div>
</template>

<script setup lang="ts"></script>
