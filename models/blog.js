var mongodb = require('./db');
var mongoose = require('mongoose');
//mongodb.on('error', console.error.bind(console, 'connection error:'));
mongodb.on('error', console.error.bind(console, 'connection error:'));
mongodb.once('open', function() {
    console.log('we are connect');
});

var blogSchma = mongoose.Schema({
    title: String,
    content: String,
    createDate: { type: Date, default: Date.now},
    methods: {
        save: function (blog) {
            //要存入数据库的文档
            var blog = {
                id: blog.id,
                title: blog.title,
                content: blog.content,
                tag: blog.tag,
                modTime: blog.id
            };

            mongodb.on('error', console.error.bind(console, 'connection error:'));
            mongodb.close();

            //打开数据库
            mongodb.open(function (err, db) {
                if (err) {
                    return callback(err);//错误，返回 err 信息
                }
                //读取 blogs 集合
                db.collection('blogs', function (err, collection) {
                    if (err) {
                        mongodb.close();
                        return callback(err);//错误，返回 err 信息
                    }
                    //将数据插入 blogs 集合
                    collection.insert(blog, {
                        safe: true
                    }, function (err, blog) {
                        mongodb.close();
                        if (err) {
                            return callback(err);//错误，返回 err 信息
                        }
                        callback(null, blog[0]);//成功！err 为 null，并返回存储后的用户文档
                    });
                });
            });
        }
    }

});
//blogSchma.methods.speak = function speak(cb) {
//
//    return this.model('Blog').find();
//};
var Blog = mongoose.model('Blog', blogSchma);
module.exports = Blog;
//
//var kitty = new Blog({ name: 'kitty', content: 'jerry'});
//
//var aa = kitty.speak('success');
//console.log(aa)
// 调用 .save 方法后，mongoose 会去你的 mongodb 中的 test 数据库里，存入一条记录。
//kitty.save(function (err) {
//    if (err) // ...
//        console.log('meow');
//    else
//        console.log('save suc');
//});

//function Blog(blog) {
//    this.title = blog.title;  // 标题
//    this.content = blog.content; // 内容
//    this.tag = blog.tag; // 所属标签, 目前只有一维,并且只能属于一个
//    this.id = new Date().getTime(); //使用创建时间作为唯一标识 id,
//                                    //创建时 修改时间 = id
//};
