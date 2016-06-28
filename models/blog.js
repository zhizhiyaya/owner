var mongodb = require('./db');

function Blog(blog) {
    this.title = blog.title;  // 标题
    this.content = blog.content; // 内容
    this.tag = blog.tag; // 所属标签, 目前只有一维,并且只能属于一个
    this.id = new Date().getTime(); //使用创建时间作为唯一标识 id,
                                    //创建时 修改时间 = id
};

module.exports = Blog;

Blog.prototype = {
    construct: Blog,
    save: function(callback) {
        //要存入数据库的文档
        var blog = {
            id: this.id,
            title: this.title,
            content: this.content,
            tag: this.tag,
            modTime: this.id
        };

        mongodb.on('error', console.error.bind(console, 'connection error:'));

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
    },
    editBlog: function () {

    },
    getOneBlog: function(id, callback) {
        //打开数据库
        mongodb.open(function (err, db) {
            if (err) {
                return callback(err);//错误，返回 err 信息
            }
            //读取 blogs 集合
            db.collection('blogs', function (err, collection) {

            });
        });
    },
    getBlogLists: function (ids, callback) {

    }
};
