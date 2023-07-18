module.exports = {
  extends: [
    '@antfu/eslint-config-vue',
    '@antfu/eslint-config-react',
  ],
  rules: {
    curly: ['error', 'multi-line'],
    'unicorn/prefer-includes': 'off',
  },
}
