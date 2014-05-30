# Arrange, Act, Assert _(AAA)_

This example show-cases how to develop tests following the AAA pattern, by writing tests against the public API of a component. In this case we'll be testing the `emitter` function, as well as the `on` and `emit` methods which `emitter(thing)` is expected to attach on `thing`.

To run the tests by hand, simply execute `node` in your terminal, like below.

```shell
node test/emitter
```

![test.png][1]

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/tape-test-emitter.png "Tape tests in action"
