# Version Bumping

Versioning is an important aspect of the build, release, deploy workflow. In this example we look at version bumping in its most basic form.

In this example, whenever we execute the command below, we'll see how the version in `package.json` increases (gets _"bumped"_).

```shell
grunt bump
```

Depending on the target we pass to the `bump` task, it will update the appropriate part of our [semver](http://semver.org/) string. For example `grunt bump:major` would bump the **MAJOR** part, `bump:build` bumps the **BUILD**, and so on. By default, the **PATCH** part is increased.

For details on how to configure **grunt-bump** to commit, create tags, and `git push`, [check out their repository](https://github.com/vojtajina/grunt-bump).

Note that if you also have a `bower.json` you could just append that to the target `files` array. That's all there is to it.
