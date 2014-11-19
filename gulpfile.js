/*!!
 * 
 * gulpfile.js
 * @author: Jan Sanchez
 *
 */

var gulp = require('gulp'),
Pageres = require('pageres');

gulp.task('shoot', function () {

    var pageres = new Pageres({delay: 2})
        .src('frontend-labs.com', ['480x320', 'iphone 5s'], {crop: true})
        .src('otherfocus.com', ['360x640'])
        .dest(__dirname);

    pageres.run(function (err) {
        if (err) {
            throw err;
        }

        console.log('Tarea culminada con exito!');
    });


});
