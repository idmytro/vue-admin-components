
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin/dist').default;

module.exports = {
  configureWebpack: (config) => {
    // config.module.rules.push({
    //   test: /\.vue$/,
    //   use: [{
    //     loader: 'vue-windicss-preprocess',
    //     options: {
    //       config: 'windi.config.js', // tailwind config file path (optional)
    //       compile: false, // false: interpretation mode; true: compilation mode
    //       globalPreflight: true, // set preflight style is global or scoped
    //       globalUtility: true, // set utility style is global or scoped
    //       // prefix: 'windi-', // set compilation mode style prefix
    //     },
    //   }],
    // });
    config.plugins.push(
      new WindiCSSWebpackPlugin(
        {
          scan: {
            dirs: ['./src'],
            exclude: ['node_modules', '.git', 'public/**/*'],
          },
        },
      ),
    );
  },
};
