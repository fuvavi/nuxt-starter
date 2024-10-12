import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    files: ['**/*.ts', '**/*.tsx', '**/*.vue', '**/*.js', '**/*.scss', '**/*.css'],
    rules: {
        'no-console': 'off',
        'vue/html-self-closing': 'off'
    }
})

