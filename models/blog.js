var mongodb = require('./db');
var mongoose = require('mongoose');
var Promise = require("bluebird");
//var Mongoose = Promise.promisifyAll(mongoose);


mongodb.on('error', console.error.bind(console, 'connection error:'));
//mongodb.once('open', function() {
//    console.log('we are connect');
//});

var blogSchma = mongoose.Schema({
    title: String,
    content: String,
    createDate: { type: Date, default: Date.now}
});
blogSchma.methods.saveBlog = function ( resolveFn, rejectFn) {
    var self = this;
    self.save().then(function(){
        console.log(resolveFn);
        resolveFn && resolveFn(self._id);
    }, function (err) {
        console.log(err);
        rejectFn && rejectFn(err);
    });
};

blogSchma.methods.getBlogList = function (callback) {
    //var promise = this.find();
    //callback && callback();
    return this.model('Blog').find(callback);
};


var Blog = mongoose.model('Blog', blogSchma);
module.exports = Blog;

