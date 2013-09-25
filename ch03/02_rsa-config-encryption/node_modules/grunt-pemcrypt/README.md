# grunt-pemcrypt

> Use pemcrypt to automatically encrypt and decrypt JSON configuration files

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pemcrypt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pemcrypt');
```

## The "pemcrypt" task

### Overview
In your project's Gruntfile, add the task you want to automate to the data object passed into `grunt.initConfig()`.

```js
var path = require('path');
var cwd = process.cwd();
var pemkey = path.join(cwd, '.private.pem');

grunt.initConfig({
  pem_gen: {
    key: { pem: pemkey }
  },
  pem_encrypt: {
    foo: { pem: pemkey, store: 'foo' }
  },
  pem_decrypt: {
    foo: { pem: pemkey, store: 'foo' }
  }
})
```

#### Task `pem_gen`

Generates a private `.pem` key at the provided absolute file path. In the example I picked a file path in the project root, but you might want to keep your `.pem`s outside the working directory for your repository altogether. You can optionally pass in a `size` value to determine the strength of the private key generated.

```shell
grunt pem_gen:key
```

#### Task `pem_encrypt`

Encrypts the `store` file sitting on our `cwd`, we can override `cwd` by passing it as an option. For example:

```js
{
  "pem_encrypt": {
    "foo": {
      "pem": pemkey,
      "store": "foo",
      "cwd": __dirname + '/bar'
    }
  }
}
```

Alternatively to providing a `store`, you can provide different locations for each of your versions, for example:

```js
{
  "pem_encrypt": {
    "foo": {
      "pem": pemkey,
      "pemstore": "secure/foo",
      "rawstore": "private/foo"
    }
  }
}
```

#### Task `pem_decrypt`

Decrypts the `store` file, using the same pem that encrypted it. This task carries the same configuration options found in the `pem_encrypt` task.

#### Troubleshooting

Generate the private key only once, then encrypt and decrypt all you like using that one key.