# Timestamp Task

This example showcases how to write your own Grunt tasks, as discussed in chapter 2 of the book.

To run this example, write the following in your terminal:

```bash
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

For more information about the Grunt Task API, visit [this link](http://gruntjs.com/api/grunt)