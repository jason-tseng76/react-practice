module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb',
  ],
  // settings: {
  //   // 使用在.babelrc設定的alias
  //   'import/resolver': {
  //     'babel-module': {
  //       alias: {
  //         '~': './src',
  //         // '~root': './',
  //         // '~server': './server',
  //       },
  //     },
  //   },
  // },
  // plugins: ['react','jsx-a11y','import'],
  rules: {
    'no-new': 0,
    'no-underscore-dangle':0,
    'camelcase': 0,
    'no-unused-vars': 'warn',
    'max-len': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    '$':true,
  },
};
