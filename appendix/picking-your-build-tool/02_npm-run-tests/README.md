# Chaining Tasks Together

Running tasks with `npm run` sequentially can be done by adding `&&` between your tasks. If you want, you could invoke `npm run` again inside of an `npm run` task. This allows you to chain tasks together, which helps you define different tasks that do a single thing, and then compose a build flow consisting of several of those tasks.

To run this sample you could use the following command.

```shell
npm test
```

Remember that this is a shortcut for `npm run test`, there are [a few other shortcuts available][1] on `npm`.

[1]: https://www.npmjs.org/doc/misc/npm-scripts.html
