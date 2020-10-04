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

const CONFIG_MODE = {
  development: {
    sourceMap: true,
    publicPath: '/',
    devtool: 'inline-source-map',
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: null,
        exclude: [/node_modules/],
        test: /\.ts($|\?)/i,
      }),
    ]
  },
  production: {
    sourceMap: false,
    publicPath: `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${process.env.S3_BUCKET_KEY}/`,
    plugins: [],
  }
}

module.exports = (env, options) => {
  const mode = options.mode;

  return {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].bundle.js',
      publicPath: CONFIG_MODE[mode].publicPath,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          react: {
            test: /[\/]node_modules[\/](react|react-dom|react-redux|redux)[\/]/,
            name: 'react',
            chunks: 'all',
            priority: 99,
          },
          component: {
            test: /[\/]node_modules[\/]@khanhnguyen234[\/]react-components[\/]/,
            name: 'khanhnguyen234-components',
            chunks: 'all',
            priority: 98,
          },
          'vendors-async': {
            reuseExistingChunk: true,
            chunks: 'async',
            priority: -10,
          },
          default: { priority: -30 },
        },
      },
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
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]_[hash:base64:5]',
                },
                sourceMap: CONFIG_MODE[mode].sourceMap,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: CONFIG_MODE[mode].sourceMap,
              },
            },
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
    devtool: CONFIG_MODE[mode].devtool,
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        headScripts: srcScripts,
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed),
      }),
      new CleanWebpackPlugin(),
      // new WorkboxPlugin.GenerateSW({
      //   clientsClaim: true,
      //   skipWaiting: true,
      // }),
      new ModuleFederationPlugin({
        name: packageName,
        library: { type: 'var', name: 'app2' },
        remotes: remotes,
        // shared: ["react", "react-dom"],
      }),
    ].concat(CONFIG_MODE[mode].plugins),
    devServer: {
      historyApiFallback: true,
    },
  };
};
