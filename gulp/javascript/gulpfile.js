const gulp = require('gulp') // gulp
const concat = require('gulp-concat') // junta arquivos
// const uglify = require('gulp-uglify') // minifica arquivos
const babel = require('gulp-babel') // transpila arquivos


gulp.task('default', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      minified: true,
      comments: false,
      presets: ['env']
    }))
    // .pipe(uglify())
    .on('error', err => console.log(err))
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
})
