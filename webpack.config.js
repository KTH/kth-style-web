// @ts-check

const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const BabelConfig = require('./.babelrc.json')
// const { babel: BabelConfig } = require('./package.json')

process.env.NODE_ENV = 'development'
const { uri: PROXY_PREFIX_URI } = require('./config/commonSettings').proxyPrefixPath
// const PROXY_PREFIX_URI = '/utbildning/hitta'

const Global = {
  _envIsDev: ['dev', 'development'].includes(process.env.WEBPACK_ENV),
  _watchIsOn: ['watch'].includes(process.env.WEBPACK_MODE),
}

function getTransformationRules({ contextIsNode }) {
  const ALLOW_MIX_OF_CJS_AND_ESM_IMPORTS = { sourceType: 'unambiguous' }

  return {
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    target: contextIsNode ? 'node' : 'browserslist:> 0.25%, not dead',
    // target: contextIsNode ? 'node' : 'web',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { ...BabelConfig, ...ALLOW_MIX_OF_CJS_AND_ESM_IMPORTS },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: Global._envIsDev
                  ? `http://localhost:3000${PROXY_PREFIX_URI}/static/`
                  : `${PROXY_PREFIX_URI}/static/`,
                name: '[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
  }
}

function getOutputOptions({ contextIsNode }) {
  const OUTPUT_LICENSE_FILES = false

  // There are many different types of source-maps in Webpack
  // (see https://webpack.js.org/configuration/devtool)

  // Tested settings:

  // const DEV_SOURCE_MAP_TYPE = 'eval'
  // - comes w/o *.map files and still small bundle (app.js has 2.6 MB)
  // - code view with many Webpack annotations when debugging in browser
  // - first build-dev (i.e. with empty cache) took 17 seconds

  // const DEV_SOURCE_MAP_TYPE = 'eval-cheap-module-source-map'
  // - comes w/o *.map files, has bigger bundles instead (app.js has 6.0 MB)
  // - code view with many Webpack annotations when debugging in browser
  // - first build-dev (i.e. with empty cache) took 13 seconds

  const DEV_SOURCE_MAP_TYPE = 'source-map'
  // - comes with *.map files (app.js has 2.5 MB)
  // - full code view when debugging in browser
  // - first build-dev (i.e. with empty cache) took 18 seconds

  // const DEV_SOURCE_MAP_TYPE = 'inline-source-map'
  // - comes w/o *.map files, has bigger bundles instead (app.js has 6.1 MB)
  // - full code view when debugging in browser
  // - first build-dev (i.e. with empty cache) took 22 seconds

  return {
    optimization: Global._envIsDev
      ? undefined
      : {
          minimizer: [new TerserPlugin({ extractComments: OUTPUT_LICENSE_FILES })],
        },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: Global._envIsDev ? `http://localhost:3000${PROXY_PREFIX_URI}/` : `${PROXY_PREFIX_URI}/`,
      libraryTarget: contextIsNode ? 'umd' : undefined,
    },
    devtool: Global._envIsDev ? DEV_SOURCE_MAP_TYPE : undefined,
  }
}

function getWatchOptions() {
  return Global._watchIsOn
    ? {
        watch: true,
        watchOptions: {
          aggregateTimeout: 3000,
          ignored: /\bnode_modules\b/,
        },
      }
    : {
        watch: false,
      }
}

function getConsoleLogOptions({ contextIsNode }) {
  return {
    performance: {
      hints: Global._envIsDev || contextIsNode ? false : 'warning',
    },
    stats: {
      all: false,
      colors: true,

      errors: true,
      errorDetails: 'auto',
      warnings: true,

      publicPath: !Global._watchIsOn,
      assets: !Global._watchIsOn,

      builtAt: true,
      version: true,
      timings: true,
    },
  }
}

function getCacheOptions({ contextIsNode }) {
  const IGNORE_CACHE_ON_CHANGED_WEBPACK_CONFIG = { config: [__filename] }

  return Global._envIsDev
    ? {
        cache: {
          name: contextIsNode ? 'server' : 'client',
          type: 'filesystem',
          buildDependencies: { ...IGNORE_CACHE_ON_CHANGED_WEBPACK_CONFIG },
        },
      }
    : null
}

module.exports = [
  {
    entry: {
      'ssr-app': './public/js/app/ssr-app.js',
    },

    mode: Global._envIsDev ? 'development' : 'production',
    ...getTransformationRules({ contextIsNode: true }),
    ...getOutputOptions({ contextIsNode: true }),

    ...getWatchOptions(),
    ...getConsoleLogOptions({ contextIsNode: true }),
    ...getCacheOptions({ contextIsNode: true }),
  },
  {
    entry: {
      vendor: './public/js/vendor.js',
      app: './public/js/app/app.jsx',
    },

    mode: Global._envIsDev ? 'development' : 'production',
    ...getTransformationRules({ contextIsNode: false }),
    ...getOutputOptions({ contextIsNode: false }),

    ...getWatchOptions(),
    ...getConsoleLogOptions({ contextIsNode: false }),
    ...getCacheOptions({ contextIsNode: false }),
  },
]
