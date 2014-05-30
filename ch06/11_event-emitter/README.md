# Event Emitter Pattern

Also known as _Publish/Subscribe_, event emitters allow you to let interested parties learn about events, and react to them by subscribing to them. Once you emit an event, all interested parties get notified and have a chance to do something about it.

Event emitters are a simple, _yet powerful_, asynchronous pattern which you must master in order to  write testable code and properly deal with DOM interaction.

Emitters can be found in the wild all over the DOM, but you can also implement your own event emitters fairly easily, giving you the sheer power of firing and handling events all on your own.

Here is [an example][2] using event emitters built by [the `emitter.js` implementation][1]

```js
var emitter = require('./emitter.js');
var beats = emitter();

beats.on('ripple', function (i) {
  if (i > 0) {
    setTimeout(beats.emit.bind(beats, 'ripple', --i), Math.random() * 150 + 50);
  } else {
    beats.emit('calm');
  }
});

beats.on('calm', setTimeout.bind(null, beats.emit.bind(beats, 'ripple', 10), 1000));

beats.on('calm', console.log.bind(console, 'Calm...'));
beats.on('ripple', console.log.bind(console, 'Rippley!'));

beats.emit('ripple', 15);
```

To see this example in action by yourself, simply sit on this directory in your terminal and enter the following command.

```js
node consumer
```

You should see output like the following.

```js
Rippley! 15
Rippley! 14
Rippley! 13
Rippley! 12
Rippley! 11
Rippley! 10
Rippley! 9
Rippley! 8
Rippley! 7
Rippley! 6
Rippley! 5
Rippley! 4
Rippley! 3
Rippley! 2
Rippley! 1
Calm...
Rippley! 10
...
```

[1]: https://github.com/buildfirst/buildfirst/tree/master/ch06/11_event-emitter/emitter.js
[2]: https://github.com/buildfirst/buildfirst/tree/master/ch06/11_event-emitter/consumer.js
