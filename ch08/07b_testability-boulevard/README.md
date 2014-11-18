# Testability Boulevard

[![tape.png][1]][2]

This example builds on top of [**ch07e10** The Road Show][6], adding unit tests to a few key components, such as the router, view controllers, and model validation.

To run this example you'll need to build the application with Browserify, I've set up Grunt for that, just like in [**ch05e11** Browserify + Common.JS][4].

```shell
grunt build
```

Once you build it, you can see it in action just opening the HTML page. Make sure you browse through the code! I'm sure you'll find **interesting comments and advice** in there!

```shell
open app.html
```

You should see the application as shown below, opened in your favorite browser. You can run the tests by opening the `test/runner.html` file in your browser, and checking out the browser `console`.

![road-show.png][7]

Browse the code and check out the comments to learn more!

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/tape.png
[2]: http://backbonejs.org/ "Backbone.js MVC Framework"
[3]: http://browserify.org/
[4]: https://github.com/buildfirst/buildfirst/tree/master/ch05/11_browserify-cjs
[5]: http://mustache.github.io/
[6]: https://github.com/buildfirst/buildfirst/tree/master/ch07/10_the-road-show
[7]: https://raw.github.com/buildfirst/buildfirst/master/images/road-show.png
