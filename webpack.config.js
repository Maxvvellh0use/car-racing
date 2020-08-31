const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.json$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader'],
            },
        ),
      },
      // img loader
      {
        test: /\.(svg|png|jpe?g|json|)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '../img/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(
        {
          filename: 'src/sass/style.css', disable: false, allChunks: true,
        },
    ),
    new CopyPlugin([
      { from: 'src/assets/audio', to: 'src/audio' },
      { from: 'src/assets/img/icons', to: 'src/img' },
      { from: 'src/assets/img', to: 'src/img' },
    ]),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8090,
  },
};
