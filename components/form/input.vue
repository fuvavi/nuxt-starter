<template>
    <UFormGroup :label="label" :required="required" :error="error">
        <UInput
            v-model="model"
            :input-class="inputClass"
            :name="name"
            :size="size"
            :type="type"
            :placeholder="placeholder"
            :icon="icon"
        />
    </UFormGroup>
</template>

<script setup lang="ts">
import type { InputSize } from '#ui/types'

defineProps({
    name: {
        type: String,
        default: ''
    },
    label: {
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
    },
    error: {
        type: String || Boolean || undefined,
        default: ''
    },
    size: {
        type: String as PropType<InputSize>,
        default: 'lg'
    },
    inputClass: {
        type: String,
        default: ''
    }
})

const model = defineModel({ default: '', required: true, type: String })
</script>

<style scoped></style>
