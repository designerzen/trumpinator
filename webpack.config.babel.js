import path from 'path';
//import ResourceHintWebpackPlugin from 'resource-hints-webpack-plugin';
//import IndexHtmlPlugin from 'indexhtml-webpack-plugin';
//import AutoInjectPlugin from 'auto-inject-webpack-plugin';

const source = path.join(__dirname, 'src');
const output = path.join(__dirname, 'build');

export default
{
  //context: __dirname,

  entry: {
    'app': path.join( source, 'app.js'),
    //'index.html': path.join(__dirname, source, 'markup', 'index.html')
  },

  output: {
    path: output,
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
      /*
      // SMALL IMAGES
      {
        test: /\.(jpg|gif)$/,
        loader: "url-loader?limit=50&name=[path][name].[ext]"
      },
      {
        test: /\.png$/, loader: "url-loader?limit=50&name=[path][name].[ext]&mimetype=image/png"
      },
*/
      // BIG IMAGES
      {
        test: /\.(png|jpg|gif)$/, loader: "file-loader"
      },// STYLES
      {
        test: /\.css$/,
      //  exclude: /(node_modules|bower_components)/,
        loaders:[
          'style-loader',
          // ?modules&importLoaders=1
          'css-loader',
          'postcss-loader'
        ]
      }

    ]
  },

  plugins: [
    /*
    //new IndexHtmlPlugin('index.html', 'index.html')
    new AutoInjectPlugin({
      outputURI: output
    })*/
  ],

  extensions: [".js", ".json", ".jsx", ".css", ".html"],

  //target: "web",
  // Custom options
  //htmlLoader: {
    //ignoreCustomFragments: [/\{\{.*?}}/],
    //root: path.resolve(__dirname, 'assets'),
    //attrs: ['img:src', 'link:href']
  //},


  // What information should be printed to the console?
  /*
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
    }
    */
}
