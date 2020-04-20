module.exports = {
  // plugins: [
  //   ['module-resolver', {
  //     alias: {
  //       '~': './src',
  //     },
  //   }],
  //   'console-source',
  // ],
  presets: ['@babel/env', '@babel/preset-react'],
  env: {
    production: {
      // plugins: ['transform-remove-console'],
    },
  },
};
