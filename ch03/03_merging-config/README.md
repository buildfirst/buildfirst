# Merge configuration sources

Using `nconf`, we'll merge different configuration sources such as the OS [Environment](http://en.wikipedia.org/wiki/Environment_variable), command-line arguments, and JSON files.

You can lint this example using Grunt.

```shell
grunt jshint
```

But that's just me being cautious, the purpose of the sample is to show you how `nconf` works, so let's get to that.

For the purposes of the example, we'll only be setting a `PORT`, and a `NODE_ENV` variable, but the same could hold true for setting any configuration value we want. As a shortcut, I omitted the secure configuration encryption and decryption part, but you shouldn't have any problems at all incorporating that into this example. I'll leave that as an exercise for you.

Instead of telling you what to do step by step, this time I'll provide you with a table of actions and results.

Running...|`PORT` equals...
---|---
`node app`|`3000`
`PORT=80 node app`|`80`
`node app --PORT 3001`|`3001`
`PORT=8007 node app --PORT 3006`|`3006`

### Environment Variable-oriented configuration

In the case of going the Heroku-style way, dealing with configuration relying on environment variables, we wouldn't need to change anything as far as hosted environments go. When it comes to development, you might want to set up a JSON file (following the approach used in the [previous sample](https://github.com/bevacqua/buildfirst/tree/master/ch03/02_rsa-config-encryption)), and place the configuration there instead.

Then, this line loads those values into `nconf`:

```js
nconf.file('dev', path.join(__dirname, 'development.json'));
```

