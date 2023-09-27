const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: `${__dirname}/my-output`,
        clean: true
    },
    plugins: [new htmlWebpackPlugin()]
}