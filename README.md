# Designing JavaScript Applications
#### _A Build First Approach_

![buildfirst.png][1]

Accompanying code samples and snippets for the _Designing JavaScript Applications: A Build First Approach_ book.

This are the accompanying code samples and snippets for a book I wrote about **JavaScript build processes and application architecture**. The samples are organized by chapter, and they appear in the same order as they do in the book, for convenience. Many [other resources for this book are listed in its website](http://bevacqua.io/buildfirst/resources "#buildfirst resources"), such as links to _blog posts, articles, essays, books_, and any other particularly relevant topics discussed throughout the book.

#### Fell out of the skies and would like to learn more about the book?

You could [visit its landing page](http://bevacqua.io/buildfirst "Designing JavaScript Applications: A Build First Approach") to learn all about it!

Book buying frenzy? [Say no more, stranger!](http://bevacqua.io/bf/book "Get the book from Manning!")

# Installation

#### Get the Code

We need [git](http://git-scm.com/ "git source control"), to `clone` the repository like below.

```shell
cd /dev/repo
git clone --recursive https://github.com/bevacqua/buildfirst.git
```

The `--recursive` flag is used to **clone submodules** as well. Read [a bit more about this](http://stackoverflow.com/a/4438292/389745) command, for context.

As an alternative, we can use a little utility developed by **GitHub**, called [hub](http://hub.github.com/ "hub by GitHub"), to make cloning repositories a bit easier. It's just less verbose to type by hand, useful if you use the terminal a lot.

```shell
cd /dev/repo
hub clone --recursive bevacqua/buildfirst
```

#### Install Dependencies

You'll need **Node.js**, refer to [this link](http://nodejs.org/download/ "Node.js Downloads") to install it. It comes with the `node` and `npm` command-line tools.

You will need to install dependencies for most of the examples using `npm install`. This command has to be run on each sample's directory. To relive you of this burden, you can use one of the following commands to install the packages in all of them at once. Note that you'll need to `cd` to the root of the samples directory for this to work.

```shell
cd buildfirst
```

Then, use the command that fits your **OS**, from the options below.

##### Mac OS X and Linux

We can use the `find` program.

```shell
find . -mindepth 2 -maxdepth 2 -type d -name '*_*' -print -exec npm install --prefix {} \;
```

Note that this might take a while.

##### Windows

Try this command, although it hasn't been tested. Let me know if it works!

```shell
for /d . %d in (ch*\*_*) do @if exist "%d" npm install --prefix %d
```

That's it! You are now free to _roam the sample directories_ and follow the instructions in each of them!

# Execution

To run an example, read its [README.md](README.md "To understand recursion, you must first understand recursion") and follow the instructions I've placed there. I tried to make them as straightforward as possible, but sometimes they might not match the examples in the book to the letter.

There are some examples here that you _won't find on the book_, those will generally be a bit longer: exactly the reason why I _didn't include them_ in the book. Although the code itself might not be present in the book, most of the explaining will definitely be there, rather than here.

# Troubleshooting

If you run into any problems, please create an issue [here](https://github.com/bevacqua/buildfirst/issues). Maybe it's something that needs fixing. If you feel like contributing, that's awesome! Just fork this repo and create a [pull request](https://help.github.com/articles/using-pull-requests) with your fixes or improvements.

# Feedback

You can drop me a line at `buildfirst@bevacqua.io` if you want to leave me feedback, say hi, or grunt at me about my failure to amuse you. I'd love to hear from you!

I'm also reachable through my [blog](http://blog.ponyfoo.com "Pony Foo"), I'm [@nzgb](https://twitter.com/nzgb "@nzgb on Twitter") on Twitter, and I enjoy people stalking me over the Internet.

Let the [**#buildfirst**](https://twitter.com/#buildfirst) revolution commence!

  [1]: http://www.gravatar.com/avatar/cee019b251cf09f440b4427541e46cb8.png?s=420
