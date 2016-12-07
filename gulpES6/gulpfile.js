var gulp = require("gulp"),
    babel = require("gulp-babel"),
    es2015 = require("babel-preset-es2015"),
        webpack = require("gulp-webpack");
gulp.task("default",function(){
    gulp.src("./js/es6/*.es6")
        .pipe(babel({presets:[es2015]}))
        .pipe(gulp.dest("./js"))
        .pipe(webpack(({
            output:{
                filename:"all.js",
            },
            stats:{
                colors:true
            }
        })))
        .pipe(gulp.dest("./js/dist"));
    console.log('done once');
});

gulp.task('watch', function() {
    gulp.watch('./js/es6/*.es6', ['default']);
});
