# Build First: JavaScript Applications

_**Accompanying code samples and snippets for the Build First: JavaScript Applications book.**_

This are the accompanying code samples and snippets for a book I wrote about **JavaScript build processes and application architecture**. Want to [_learn more about it_](http://bevacqua.io/buildfirst "Build First: JavaScript Applications")?

# Installation

You'll need **Node.js**, refer to [this link](http://nodejs.org/download/ "Node.js Downloads") to install it.
You'll also need to clone this repository, make or change directory to your development folder, and then clone this repository.

You can simply use [git](http://git-scm.com/ "git source control") to `clone` the repository.

```shell
cd /dev/repo
git clone https://github.com/bevacqua/buildfirst.git
```

As an alternative, I use a little utility developed by **GitHub**, called [hub](http://hub.github.com/ "hub by GitHub"), to easily clone repositories. It's just easier to type by hand.

```shell
cd /dev/repo
hub clone bevacqua/buildfirst
```

Once you've got the repository, you will need to install dependencies for most of the examples using `npm install`. `node_modules` directories aren't bundled with the repository. To relive you of this burden, you can use the following command to install the packages in each of the samples. Note that you'll need to `cd` to the root of the samples folder for this to work.

```shell
cd buildfirst
find . -mindepth 2 -maxdepth 2 -type d -name '*_*' -print -exec npm install --prefix {} \;
```

For Windows users, you could try this command, although it hasn't been tested. Let me know if it works!

```shell
cd buildfirst
for /d . %d in (ch*\*_*) do @if exist "%d" npm install --prefix %d
```

# Execution

To run an example, read its [README.md](README.md "To understand recursion, you must first understand recursion") and follow the instructions I've placed there. I tried to make them as straightforward as possible, but sometimes they might not match the examples in the book to the letter.

There are some examples here that you _won't find on the book_, those will generally be a bit longer: the reason why I didn't include them in the book. Although the code itself might not be present in the book, most of the explaining will definitely be there, rather than here.

# Troubleshooting

If you run into any problems, please create an issue [here](https://github.com/bevacqua/buildfirst/issues). Maybe it's something that needs fixing.

# Feedback

You can drop me a line at `buildfirst@bevacqua.io` if you want to leave me feedback, say hi, or grunt at me about my failure to amuse you.

I'm also reachable through my [blog](http://blog.ponyfoo.com "Pony Foo"), [@nzgb](https://twitter.com/nzgb "@nzgb on Twitter") on Twitter, and I enjoy people stalking me over the Internet.

Let the [**#buildfirst**](https://twitter.com/#buildfirst) revolution commence!
