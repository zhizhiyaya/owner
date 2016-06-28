//var express = require('express');
//var app = express();
//var router = express.Router();
var Blog = require('../models/blog.js');

module.exports = function (app) {

    app.post('/admin/login', function (req, res, next) {
        console.log(req.body);
        res.send();
    });

    // edit 编辑页面
    app.get('/admin/edit', function (req, res, next) {
        res.render('edit', {'pageName': 'edit'});
    });

    // 保存编辑的 blog 内容
    app.post('/admin/save', function (req, res, next) {
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
        //        return res.redirect('/');//保存失败返回
        //    }
        //
        //    req.flash('success', '保存成功!');
        //    res.redirect('/');//保存成功后返回主页
        //});
    });
};