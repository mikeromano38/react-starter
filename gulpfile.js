var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
 
gulp.task('default', function () {
  
  var b = browserify({
    entries: ['./src/app.jsx'],
    extensions: ['.jsx'],
    cache: {},
    packageCache: {},
    debug: true,
    fullPaths: true
  });

  b = watchify(b);

  function build(){
    b.transform( babelify.configure({ presets: [ 'react', 'es2015' ] }) )
    .bundle()
    .on("error", function(err) {
      gutil.log("Browserify error:", err);
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./'));
  }

  b.on('update', build);
  build();

});
