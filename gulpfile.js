import gulp from 'gulp'
import browserSync from 'browser-sync'

import path from './config/path.js'
import app from './config/app.js'

import html from './tasks/html.js'
import clear from './tasks/clear.js'
import scss from './tasks/scss.js'
import js from './tasks/js.js'
import img from './tasks/img.js'

const server = () => {
  browserSync.create()
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload)
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload)
  gulp.watch(path.js.watch, js).on("all", browserSync.reload)
  gulp.watch(path.img.watch, img).on("all", browserSync.reload)
}

const build = gulp.series(
  clear,
  gulp.parallel(html, scss, js, img)
)

const dev = gulp.series(
  build,
  gulp.parallel(server, watcher)
)

export {html, scss, js, img}

export default app.isProd
  ? build
  : dev