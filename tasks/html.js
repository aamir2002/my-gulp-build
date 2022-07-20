import gulp from 'gulp'

import path from '../config/path.js'
import app from '../config/app.js'

import gulpPlumber from 'gulp-plumber'
import fileinclude from 'gulp-file-include'
import htmlmin from 'gulp-htmlmin'
import notify from 'gulp-notify'
import webpHtml from 'gulp-webp-html'

export default () => {
  return gulp.src(path.html.src)
    .pipe(gulpPlumber({
      errorHandler: notify.onError(error => ({
        title: 'Html',
        message: error.message
      }))
    }))
    .pipe(fileinclude())
    .pipe(webpHtml())
    .pipe(htmlmin(app.htmlmin))
    .pipe(gulp.dest(path.html.dist))
}
