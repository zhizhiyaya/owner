var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('/public/stylesheets/[name].css',{allChunks: true});
var extractLESS = new ExtractTextPlugin('/public/stylesheets/[name].less',{allChunks: true});

console.log(path.resolve('./node_modules'));

module.exports = {
    //context: path,
    //插件项
    plugins: [extractCSS, extractLESS],

    //页面入口文件配置
    entry: {
        manageIndex: './public/javascripts/manage/index.js',
        manageEdit: './public/javascripts/manage/edit.js',
        login: './public/javascripts/manage/login.js',
        list: './public/javascripts/manage/list.js'
    },

    //入口文件输出配置
    output: {
        path: './assets/scripts/',
        //publicPath: "/assets/scripts/",
        filename: '[name].js'
    },

    //module: {
    //    //加载器配置
    //    loaders: [
    //        {test: /\.css$/, loader: extractCSS.extract("style-loader", "css-loader")},
    //        {test: /\.scss$/i, loader: extractCSS.extract(['css', 'sass'])},
    //        {test: /\.less$/i, loader: extractLESS.extract(['css', 'less'])},
    //        {
    //            test: /\.js$/,
    //            loader: 'jsx-loader?harmony'
    //        }
    //        //        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    //    ]
    //},
    //其它解决方案配置
    //resolve: {
    //    //root: 'E:/github/flux-example/src', //绝对路径
    //    //root: path.resolve('./node_modules'),
    //    //modulesDirectories: ['node_modules'],
    //    extensions: ['', '.js', '.json', '.scss'],
    //    //alias: {
    //    //    'zepto': path.resolve('./node_modules') + '/zepto/zepto.min.js'
    //    //}
    //},
    watch: true
};
