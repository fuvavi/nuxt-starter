<template>
    <Form>
        <ErrorMessage name="password" />
        <UFormGroup required label="Username" name="username" class="mb-6">
            <Field
                v-slot="{ handleChange, handleBlur }"
                class="border-primary-50 border-1 border border-solid bg-gray-50"
                name="password"
                type="password"
                :rules="passwordRules"
            >
                <UInput
                    size="lg"
                    placeholder="Enter your username"
                    icon="material-symbols:account-circle-outline"
                    @change="handleChange"
                    @blur="handleBlur"
                />
            </Field>
        </UFormGroup>
    </Form>
</template>
<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
const passwordRules = yup.string().required().min(8)
</script>
