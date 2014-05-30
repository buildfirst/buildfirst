# DOM Interaction Testing

Testing the interaction between the DOM and JavaScript code can be complicated, as the gap between the DOM and JavaScript world shouldn't be taken lightly.

![mind-the-gap.jpg][1]

This example sets up a _Event Bar_, where numbers go to get a round. The implementation is fully written, and tested, using Common.JS, Sinon, and `tape`, just like our previous examples. The fact that our code interacts with the DOM does not impede us from using CJS style modules and Browserify.

In order to run this example, you'll need to _browserify_ the code, as we learned in [**ch08e02** `tape` In The Browser][3].

```shell
grunt build
open src/event-bar.html
```

Here is the _Event Bar_ in all its glory.

![event-bar.png][2]

In our tests we isolate the JavaScript code from the HTML, creating the necessary DOM elements for each test. In order to run these tests, you'll need to _browserify_ the code, as we learned in [**ch08e02** `tape` In The Browser][3].

```shell
grunt build-tests
open test/runner.html
```

![interaction-testing-browser.png][4]

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/mind-the-gap.jpg "Mind it!"
[2]: https://raw.github.com/buildfirst/buildfirst/master/images/event-bar.png
[3]: https://github.com/buildfirst/buildfirst/tree/master/ch08/02_tape-in-the-browser
[4]: https://raw.github.com/buildfirst/buildfirst/master/images/interaction-testing-browser.png
