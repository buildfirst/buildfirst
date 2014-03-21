# Mocking `XmlHTTPRequest` Requests

Creating fake `XmlHTTPRequest` requests is super-easy with Sinon. All you need to do is use `fakeServer.create` or `useFakeXMLHttpRequest()`. There is _plenty of information_ about these methods in [the documentation for Sinon][3].

```js
var server = sinon.fakeServer.create();

somethingThatTriggersXHR();

var req = server.requests[0];

req.respond(status, headers, body);
```

Here's how [the original source code][4] works, by making a **real** XHR request, once we get the results we use `console.log` to print the response.

![real-xhr.png][1]

[Our tests][5] make a **fake** XHR request. This is benefitial because we don't waste time querying the network in our tests, which should be as blisteringly fast as possible. Also, we shouldn't depend on external factors, such as an available network connection, to execute unit tests.

![fake-xhr.png][2]

[1]: https://raw.github.com/bevacqua/buildfirst/master/images/real-xhr.png "A real XHR request"
[2]: https://raw.github.com/bevacqua/buildfirst/master/images/fake-xhr.png "A fake XHR request in our tests"
[3]: http://sinonjs.org/docs/#server "Fake XHR and server"
[4]: https://raw.github.com/bevacqua/buildfirst/master/ch08/06_fake-xhr-requests/src/qotd.js
[5]: https://raw.github.com/bevacqua/buildfirst/master/ch08/06_fake-xhr-requests/test/qotd.js
