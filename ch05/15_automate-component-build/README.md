# Automated Component Build Step

[![component.png][1]][2]

For information about _other_ front-end package management options, check out [this repository][3].

This example briefly demonstrates how we can benefit from using the [Component package manager][2]. Install it with the following command.

```shell
npm install -g component
```

That will install the `component` program itself. To install packages in `component.json`, merely use:

```shell
component install
```

These are the steps I took to create this example:

- `echo "{}" > component.json`, to get a basic `component.json`
- `component install lodash`, which installed [LoDash][4] `2.4.1`

Afterwards, `component build` will builds the components we depend on, and puts them in a bundled `build/build.js` file, under CJS format.

As you can see, we didn't change the default installation directory in this case, and at the time of this writing, it isn't possible to do so, as it's hardcoded into `component-installer` to be `'./components'`. If you find a way to work around this, other than doing `component install -o js/components`, which seems to be deprecated, please create an issue and I'll make sure to add it here
!
Once you've built the components using `component build`, open the example from your shell, like below.

```shell
google-chrome test.html
```

<sub>(or just open `test.html` in your favorite browser)</sub>

  [1]: http://i49.tinypic.com/e7nj9v.png
  [2]: http://component.io
  [3]: https://github.com/wilmoore/frontend-packagers
  [4]: http://lodash.com/docs
