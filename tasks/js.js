import gulp from 'gulp'

import gulpPlumber from 'gulp-plumber'
import notify from 'gulp-notify'
import babel from 'gulp-babel'
import webpack from 'webpack-stream'

import path from '../config/path.js'
import app from '../config/app.js'

export default () => {
  return gulp.src(path.js.src, {sourcemaps: app.isDev})
    .pipe(gulpPlumber({
      errorHandler: notify.onError(error => ({
        title: 'JS',
        message: error.message
      }))
    }))
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(gulp.dest(path.js.dist, {sourcemaps: app.isDev}))
}
