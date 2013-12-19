# A Node Cluster

Clusters in Node let us have a more resilient application. Clusters divide the load received by a networked application among different processes _(workers)_, and we can easily spin new worker processes using `cluster.fork`. This functionality is particularly useful when a worker is shut down due to unforeseen events such as an _uncaught exception_. In non-clustered applications (try the `node app` command), an uncaught exception or a `process.exit` call would shut down the application entirely. Clustered applications, in contrast, continue to operate after a worker process shuts down, and are able to spawn new workers to replace old ones.

Using `node cluster` in the command-line you'll see this behavior in action. You should see output similar to the screenshot below.

![terminal.png][1]

One of the most appealing upsides of `cluster` is the fact that we didn't have to change `app.js` at all in order to make it clustered. Even if we had an application listening on a port with the `http` module, `cluster` would be smart enough to allow the web application to continue to work _even through process termination_ (as long as there are _other workers_ to hand the load off to), acting sort of like a load balancer.

Since Node runs on a single thread, `cluster` will run optimally when we use as many worker processes as cores our CPU has. In practice, if you just want to _vastly improve_ the resilience of your Node app, using two worker processes will be enough. If you want to tune the server for heavy load (many HTTP requests/sec), then additional measures, such as configuring an [nginx][2] proxy to serve static assets (also reducing the strain on the `node` processes), might be necessary.

You can read all about the [native cluster API][3] in the Node.js documentation.

  [1]: http://i.imgur.com/DOQcTRb.png "Cluster restarting worker processes"
  [2]: http://nginx.com/
  [3]: http://nodejs.org/api/cluster.html
