<template>
    <Html>
        <Body>
            <NuxtLayout name="default">
                <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
                <NuxtPage />
            </NuxtLayout>
        </Body>
    </Html>
</template>
<script setup lang="ts"></script>
