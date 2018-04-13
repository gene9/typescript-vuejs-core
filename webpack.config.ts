var webpack = require('webpack');
var path = require('path');

// variables
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');
var root = path.resolve(__dirname, '.')

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: sourcePath,
    entry: {
        main: './main.ts'
    },
    output: {
        path: outPath,
        filename: '[name].bundle.js'
    },
    target: 'web',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json'],
        mainFields: ['module', 'browser', 'main']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }]
            },
            { test: /\.html$/, use: 'html-loader' }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './assets/index.html'
        }),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    node: {
        // workaround for webpack-dev-server issue 
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    }
};
