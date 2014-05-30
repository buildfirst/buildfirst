# Backbone Views

[![backbone.png][1]][2]

This example introduces you to the wonderful experience of developing MVC applications in the client-side. As we mentioned in Chapter 5, we'll stick to Common.JS and use [Browserify][3] to effortlessly translate those modules into a browser-ready bundle.

To run this example you'll need to build the application with Browserify, I've set up Grunt for that, just like in [**ch05e11** Browserify + Common.JS][4].

```shell
grunt build
```

Once you build it, you can see it in action just opening the HTML page. Make sure you browse through the code! I'm sure you'll find **interesting comments and advice** in there!

```shell
open app.html
```

Oh, also, if you want to make changes to the Backbone application, and rebuild them without runing `grunt build` every time, you could use the following command.

```
grunt watch
```

That's about it. This demo shows how you can use Backbone to render a static view in your HTML. I've kept this example simple on purpose, so that you can progressively understand what is going on as we add functionality to the view. In the next example, [**ch07e02** Backbone View Templates][5], you'll learn to render the view using [Mustache][6] templates instead.

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/backbone.png
[2]: http://backbonejs.org/ "Backbone.js MVC Framework"
[3]: http://browserify.org/
[4]: https://github.com/buildfirst/buildfirst/tree/master/ch05/11_browserify-cjs
[5]: https://github.com/buildfirst/buildfirst/tree/master/ch07/02_backbone-view-templates
[6]: http://mustache.github.io/
