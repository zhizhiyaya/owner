var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myblog');
module.exports = mongoose.connection;
