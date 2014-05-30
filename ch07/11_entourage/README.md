# Entourage: Shared Rendering with `Rendr`

[![rendr.png][1]][8]

It might be hard for you to eye-parse this example without walking through the introductory materials on [Backbone][2] in Chapter 7 first, so I suggest you read about MVC and [Backbone][2] in the book before going through this example.

To run this example you'll need to build the application with Browserify, I've set up Grunt for that, just like in [**ch05e11** Browserify + Common.JS][4]. This time around, we'll use a different flow, which will also run the Node application for us, and then watch for changes.

```shell
grunt run
```

Once your Node server is running, you can see it in action just opening your favorite browser and pointing it at `localhost:3000`. Make sure you browse through the code! I'm sure you'll find **interesting comments and advice** in there!

```shell
open http://localhost:3000/
```

This sample shows how you could use [Rendr][8] to attain _shared rendering_ in Node and the browser.

![rendr-entourage.png][7]

Browse the code and check out the comments to learn more!

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/rendr.png
[2]: http://backbonejs.org/ "Backbone.js MVC Framework"
[3]: http://browserify.org/
[4]: https://github.com/buildfirst/buildfirst/tree/master/ch05/11_browserify-cjs
[5]: http://mustache.github.io/
[6]: https://github.com/buildfirst/buildfirst/tree/master/ch07/09_item-editing
[7]: https://raw.github.com/buildfirst/buildfirst/master/images/rendr-entourage.png
[8]: https://github.com/rendrjs/rendr
