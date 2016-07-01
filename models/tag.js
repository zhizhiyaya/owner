var mongodb = require('./db');
var mongoose = require('mongoose');

var tagSchma = mongoose.Schema({
    title: String,
    content: String,
    createDate: { type: Date, default: Date.now}
});

tagSchma.methods.saveBlog = function speak( callback) {

};
var Tag = mongoose.model('Tag', tagSchma);
module.exports = Tag;

