# Item Editing

[![backbone.png][1]][2]

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

This time around, I've built upon [**ch07e08** Creating Items][6]. In this case, I've included the ability to edit existing shopping list items. In this example, I've upgraded our view. Rather than have a single view do everything, here we have three views.

- One view is in charge of the _Add Groceries_ part
- One view is in charge of adding and removing items from the list
- One view is in charge of individual items in the list

This separation is what enables us to develop increasingly complex web applications, while keeping the code concise and manageable.

![backbone-edit.png][7]

Browse the code and check out the comments to learn more!

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/backbone.png
[2]: http://backbonejs.org/ "Backbone.js MVC Framework"
[3]: http://browserify.org/
[4]: https://github.com/buildfirst/buildfirst/tree/master/ch05/11_browserify-cjs
[5]: http://mustache.github.io/
[6]: https://github.com/buildfirst/buildfirst/tree/master/ch07/08_creating-items
[7]: https://raw.github.com/buildfirst/buildfirst/master/images/backbone-edit.png
