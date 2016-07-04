var marked = require('marked');

var Prism = require('prismjs');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code, lang, callback) {
        code = Prism.highlight(code, Prism.languages.javascript);
        console.log(code);
        return code;
        //// 另外一个语法高亮的 pygmentize-bundled
        //require(pygmentize-bundled)({ lang: lang, format: 'html' }, code, function (err, result) {
        //    callback(err, result.toString());
        //});
    }
});

//var Prism = require('prismjs');
//document.addEventListener('DOMContentLoaded', Prism.fileHighlight);


module.exports = marked;