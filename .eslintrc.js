module.exports = {
  extends: '@vue-admin-ui',
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
  },
};
