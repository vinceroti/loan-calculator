module.exports = {
  root: true,
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['simple-import-sort'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:prettier-vue/recommended',
    'plugin:vuejs-accessibility/recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'object-curly-newline': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'vue/no-v-html': 0,
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/v-on-function-call': 'error',
    'operator-linebreak': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        components: ['VLabel'],
        controlComponents: ['VInput'],
        required: {
          some: ['id', 'nesting'],
        },
        allowChildren: false,
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    },
  ],
};
