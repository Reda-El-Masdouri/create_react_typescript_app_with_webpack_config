const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './my-output',
        port: 9999,
        open: true
    },
    output: {
        filename: '[name].bundle.js',
        path: `${__dirname}/my-output`,
        clean: true
    },
    plugins: [new htmlWebpackPlugin()]
}