To run this example, write the following in your terminal:

```js
grunt timestamp
```

As a result, a file called `.timestamp` will be created, with a timestamp in it.

If you wish to change the path for the file where the timestamp is generated, simply do:

```js
grunt.initConfig({
  timestamp: {
    options: {
      file: 'your/file/path'
    }
  }
});
```

This code can be placed either above or below the `grunt.registerTask` call.