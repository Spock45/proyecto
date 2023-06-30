import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const currentDirectory = path.resolve();

export default {
  entry: './src/index.js',
  output: {
    path: path.join(currentDirectory, 'dist'),
    filename: 'bundle.js',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(currentDirectory, 'dist'),
    port: 3000,
    open: true,
  },
};
