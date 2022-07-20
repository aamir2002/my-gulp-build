import gulp from 'gulp'

import gulpPlumber from 'gulp-plumber'
import notify from 'gulp-notify'
import concat from 'gulp-concat'
import cssImport from 'gulp-cssimport'
import autoPrefixer from 'gulp-autoprefixer'
import cssMin from 'gulp-cssnano'
import rename from 'gulp-rename'
import size from 'gulp-size'
import shortHand from 'gulp-shorthand'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import webpCss from 'gulp-webp-css'

import path from '../config/path.js'
import app from '../config/app.js'

export default () => {
  return gulp.src(path.css.src, {sourcemaps: app.isDev})
    .pipe(gulpPlumber({
      errorHandler: notify.onError(error => ({
        title: 'CSS',
        message: error.message
      }))
    }))
    .pipe(concat('main.css'))
    .pipe(cssImport())
    .pipe(webpCss())
    .pipe(autoPrefixer())
    .pipe(shortHand())
    .pipe(groupCssMediaQueries())
    .pipe(size({title: 'main.css'}))
    .pipe(gulp.dest(path.css.dist, {sourcemaps: app.isDev}))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssMin())
    .pipe(size({title: 'main.min.css'}))
    .pipe(gulp.dest(path.css.dist, {sourcemaps: app.isDev}))
}
