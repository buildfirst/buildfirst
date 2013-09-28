# Reporting issues

If you are reporting an issue here, please make sure that the issue is with grunt-nodemon and not nodemon. If you have discovered a bug in nodemon, please file an issue [there](https://github.com/remy/nodemon/issues/new).

# Tests

 We use the [mocha](http://visionmedia.github.io/mocha/) test framework and [should](https://github.com/visionmedia/should.js/) assertion library to test grunt-pages. To run the test suite, enter the following command:

```bash
grunt test
```

There are integration tests located in [this](https://github.com/ChrisWren/grunt-nodemon/blob/master/test/integrationTests.js) file which verify that the .nodemonignore file is created/removed as expected.
