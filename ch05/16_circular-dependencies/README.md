# Circular Dependencies

![circular-dependencies.jpg][1]

Module systems, such as Common.JS, AMD, and the one built into Angular.js, handle circular dependencies differently, as discussed in the book. These samples show a few different ways in which we can write code to get around circular dependencies.

The first scenario can be run using the command below.

```shell
node circular
```

In this case, we have a couple of modules which depend on each other. That becomes an issue because a number of reasons.

- **(a)** module systems handle circular dependencies differently
- **(b)** some might forbid them entirely, [like Angular does][2]
- **(c)** circular dependencies are [code smells][3]

Circular dependencies are _hard to understand_, but they're also easy to avoid.

The following example gets away with simply passing the dependant as a function argument, rather than requiring it in place. To run that example, use the command below.

```shell
node natural
```

A few more ways to untangle circular dependencies are discussed in the book.

  [1]: https://github.com/buildfirst/buildfirst/raw/master/images/circular-dependencies.jpg
  [2]: http://misko.hevery.com/2008/08/01/circular-dependency-in-constructors-and-dependency-injection/
  [3]: http://www.codinghorror.com/blog/2006/05/code-smells.html
