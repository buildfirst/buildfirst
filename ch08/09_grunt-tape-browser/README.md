# Grunt `tape` Automation (Browser)

This example is notoriously similar to the previous one, where we ran tests in Node, except that the tests are ran through `testling` instead. Testling executes our tests in browsers, and [it can be configured][2] to run on different ones, as well.

The `testling` Grunt task requires no Grunt configuration, but you'll have to configure Testling in your `package.json` file, instead. Check out the [_Advanced Testling Configuration_][3] documentation.

The command below runs the tests using Testling.

```shell
grunt test
```

![testling-browser.png][4]

That's it! The previous example, [**ch08e08** Grunt `tape` Automation (Node)][1] showed how to run the same tests in the browser.

[1]: https://github.com/buildfirst/buildfirst/tree/master/ch08/08_grunt-tape-node
[2]: https://ci.testling.com/guide/quick_start
[3]: https://ci.testling.com/guide/advanced_configuration
[4]: https://raw.github.com/buildfirst/buildfirst/master/images/testling-browser.png
