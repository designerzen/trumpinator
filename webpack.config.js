var path = require('path');

module.exports =
{
  context: __dirname,
  entry: {
    script: path.join(__dirname, 'src/app.js'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders:[
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".html"]
  },
  target: "web"
}
