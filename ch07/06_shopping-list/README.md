# Introducing Backbone

[![backbone.png][1]][2]

This example introduces you to the wonderful experience of developing MVC applications in the client-side. As we mentioned in Chapter 5, we'll stick to Common.JS and use [Browserify][3] to effortlessly translate those modules into a browser-ready bundle.

It might be hard for you to eye-parse this example without walking through the introductory materials on [Backbone][2] in Chapter 7 first, so I suggest you read about MVC and [Backbone][2] in the book before going through this example.

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

That's about it. This demo show-cases some of the most basic pieces of Backbone. Its models, which contain the data used to prepare your views; and the views, which are used to render the data from the models. To render the views, we're using [Mustache][5], a popular templating library.

![backbone-intro.png][6]

I've kept this example intentionally simple so that you can progressively understand what is going on as we add functionality to our Backbone view. In the next example, [**ch07e07** The One With Delete Buttons][7], we'll add a delete button to each item in our list.

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/backbone.png
[2]: http://backbonejs.org/ "Backbone.js MVC Framework"
[3]: http://browserify.org/
[4]: https://github.com/buildfirst/buildfirst/tree/master/ch05/11_browserify-cjs
[5]: http://mustache.github.io/
[6]: https://raw.github.com/buildfirst/buildfirst/master/images/backbone-intro.png
[7]: https://github.com/buildfirst/buildfirst/tree/master/ch07/07_the-one-with-delete-buttons
