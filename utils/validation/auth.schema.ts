import * as Yup from 'yup'
import type { ComposerTranslation } from 'vue-i18n'
import { MAX_LENGTH, MIN_LENGTH } from '~/constants/validations'

export const loginSchema = (t: ComposerTranslation) => {
    return Yup.object({
        username: Yup.string()
            .required(t('validation.error.required', { field: t('form.username.label') }))
            .min(
                MIN_LENGTH.USERNAME,
                t('validation.error.between', {
                    field: t('form.username.label'),
                    min: MIN_LENGTH.USERNAME,
                    max: MAX_LENGTH.USERNAME
                })
            )
            .max(
                MAX_LENGTH.USERNAME,
                t('validation.error.between', {
                    field: t('form.username.label'),
                    min: MIN_LENGTH.USERNAME,
                    max: MAX_LENGTH.USERNAME
                })
            )
            .trim(),
        password: Yup.string()
            .required(t('validation.error.required', { field: t('form.password.label') }))
            .min(
                MIN_LENGTH.PASSWORD,
                t('validation.error.minLength', {
                    field: t('form.password.label'),
                    min: MIN_LENGTH.PASSWORD
                })
            )
            .max(
                MAX_LENGTH.PASSWORD,
                t('validation.error.maxLength', {
                    field: t('form.password.label'),
                    max: MAX_LENGTH.PASSWORD
                })
            )
    })
}
