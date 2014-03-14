# `tape` In The Browser

In order to run tests on `tape`, in the browser, we'll need to run our code through Browserify, first. We'll do that through Grunt, using `grunt-browserify`.

To compile our code with Browserify, you just need to run the following command in your terminal.

```shell
grunt build-tests
```

That's it, now you can run the tests using the test harness, opening the `test/runner.html` file in your browser, and checking out the browser `console`.
