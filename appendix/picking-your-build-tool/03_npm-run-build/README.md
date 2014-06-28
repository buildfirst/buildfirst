# Running Tasks Asynchronously

For the inexperienced, running tasks asynchronously purely using Bash might seem like an impossible task, but in reality it's quite easy to do so. There are quite a few resources that cover _Bash Jobs_ on the web, and I'd recommend you read this one: [Understanding Job Control in Bash][1], to get started.

All that you need to run a task asynchronously using bash is to add a `&` at the end of your command. Supposing `long-lasting-op` is a tool that takes a long time to complete (or never exits), the two commands below would run it synchronously and asynchronously respectively.

```shell
long-lasting-op
```

```shell
long-lasting-op &
```

You could also chain tasks together. In the case of the asynchronous command, you just add the next task after the last one, and in the case of the synchronous version you'll need to separate the commands with `&&`.

```shell
long-lasting-op && echo 'done!'
```

```shell
long-lasting-op & echo 'background...'
```

To execute this example just run the following command in your terminal.

```shell
npm run build
```

![run-build.png][2]

[1]: http://www.symkat.com/understanding-job-control-in-bash
[2]: http://i.imgur.com/LjjnWjU.png
