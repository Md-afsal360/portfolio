const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,        // This rule applies to .css files
        use: [
          'style-loader',      // Injects CSS into the DOM
          'css-loader',        // Interprets @import and url() like import/require()
          'postcss-loader',    // Processes CSS with PostCSS
        ],
      },
    ],
  },
};
