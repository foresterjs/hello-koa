var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('default', function () {

  nodemon({
    "execMap": {
      "js": "babel-node --debug --harmony"
    },
    script: 'app.js',
    "watch": [
      "controllers/",
      "libs/",
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
