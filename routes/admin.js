//var express = require('express');
//var app = express();
//var router = express.Router();
var Blog = require('../models/blog.js');

module.exports = function (app) {

    app.get('/manage/login', function (req, res, next) {
        res.render('login', {'pageName': 'login'});
    });

    // edit 编辑页面
    app.get('/manage/edit', function (req, res, next) {
        res.render('edit', {'pageName': 'manageEdit'});
    });

    // test
    //app.get('/manage/save', function (req, res, next) {
    //    console.log(req.body + 'a');
    //    res.send({'status': 0});
    //});

    // 保存编辑的 blog 内容
    app.post('/manage/save', function (req, res, next) {
        console.log(req.body);
        //var newBlog = new Blog({
        //    title: req.body.title,
        //    content: req.body.content,
        //    tag: req.body.tag || null
        //});
        //
        //// 新增
        //newBlog.save(function (err, user) {
        //    if (err) {
        //        req.flash('error', err);
        //        res.send();
        //        return res.redirect('/');//保存失败返回
        //    }
        //
        //    req.flash('success', '保存成功!');
        //    res.redirect('/');//保存成功后返回主页
        //});
        res.send({'status': 0})
    });
};