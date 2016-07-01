var mongodb = require('./db');

var mongoose = require('mongoose');

mongodb.on('error', console.error.bind(console, 'connection error:'));
//mongodb.once('open', function() {
//    console.log('we are connect');
//});

var blogSchma = mongoose.Schema({
    title: String,
    content: String,
    createDate: { type: Date, default: Date.now}
});
blogSchma.methods.saveBlog = function speak( callback) {
    var promise = this.save();
    console.log(this._id); // _id new 之后就有的,
    //callback();
        //打开数据库
        //mongodb.open(function (err, db) {
        //    if (err) {
        //        console.log(err);
        //        return callback(err);//错误，返回 err 信息
        //    }
        //    this.save();
        //    mongodb.close();
        //    // 读取 blogs 集合
        //    //db.collection('blogs', function (err, collection) {
        //    //    if (err) {
        //    //        mongodb.close();
        //    //        return callback(err);//错误，返回 err 信息
        //    //    }
        //    //    //将数据插入 blogs 集合
        //    //    collection.insert(blog, {
        //    //        safe: true
        //    //    }, function (err, blog) {
        //    //        mongodb.close();
        //    //        if (err) {
        //    //            return callback(err);//错误，返回 err 信息
        //    //        }
        //    //        callback(null, blog[0]);//成功！err 为 null，并返回存储后的用户文档
        //    //    });
        //    //});
        //});
    //return this.model('Blog').find();
};
var Blog = mongoose.model('Blog', blogSchma);
module.exports = Blog;

