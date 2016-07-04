
module.exports = function (app) {

    app.error(function(err, req, res, next){
        if (err instanceof NotFound) {
            //res.render('404.ejs');
        } else {
            next(err);
        }
    });
};