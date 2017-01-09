import path from 'path';

const source = "src";

export default
{
  //context: __dirname,

  entry: {
    app: path.join(__dirname, source, 'app')
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      // Scripts : ES6 / ES5 etc etc
      {
        test : /\.js?$/,
        exclude: /node_modules/,
        loader : 'babel'
      },
      // Markup : You can chain other templates beyond this
      {
        test: /\.html$/,
        loaders: [
          //"file-loader?name="+folderOutput+"[name].[ext]",
          "file-loader?name=[name].[ext]",
          "extract-loader",
          // ?minimize=true
          "html-loader"
        ]
      },
      // IMAGES
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=5000&name=[path][name].[ext]"
      },
      {
        test: /\.jpg$/, loader: "file-loader"
      },
      {
        test: /\.png$/, loader: "url-loader?mimetype=image/png"
      },
      // STYLES
      {
        test: /\.css$/,
      //  exclude: /(node_modules|bower_components)/,
        loaders:[
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader'
        ]
      }

    ]
  },
  extensions: [".js", ".json", ".jsx", ".css", ".html"]
  /*
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".html"]
  },
  //target: "web",
  // Custom options
  //htmlLoader: {
    //ignoreCustomFragments: [/\{\{.*?}}/],
    //root: path.resolve(__dirname, 'assets'),
    //attrs: ['img:src', 'link:href']
  //},
  // What information should be printed to the console?
   stats: {
       colors: true,
       reasons: true,
       hash: true,
       version: true,
       timings: true,
       chunks: true,
       chunkModules: true,
       cached: true,
       cachedAssets: true
    }*/
}
