# Manual Installation

Installing the dependencies in many of the samples requires **Node.js**. You could get it from [the Node.js website][1], but I recommend using [`nvm`][2], which makes it super easy to install multiple Node versions, and switch between them.

We need [git][3], to `clone` the repository like below.

```shell
cd /dev/repo
git clone --recursive https://github.com/bevacqua/buildfirst.git
```

The `--recursive` flag is used to **clone submodules** as well. Read [a bit more about this][4] command, for context.

As an alternative, we can use a little utility developed by **GitHub**, called [hub][5], to make cloning repositories a bit easier. It's just less verbose to type by hand, useful if you use the terminal a lot.

```shell
cd /dev/repo
hub clone --recursive bevacqua/buildfirst
```

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

  [1]: http://nodejs.org/download/ "Node.js Downloads"
  [2]: https://github.com/creationix/nvm "Node Version Manager"
  [3]: http://git-scm.com/ "git source control"
  [4]: http://stackoverflow.com/a/4438292/389745 "How to `git clone` including submodules?"
  [5]: http://hub.github.com/ "hub by GitHub"
