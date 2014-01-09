# Using `nodemon`

There are two alternatives for us to use `nodemon`. The first is to simply use it directly. This might be convenient if you're looking for a speedier approach. In order to use it directly, simply install the [nodemon][1] package, and then use it as if you were using `node`.

```shell
npm install -g nodemon
```

Then, you could simply do:

```shell
nodemon app.js
```

Try changing the contents of `app.js`, and you'll see nodemon immediately reloads your application, with the latest changes.

### Using `nodemon` in Grunt

The modified `dev` task alias in our Grunt flow for this example allows us to concurrently execute `nodemon` (through [grunt-nodemon][2]), and `watch`. Simply doing:

```shell
grunt dev
```

This command will spawn child processes, and run both `watch` and `nodemon` simultaneously, restarting our `node` application, or re-executing our build, as necessary (depending of which files change). The case for using `nodemon` in Grunt would be to use just a single terminal window, as opposed to one for `nodemon` and one for `grunt watch`. In my experience, however, `grunt-concurrent` and `grunt-nodemon` slow down the build too much, and in conclusion: _I feel I'm better off using two tabs in my terminal instead_.

I added a modified `.nodemonignore` so that changes in the `public` and `build` directories don't restart `node`, since in our case, they won't modify the behavior of the server-side code, thus rendering a restart unnecessary.

  [1]: https://github.com/remy/nodemon "nodemon on GitHub"
  [2]: https://github.com/ChrisWren/grunt-nodemon "grunt-nodemon on GitHub"
