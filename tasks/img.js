import gulp from 'gulp'

import gulpPlumber from 'gulp-plumber'
import notify from 'gulp-notify'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import webp from 'gulp-webp'
import gulpIf from 'gulp-if'

import path from '../config/path.js'
import app from '../config/app.js'

export default () => {
  return gulp.src(path.img.src)
    .pipe(gulpPlumber({
      errorHandler: notify.onError(error => ({
        title: 'IMG',
        message: error.message
      }))
    }))
    .pipe(newer(path.img.dist))
    .pipe(webp())
    .pipe(gulp.dest(path.img.dist))
    .pipe(gulp.src(path.img.src))
    .pipe(newer(path.img.dist))
    .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
    .pipe(gulp.dest(path.img.dist))
}
