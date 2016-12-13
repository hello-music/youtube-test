import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;

const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMAND;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body',
});

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin();
const cleanPlugin = new CleanWebpackPlugin(['dist']);

const base = {
  entry: [
    PATHS.app,
  ],
  output: {
    publicPath: '/',
    path: PATHS.build,
    filename: 'index-bundle-[hash].js',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.jsx$/, exclude: [/node_modules/], loader: 'babel-loader'},
      {test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: 'file'},
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass?sourceMap',
        ],
      },
    ],
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js', '.jsx'],
  },
};

const developmentConfig = {
  devtool: 'eval',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
};

const productionConfig = {
  devtool: 'source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin, uglifyPlugin, cleanPlugin],
};

export default Object.assign(
  {}, base, isProduction === true ? productionConfig : developmentConfig
);

