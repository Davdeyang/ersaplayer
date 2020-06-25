const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: "./src/js/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ersaplayer.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true, //是否热更新
    port: 3000,//端口
    quiet: true, //隐藏打包信息 ，配合友好提示插件
    index: "index.html"
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: [
          "babel-loader"
        ]
      },
      {
        test: /\.ts?$|\.tsx?$/,
        loaders: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name]-robin.[ext]'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
        ]
      },
    ]
  }
}