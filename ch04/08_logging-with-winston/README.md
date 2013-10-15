# Logging with `winston`

Rather than using `console.log` (or `process.stdout.write`) to print log messages to standard output, a better approach has always been using multi-transport logging libraries, such as [log4j](http://logging.apache.org/log4j/) in **Java**, and [NLog](http://nlog-project.org/) in **.NET**. One such library available to Node applications is [winston](https://github.com/flatiron/winston).

Setting up `winston` is relatively easy, but it's a good example of how we might configure a module in a decoupled way, as discussed in Chapter 3. To run this example, simply type `node app` into your terminal.


with, and without globals. together with configuration (using just a json file)
