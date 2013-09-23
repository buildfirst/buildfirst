# Lint Task

This example shows how to configure a Grunt lint task, as discussed in chapter 2 of the book. This example is a continuation of [example 06](https://github.com/bevacqua/buildfirst/ch02/06_clean-task "Clean Task Example").

To make sure our code conforms to the **JSHint** linter, we can test it with the following Grunt command in Terminal.

```shell
grunt jshint
```

I didn't register an alias for this, but you could run something like `grunt jshint js` to compile your assets only if the JSHint linter passes without errors. In a full-fledged workflow, this is something you might do if you want to force JSHint validation on your team.