# Automated Component Build Step

[![component.png][1]][2]

For information about _other_ front-end package management options, check out [this repository][3].

This example is a continuation of [**ch05e14** Adopting Component][4]. Here, instead of building components using `component build`, we build them in Grunt. Install `component` with the following command.

```shell
npm install -g component
```

That will install the `component` program itself. To install packages in `component.json`, merely use:

```shell
component install
```

Below are the steps I took to create this example. _You don't need to run these._

- `echo "{}" > component.json`, to get a basic `component.json`
- `component install lodash`, which installed [LoDash][5] `2.4.1`

> Also note that the scripts I wrote, found in the `js` directory, have been listed in the `component.json` manifest.

Afterwards, `component build` will builds the components we depend on, and puts them in a concatenated `bundle.js` file, under CJS format.

In this case, we've changed the build directory to `'./build/js'`, in the task configuration. We also changed the default name, `build.js`, to `bundle.js`.

Once you've built the components using `grunt componentbuild:debug`, open the example from your shell, like below.

```shell
open test.html
```

<sub>(or just open `test.html` in your favorite browser)</sub>

  [1]: http://i49.tinypic.com/e7nj9v.png
  [2]: http://component.io
  [3]: https://github.com/wilmoore/frontend-packagers
  [4]: https://github.com/buildfirst/buildfirst/tree/master/ch05/14_adopting-component
  [5]: http://lodash.com/docs
