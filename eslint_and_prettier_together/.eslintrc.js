const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ON: 'error',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.OFF,
  },
}
