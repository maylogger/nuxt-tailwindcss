module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxtjs'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 'off'
  }
}
