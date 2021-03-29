const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',  // 模式
    devtool: 'source-map', // 。。。
    entry: './src/js/index.js', // 入口文件
    output: { // 出口设置
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: { // loader 配置
        rules: [
            {
                test: /\.css$/, // ./css结尾的文件处理loader
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/, // 图片格式处理loader
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/, // scss文件处理
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({ // 错误代码映射
            filename: '[name].js.map',
            exclude: 'main.js',
        }),
        new HtmlWebpackPlugin({ // html模板
            title: 'demo',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: { // 服务器开启，这里要在package.json里配另一个命令命令在第九行
        contentBase: __dirname + './dist',
        compress: true,
        port: 8080,

        proxy: { // api代理
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: { '^/api': '' }, // 去掉api中的/api
              },
        }


    },


}