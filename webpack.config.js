/**
 * Created by Toulon on 2017/2/16.
 *
 * Author information:
 * Email:420615326@qq.com
 * file information: configuration of webpack
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'//添加对样式表的处理
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'//添加对样式表的处理
            }
        ]
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:autoprefixer
            }
        })
    ],
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}