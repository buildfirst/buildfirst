# Arrange, Act, Assert _(AAA)_

This example show-cases how to develop tests following the AAA pattern, by writing tests against the public API of a component. In this case we'll be testing the `emitter` function, as well as the `on` and `emit` methods which `emitter(thing)` is expected to attach on `thing`.

The first thing you'll want to do here is install the `mocha` CLI globally, so it gets added to your system `PATH`.

```shell
npm install -g mocha
```

To run the tests, simply execute Mocha in your terminal, like below.

```shell
mocha --reporter spec
```

Mocha will know to look for your tests in the `test` directory. The `spec` reporter provides a prettier output than the default.
