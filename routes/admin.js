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
        var blog = new Blog();

        blog.getBlogList(function(err, list){
            list.forEach(function(item, index) {
                item.title = decodeURIComponent(item.title);
                item.content = marked(decodeURIComponent(item.content));
            });
            res.render('list', {pageName: 'list', blogs: list});
        });
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

        var reqData = dataFilter.trimReqData(req.body);

        var newBlog = new Blog({
            title: reqData.title,
            content: reqData.content,
            tag: reqData.tag || null
        });

        // 新增
        newBlog.saveBlog(function (id) {
            //console.log(JSON.stringify(dataFilter.formatResData({'errMsg': '保存成功!'})));
            res.send(dataFilter.formatResData({'errMsg': '保存成功!'}));
        }, function (err) {
            res.send(dataFilter.DBErrData);
        });
    });
};


