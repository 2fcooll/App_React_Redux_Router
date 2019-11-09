const path = require('path');

module.exports = {
    output: {
      path: path.resolve(__dirname, 'public/dist'),
      filename: 'main.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    }
};
