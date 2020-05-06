const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'

module.exports = {
  presets: [['@babel/preset-env', { modules: isTest ? 'commonjs' : false }], '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime'],
  ],
}
