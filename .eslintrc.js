module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:ember-suave/recommended'],
  env: {
    browser: true
  },
  plugins: ['ember', 'babel', 'promise'],
  rules: {
    indent: ['error', 2],
    strict: 0,
    'babel/arrow-parens': 1,
    'no-fallthrough': 0,
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn'
  },
  overrides: [
    // node files
    {
      files: ['index.js', 'testem.js', 'ember-cli-build.js', 'config/**/*.js', 'tests/dummy/config/**/*.js'],
      excludedFiles: ['app/**', 'addon/**'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true
      }
    }
  ]
};
