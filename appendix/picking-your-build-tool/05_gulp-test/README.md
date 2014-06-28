# Testing in Gulp

In this sample we'll define a build task to run our code through the [JSHint][1] linter.

```js
var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('test', function () {
  return gulp
    .src('./sample.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
```

To execute the task, you can enter the following command in your terminal

```shell
gulp test
```

[1]: https://github.com/jshint/jshint/
