const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "widget.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|svg|woff(2)?|ttf|eot)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'img',
                            outputPath: 'img',
                            name: '[name].[ext]',
                        },
                    },
                ],
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                parse: {},
                compress: {},
                mangle: true,
                output: {
                    comments: false,
                },
                toplevel: false,
                nameCache: null,
                ie8: true,
                keep_fnames: false,
            },
        })],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};