require('zepto');
var util = require('../common/util.js');

var GET_BLOGS_URL = '/manage/list';

var marked = require('../common/marked.js');


getBlogLists();
//
function getBlogLists() {

    $.ajax({
            url: GET_BLOGS_URL,
            type: 'GET',
            data: {'test': 'test'}
        })
        .done(function(res){
            if (res.status === 0) {
                alert(res.errMsg);
            } else {
                alert(res.errMsg);
            }
        })
        .fail(function (err) {
            debugger
        });
}


