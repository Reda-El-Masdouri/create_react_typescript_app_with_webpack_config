module.exports = {
    entry: {
        index: {
            import: './src/index.js',
            filename: 'my-cool-file.js'
        },
        index2: './src/index2.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: `${__dirname}/my-output`,
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}