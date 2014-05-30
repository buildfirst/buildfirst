# Manual Installation

Installing the dependencies in many of the samples requires **Node.js**. You could get it from [the Node.js website][1], but I recommend using [`nvm`][2], which makes it super easy to install multiple Node versions, and switch between them.

### Repository

You need [git][3], in order to `clone` the repository like below.

```shell
git clone --recursive https://github.com/buildfirst/buildfirst.git
```

<sub>The `--recursive` flag is used to **clone submodules** as well. Read [a bit more about cloning submodules][4] command, for context.</sub>

As a bit of _sugar on top_ of `git`, we can use a little utility developed by **GitHub**, called [hub][5], to make cloning repositories easier. It's just less verbose to type by hand, useful if you use the terminal a lot.

```shell
hub clone --recursive buildfirst/buildfirst
```

### Dependencies

You will need to install dependencies for most of the examples using `npm install`. This command has to be run on each sample's directory. To relive you of this burden, you can use one of the following commands to install the packages in all of them at once. Note that you'll need to `cd` to the root of the samples directory for this to work.

Then, execute the command that fits your **platform**.

Platform         |Command
-----------------|-------
Mac OS, or Linux | `find . -mindepth 2 -maxdepth 2 -type d -name '*_*' -print -exec npm install --prefix {} \;`
Windows          | `for /d . %d in (ch*\*_*) do @if exist "%d" npm install --prefix %d`

  [1]: http://nodejs.org/download/ "Node.js Downloads"
  [2]: https://github.com/creationix/nvm "Node Version Manager"
  [3]: http://git-scm.com/ "git source control"
  [4]: http://stackoverflow.com/a/4438292/389745 "How to `git clone` including submodules?"
  [5]: http://hub.github.com/ "hub by GitHub"
