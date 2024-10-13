<template>
    <UFormGroup label="Password" :required="required" class="mb-6">
        <UInput :name="name" size="lg" :type="type" :placeholder="placeholder" :icon="icon" />
    </UFormGroup>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped></style>
