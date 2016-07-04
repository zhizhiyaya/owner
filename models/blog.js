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
blogSchma.methods.saveBlog = function ( callback) {
    var promise = this.save();
    console.log(this._id); // _id new 之后就有的,
};

blogSchma.methods.getBlogList = function (callback) {
    //var promise = this.find();
    //callback && callback();
    return this.model('Blog').find(callback);
};


var Blog = mongoose.model('Blog', blogSchma);
module.exports = Blog;

