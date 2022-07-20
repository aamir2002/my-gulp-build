const pathSrc = './src'
const pathDist = './dist'

export default {
  root: pathDist,
  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dist: pathDist
  },
  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dist: pathDist + "/css"
  },
  scss: {
    src: pathSrc + "/sass/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dist: pathDist + "/css"
  },
  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dist: pathDist + "/js"
  }
  ,
  img: {
    src: pathSrc + "/img/*.{png,jpeg,jpg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpeg,jpg,gif,svg}",
    dist: pathDist + "/img"
  }
}