var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('default', function () {

  nodemon({
    "execMap": {
      "js": "node --debug --harmony"
    },
    script: 'app.js',
    "watch": [
      "controllers/",
      "views/",
      "test/",
      "app.js"
    ],
    "verbose": true,
    "ext": "js json",
    legacyWatch: true
  })


  console.log('test');
});
