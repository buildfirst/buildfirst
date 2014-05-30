# Logging with `winston`

Rather than using `console.log` (or `process.stdout.write`) to print log messages to standard output, a better approach has always been using multi-transport logging libraries, such as [log4j][1] in **Java**, and [NLog][2] in **.NET**. One such library available to Node applications is [winston][3].

Setting up `winston` is relatively easy, but it's a good example of how we might configure a module in a decoupled way, as discussed in Chapter 3. To run this example, simply type `node app` into your terminal.

Optionally, you could set up a [global variable][4] so that you won't need to reference the `logger` module in every script that uses it, considering you'll probably use it pretty extensively throughout your code-base. To see this approach in action, see `app-glob.js`.

### Transports

There are a few transports I wanted to mention to give you an idea of what places you can send your logging output to, as we'll see in a moment. However, I'm purposely deferring the instructions to set those up to them, since they'll keep their installation documentation up to date, while I probably can't.

- [**winston-mail**][5] can be used to send emails for logging events, useful when errors (and maybe even _filtered_ by some other factor) are logged.

- [**winston-mongodb**][6] is a transport for sending logs to a MongoDB database instance. This one is useful as a general purpose transport, and generally used for anything the logger throws at you, considering you can later perform the filtering by querying the database yourself.

- [**winston-pushover**][7] allows you to get push notifications sent directly to your phone, through the Pushover service.

- [**winston-papertrail**][8] lets you send the logging events to a log management service which handles the log data for you, which is pretty useful.

### Configuring a Transport

To configure a transport, rather than doing so directly, the preferred way would be to do it through a module such as `nconf`, as we learned in Chapter 3. Check out [**ch03e03** Merging Config][9] to get an idea of how this arrangement might look like.

Deeper in the book, we'll come back to this subject and look at a full-fledged example on how to configure transports in this way.

  [1]: http://logging.apache.org/log4j/
  [2]: http://nlog-project.org/
  [3]: https://github.com/flatiron/winston
  [4]: http://nodejs.org/api/globals.html
  [5]: https://github.com/wavded/winston-mail
  [6]: https://github.com/indexzero/winston-mongodb
  [7]: https://github.com/matthewtole/winston-pushover
  [8]: https://github.com/kenperkins/winston-papertrail
  [9]: https://github.com/buildfirst/buildfirst/tree/master/ch03/03_merging-config
