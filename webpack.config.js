
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { VueLoaderPlugin } = require('vue-loader')
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        // 配置loader的选项
                        options: { url: false }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                type: 'asset',
                generator: {
                    filename: 'images/[name]-[hash:6][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 18 * 1024
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]-[hash:10][ext]'
                }
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './src/styles/index.css'
        }),
        new HtmlWebpackPlugin({
            template: "./index/index.html",
          }),
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    // 
    devServer: {
        open: true,
        port: 8888
    }
}