# Mocking `XmlHTTPRequest` Requests

Creating fake `XmlHTTPRequest` requests is super-easy with Sinon. All you need to do is use `fakeServer.create` or `useFakeXMLHttpRequest()`. There is _plenty of information_ about these methods in [the documentation for Sinon][3].

```js
var server = sinon.fakeServer.create();

somethingThatTriggersXHR();

var req = server.requests[0];

req.respond(status, headers, body);
```

Here's how [the original source code][4] works, by making a **real** XHR request, once we get the results we use `console.log` to print the response.

In order to run this example, you'll need to _browserify_ the code, as we learned in [**ch08e02** `tape` In The Browser][6].

```shell
grunt build
open src/quote.html
```

![real-xhr.png][1]

[Our tests][5] make a **fake** XHR request. This is benefitial because we don't waste time querying the network in our tests, which should be as blisteringly fast as possible. Also, we shouldn't depend on external factors, such as an available network connection, to execute unit tests.

In order to run these tests, you'll need to _browserify_ the code, as we learned in [**ch08e02** `tape` In The Browser][6].

```shell
grunt build-tests
open test/runner.html
```

![fake-xhr.png][2]

Note that we could run this code on Node as well!

```shell
node src/qotd
```

![real-http.png][7]

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/real-xhr.png "A real XHR request"
[2]: https://raw.github.com/buildfirst/buildfirst/master/images/fake-xhr.png "A fake XHR request in our tests"
[3]: http://sinonjs.org/docs/#server "Fake XHR and server"
[4]: https://github.com/buildfirst/buildfirst/blob/master/ch08/06_fake-xhr-requests/src/qotd.js
[5]: https://github.com/buildfirst/buildfirst/blob/master/ch08/06_fake-xhr-requests/test/qotd.js
[6]: https://github.com/buildfirst/buildfirst/tree/master/ch08/02_tape-in-the-browser
[7]: https://raw.github.com/buildfirst/buildfirst/master/images/real-http.png
