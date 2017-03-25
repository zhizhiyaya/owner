require('zepto');
var util = require('../common/util.js');

var ADD_BLOG_URL = '/manage/save';
bindEvent();

function bindEvent() {
    $('#js-saveBlog').on('click', function (e, data) {
        e.preventDefault();

        var formData = $('#js-editBlog').serialize();
        formData = util.formatFormData(formData);

        $.ajax({
                url: ADD_BLOG_URL,
                type: 'POST',
                data: JSON.stringify(formData),
                contentType :"application/json;charset=UTF-8"
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

    });

    //$( "#js-editBlog" ).on( "submit", function( event ) {
    //    event.preventDefault();
    //    debugger
    //    console.log( $( this ).serialize() );
    //});
}
function saveBlog() {


}

//module.exports = "test";


//define(function(require){
//    (function() {
//
//        $('#js-saveBlog').on('tap', function (e, data) {
//            e.preventDefault();
//
//            $('#js-blogForm').serialize();
//            debugger
//
//        });
//        function saveBlog() {
//
//
//        }
//
//    })();
//});
//
