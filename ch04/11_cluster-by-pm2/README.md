# Cluster via `pm2`

![pm2.png][1]

As we've seen in the previous sample, [**ch04e10** A Node Cluster][2], `cluster` is an outstanding utility to improve the resilience of our applications without altering their code in the slightest. For context, take also the `nodemon` command-line program that runs `node` again, whenever our server-side code changes, as we examined in [**ch03e06** Using `nodemon`][3].

### Introduction

Think of the [pm2][4] module as a fusion between `cluster` and `nodemon`, geared towards release-grade environments. Rather than watching the file system for changes, which happens very often during development, but rarely in hosted environments, `pm2` gives you an interface through which you can perform these code reloads, using their command-line API.

```shell
pm2 reload all
```

With the above command, your application will be reloaded, much like what `nodemon` does when it detects a change. The crucial difference is that, while `nodemon` "wastes" system resources by watching the file system (and that's okay during development, but hardly _necessary_ in production), `pm2` takes the `cluster` route, allowing us to load these changes in new worker processes, as old ones continue serving responses. This results in no downtime when changing the code, effectively allowing us to perform deployments and then run `pm2 reload all`, and not dropping a single request!

The solution also sports a nice feature-set allowing us to get a list of worker processes (`pm2 list`), monitor their CPU usage (`pm2 monit`), and tail their `stdout` and `stderr` streams (with `pm2 logs`).

### Usage

There is no set up involved in using `pm2`, we'll need to install it globally, though.

```shell
npm install -g pm2
```

In the `cluster` example we've set up a `cluster.js` file to configure how, and when, worker processes are forked. In the case of `pm2`, it does the clustering work for us. If we wanted to run our application through pm2 using two workers _(which are replaced when they go down)_, we'd just use the command below.

```shell
pm2 start -i 2 app.js
```

For a full API reference refer to the documentation on [their GitHub page][4].

  [1]: https://github.com/buildfirst/buildfirst/raw/master/images/pm2.png
  [2]: https://github.com/buildfirst/buildfirst/tree/master/ch04/10_a-node-cluster "A Node Cluster"
  [3]: https://github.com/buildfirst/buildfirst/tree/master/ch03/06_nodemon
  [4]: https://github.com/Unitech/pm2
