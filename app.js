/**
 * Module dependencies.
 * 模块依赖
 */

var express = require('express');
var routes = require('./routes');
var admin = require('./routes/admin.js');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');
var settings = require('./settings');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var app = express();

// all environments
//环境变量
app.set('port', process.env.PORT || 3000);//设置端口为 process.env.PORT 或 3000。
app.set('views', path.join(__dirname, 'views'));//模板文件的路径
app.set('view engine', 'ejs');//使用的模板引擎为ejs
app.use(flash());
app.use(express.favicon());//地址栏的图标
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));// 设置了静态文件目录为 public 文件夹
app.use(express.static(path.join(__dirname, 'assets')));// 设置了静态文件目录为 public 文件夹
app.use(bodyParser.urlencoded({
  extended: true
}));

//app.use(admin);
// development only
//开发模式
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//路径解析
routes(app);
admin(app);

//启动及端口
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
