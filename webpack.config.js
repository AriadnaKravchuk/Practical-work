const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require("autoprefixer");


module.exports = {
    mode: 'production',
    entry: { 
        main: path.resolve(__dirname, './src/index.js'), 

    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: '[name].bundle.js',
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        hot: false,
        liveReload: true,
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "file-loader",
                        options: { outputPath: "assets/css/", name: "[name].css" },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer(),
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            }
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "./src/assets/images", to: "assets/images" },
                { from: './src/assets/videos', to: 'assets/videos' },
            ],
        }), 
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
        }),
        ...fs.readdirSync(path.resolve(__dirname, './src/pages')).map((file) => {
            const filename = file.split('.').slice(0, -1).join('.');
            return new HtmlWebpackPlugin({
                template: path.resolve(__dirname, `./src/pages/${file}`),
                filename: `${filename}.html`,
            });
        }),
    ], 
} 