const {merge} = require('webpack-merge');

const htmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    mode: 'development',
    entry: './src/index.tsx',
    devServer: {
        static: './my-output',
        port: 9999,
        open: true
    },
    output: {
        filename: '[name].bundle.tsx',
        path: `${__dirname}/my-output`,
        clean: true
    },
    plugins: [new htmlWebpackPlugin()]
})