# Mocking Your Dependencies

Mocking dependencies which are arguments to a function is really trivial in JavaScript tests, you just make up any objects you need! Mocking dependencies which are imported with a `require()` call is a bit trickier, but it's still perfectly doable without making any changes to your source code.

In these tests, I use `proxyquire` to resolve a fake version of the `model` which would normally query the database, but in my tests it just calls back a function passing an object.




