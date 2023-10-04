const {merge} = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackConfig, {
    mode: 'production',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [new htmlWebpackPlugin()]
})