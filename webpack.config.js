const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const packageName = require('./package.json').name;

const env = dotenv.config().parsed;
const envKeys = Object.keys(env || {}).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

function removeChar(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}
const externalPackages = [
  '@khanhnguyen234/micro-react-admin',
  '@khanhnguyen234/micro-react-components',
];
const srcScripts = [
  'https://khanhnguyen234-react-6htx7.s3.amazonaws.com/admin/remoteEntry.js',
  'https://khanhnguyen234-react-6htx7.s3.amazonaws.com/components/remoteEntry.js',
];

const remotes = externalPackages.reduce(function (remotes, package) {
  remotes[package] = removeChar(package);
  return remotes;
}, {});

module.exports = (env, options) => {
  const publicPath =
    options.mode === 'development'
      ? '/'
      : `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${process.env.S3_BUCKET_KEY}/`;

  return {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      // Fix issue: GET http://localhost:8080/admin/product/main.bundle.js net::ERR_ABORTED 404 (Not Found)
      // If access http://localhost:8080/admin/product/create
      publicPath,
    },
    module: {
      rules: [
        {
          test: /bootstrap\.tsx$/,
          loader: 'bundle-loader',
          options: {
            lazy: true,
          },
        },
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' }, // to inject the result into the DOM as a style block
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]_[hash:base64:5]',
                },
                sourceMap: true,
              },
            }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            }, // to convert SASS to CSS
            // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
          ],
        },
        {
          test: /\.icon\.svg$/,
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    },
    devtool: 'inline-source-map',
    plugins: [
      // https://github.com/webpack/webpack/issues/7172
      new webpack.SourceMapDevToolPlugin({
        filename: null,
        exclude: [/node_modules/],
        test: /\.ts($|\?)/i,
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        headScripts: srcScripts,
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed),
      }),
      new CleanWebpackPlugin(),
      // new WorkboxPlugin.GenerateSW({
      //   // these options encourage the ServiceWorkers to get in there fast
      //     // and not allow any straggling "old" SWs to hang around
      //     clientsClaim: true,
      //     skipWaiting: true,
      //   }),
      new ModuleFederationPlugin({
        name: packageName,
        library: { type: 'var', name: 'app2' },
        remotes: remotes,
        // shared: ["react", "react-dom"],
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
  };
};
