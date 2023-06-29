/* eslint-env browser */
/* eslint-disable no-undef */

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    quotes: ['error', 'single']
  }
};
