// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: false,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-trailing-spaces': 0,
    'arrow-parens': 0,
    'prefer-const': 0,
    'prefer-template': 0,
    'no-unused-vars': 0,
    'func-names': 0,
    'object-shorthand': 0,
    'no-mixed-operators': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'no-console': 0,
    'max-len': 0,
    'semi': 0,
    'space-before-blocks': 0,
    'quotes': 0,
    'comma-spacing': 0,
    'no-multiple-empty-lines': 0,
    'padded-blocks': 0,
    'eol-last': 0,
    'func-call-spacing': 0
  }
}
