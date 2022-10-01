module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['testing-library'],
  rules: {
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
  },
};
