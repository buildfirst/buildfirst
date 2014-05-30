# Functional Asynchronous Tasks

Just like we learned in [**ch06e04** Asynchronous Flow][1], here we'll be using the [async][2] library to perform asynchronous operations, although in this case, we'll be performing functional operations, such as looping through a collection, transforming a collection through a mapper, and sorting a collection asynchronously.

Suppose you need to go through a list of product identifiers, and fetch their object representations over HTTP. That's an excellent use case for a map. Maps transform input into output using a function, which modifies the input. Here's how it's done using `async.map`.

```js
var ids = [23, 33, 118];

async.map(ids, transform, done);

function transform (id, complete) {
  http.get('/products/' + id, complete);
}

function done (err, results) {
  // handle the error
  // results[0] is the response for ids[0],
  // results[1] is the response for ids[1],
  // and so on
}
```

  [1]: https://github.com/buildfirst/buildfirst/tree/master/ch06/04_async-flow "Asynchronous Flow Control"
  [2]: https://github.com/caolan/async "Async utilities for node and the browser"
