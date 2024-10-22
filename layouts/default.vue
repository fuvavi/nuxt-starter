<template>
    <div class="scrollable">
        <TheHeader />
        <main
            class="main-container relative min-h-[calc(100vh-var(--header-height)-var(--footer-height))]"
        >
            <slot />
        </main>
        <TheFooter />
        <UNotifications :timeout="0" />
    </div>
</template>

<script setup lang="ts"></script>
