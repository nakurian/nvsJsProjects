const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
//Gulp dependencies go here

gulp.task('default', async function() {
  //Node Source
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
  .pipe(eslint())
  .pipe(eslint.format());

  gulp.src("es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dist"));
  //browse source
  gulp.src("public/es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("public/dist"));

});
