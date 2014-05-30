# Callback Hell

> **What is going on!?** _My thoughts exactly._ You've just been dragged through Callback Hell, a friendly name to define **deeply nested and indented callbacks**, on top of _some more callbacks_, which make it pretty difficult to follow the flow, and understand what's going on.

![callback-hell.jpg][1]

In this series of examples, I go over the different ways in which you can reduce the hell in your async JavaScript. Concretely, this should help you reduce indent levels and also result in clearer code that's easier to read.

Behold, callback hell in all its gory glory.

```js
(function () {
  var loaded;
  function init () {
    document.body.addEventListener('click', function () {
      console.log('Clicks are important.');
      handleClick(function (data) {
        if (data) {
          return processData(data, function (copy) {
            copy.append = true;
            done(copy);
          };
        } else {
          reportError(function () {
            console.log('data processing failed.', err);
          });
        }
      });
    });
    function done (data) {
      loaded = true;
      console.log('finished', data);
    }
  }
  init();
})();
```

The numbered files that can be found in this directory are explained in the book as a series of steps you'd take to get _in and out of callback hell_.

  [1]: https://raw.github.com/buildfirst/buildfirst/master/images/callback-hell.jpg "Callback Hell, Illustrated"
