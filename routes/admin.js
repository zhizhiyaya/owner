//var express = require('express');
//var app = express();
//var router = express.Router();
var Blog = require('../models/blog.js');
var marked = require('../public/javascripts/common/marked.js');

var dataFilter = require('../middleware/dataFilter.js');

module.exports = function (app) {

    app.get('/manage/login', function (req, res, next) {
        res.render('login', {'pageName': 'login'});
    });

    app.get('/manage/list', function (req, res, next) {
        //cookie 校验
        res.render('list', {pageName: 'list', blogs: []});
    });
    app.post('/manage/list', function () {
        // 木有分页呢 ...
        var blog = new Blog();

        blog.getBlogList(function(err, list){

            if (err) {
                res.send(dataFilter.DBErrData);
            }

            res.send(dataFilter.formatResData(list));
        });
    });

    // edit 编辑页面
    app.get('/manage/edit', function (req, res, next) {
        res.render('edit', {'pageName': 'manageEdit'});
    });

    // 保存编辑的 blog 内容
    app.post('/manage/save', function (req, res, next) {

        var reqData = dataFilter.trim(req);

        var newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
            tag: req.body.tag || null
        });

        // 新增
        newBlog.saveBlog(function (err, user) {
            if (err) {
                res.send(dataFilter.DBErrData);
            }
            //req.flash('success', '保存成功!');
            res.send({status: 0, msg: '保存成功!'});
        });
    });
};