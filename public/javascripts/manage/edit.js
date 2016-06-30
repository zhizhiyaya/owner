require('zepto');
var util = require('../common/util.js');

var ADD_BLOG_URL = '/manage/save';
bindEvent();

function bindEvent() {
    $('#js-saveBlog').on('click', function (e, data) {
        e.preventDefault();

        var formData = $('#js-editBlog').serialize();
        formData = util.formatFormData(formData);

        return $.ajax({
                url: ADD_BLOG_URL,
                type: 'POST',
                data: JSON.stringify(formData),
                contentType :"application/json;charset=UTF-8",
                success: function (res) {

                    console.log(JSON.stringify(res) + 'test');

                },
                fail: function () {

                }
            })
            //.done(function(){})

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
