# LESS Task

[![less-css-logo.png][1]](http://lesscss.org/ "LESS!")

This example shows how to configure the LESS Grunt task, as discussed in Chapter 2 of the book.

In the example, we'll be setting up three different targets for this task, and we can choose to execute each one individually, or we might want to run all of them at once.

To run this example, write one of the following commands in your terminal.

- Run the `design` target, which compiles `design.less` to `design.css`:

```shell
grunt less:design
```

- Run the `explicit` target, which compiles `classes.less`, and `design.less` into a bundled `explicit.css` file:

```shell
grunt less:explicit
```

- Run the `compile` target, which takes any `*.less` file in the `public/css` folder, and compiles them into a bundled `compiled.less` file:

```shell
grunt less:compile
```

  [1]: http://i.imgur.com/DpNfYO5.png
