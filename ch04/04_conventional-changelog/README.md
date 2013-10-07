# Conventional Changelogs

To update the changelog we would just need to run, after commiting things to `git`, following conventions as explained in the book.

```shell
grunt changelog
```

To merge this task with `grunt-bump`, we need to `bump-only` and then `changelog`, to finally `bump-commit`. This way we only create a single commit for both the `package.json` and `CHANGELOG.md` files. An alias can conveniently avoid mistakes:

```js
grunt.registerTask('notes', ['bump-only', 'changelog', 'bump-commit']);
```

There isn't much more to explain about this task, but you could play with it in a new `git` repo if you wanted to. In order to do that, copy this folder somewhere else and run `git init`, then commit a few changes, and run `grunt notes`. You could follow these commands, granted your shell is currently sitting on this directory:

```shell
cp -r . /dev/changelog-test
cd /dev/changelog-test
git init
git add .
git commit -am "initial commit"
echo "# Stub" > stub.md
git add stub.md
git commit -am "feat: stubbing"
grunt notes
```

Moving on.
