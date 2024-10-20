<template>
    <UFormGroup :label="label" :required="required" :error="error">
        <UInput
            v-model="model"
            :type="isShowPassword ? 'text' : 'password'"
            :input-class="inputClass"
            :name="name"
            :size="size"
            :placeholder="placeholder"
            :icon="icon"
            :ui="{ icon: { trailing: { pointer: '' } } }"
        >
            <template #trailing>
                <UButton
                    color="gray"
                    variant="link"
                    :padded="false"
                    @click="isShowPassword = !isShowPassword"
                >
                    <Icon size="20" :name="`iconamoon:eye${isShowPassword ? '-off' : ''}`" />
                </UButton>
            </template>
        </UInput>
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
const isShowPassword = ref(false)
</script>

<style scoped></style>
