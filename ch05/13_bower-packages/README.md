# Leveraging Bower Packages

[![bower.png][1]][2]

For information about _other_ front-end package management options, check out [this repository][3].

This example briefly demonstrates how we can benefit from using the [Bower package manager][3]. Install it with the following command.

```shell
npm install -g bower
```

That will install the `bower` program itself. To install packages in `bower.json`, merely use:

```shell
bower install
```

These are the steps I took to create this example:

- `bower init`, accepting all defaults, to get a basic `bower.json`
- `bower install --save angular`, which installed [Angular.js][4] `1.2.5`
- Create a `.bowerrc` file to specify a target directory

Here's the contents of `.bowerrc`:

```json
{
  "directory": "js/bower"
}
```

If unspecified, the `bower_components` directory is used by default. Setting it to `js/bower` is just a convention I like to have, where you can place bower components in `js/bower`, other packages which I haven't authored but don't come from Bower go into `js/vendor`. The rest, the code I actually wrote, could go in a directory such as `js/app`, for example.

> This is just the convention I'm comfortable following, you don't have to follow **this convention**. You should _follow a convention_. Pick one and stick to it! Avoid randomly mixing vendor packages with the ones you've authored.

Once you've installed the dependencies using `bower install`, open the example from your shell, like below.

```shell
google-chrome test.html
```

<sub>(or just open `test.html` in your favorite browser)</sub>

  [1]: http://bower.io/img/bower-logo.png
  [2]: http://bower.io
  [3]: https://github.com/wilmoore/frontend-packagers
