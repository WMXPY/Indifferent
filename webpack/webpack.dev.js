/**
 * @overview generated by ghoti-cli
 * @fileoverview webpack dev configs
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const APP_DIR = path.resolve(__dirname, '..', 'src');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public', 'template.html');

let config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        APP_DIR + "/index.tsx"
    ],
    output: {
        filename: "bundle.js",
        path: BUILD_DIR,
        publicPath: '/'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: './tsconfig.json'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'indifferent',
            template: PUBLIC_DIR
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 8080,
        inline: true,
        historyApiFallback: true
    }
};

module.exports = config;