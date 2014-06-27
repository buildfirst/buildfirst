# JSHint via `npm run`

This sample shows how to combine `npm` with the [JSHint CLI][3] to lint JavaScript files. The tasks are defined solely in the [`package.json`][2] file.

```json
{
  "scripts": {
    "test": "jshint . --exclude node_modules"
  }
}
```
To run the lint task, enter the following command in your terminal.

```shell
npm run test
```

![npm-lint.png][1]

There are a few script names, such as `test`, and `start`, that allow you to omit the `run` argument.

```shell
npm test
```

[1]: http://i.imgur.com/eETDUgq.png
[2]: https://github.com/buildfirst/buildfirst/tree/master/appendix/picking-your-build-tool/01_npm-run-jshint/package.json
[3]: http://www.jshint.com/docs/cli/
