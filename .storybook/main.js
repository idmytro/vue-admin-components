// const WindiCSSWebpackPlugin = require('windicss-webpack-plugin/dist').default;

module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
    // "../stories/**/*.stories.mdx",
    // "../stories/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // webpackFinal: (config) => {
  //   config.plugins.push(
  //     new WindiCSSWebpackPlugin(
  //       {
  //         scan: {
  //           dirs: ['./src'],
  //           exclude: ['node_modules', '.git', 'public/**/*'],
  //         },
  //       }
  //     )
  //   )

  //   return config;
  // },
}
