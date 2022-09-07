const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        index: './js/index.js',
        login: './js/login.js',
        random: './js/random.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_module.js',
        clean: true
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['main']
        }),
        new HtmlPlugin({
            filename: 'login.html',
            template: './src/login.html',
            chunks: ['loginEntry']
        }),
        new HtmlPlugin({
            filename: 'random.html',
            template: './src/random.html',
            chunks: ['randomEntry']
        }),
        new CopyPlugin({
            patterns: [
                {from: 'static'}
            ]
        })  
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
        ]
    }
}