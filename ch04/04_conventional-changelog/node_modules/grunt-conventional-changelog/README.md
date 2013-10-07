# grunt-conventional-changelog  [![Build Status](https://secure.travis-ci.org/btford/grunt-conventional-changelog.png?branch=master)](http://travis-ci.org/btford/grunt-conventional-changelog)

Generate a changelog from git metadata, using [these](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/) conventions.

## Example output
- https://github.com/btford/grunt-conventional-changelog/blob/master/CHANGELOG.md
- https://github.com/karma-runner/karma/blob/master/CHANGELOG.md

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-conventional-changelog --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-conventional-changelog');
```

## Overview
In your project's Gruntfile, add a section named `changelog` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  changelog: {
    options: {
      // Task-specific options go here.
    }
  },
})
```

## Options

### dest
Defaults to `CHANGELOG.md`. The destination to write the changelog.

### prepend
Defaults to `true`. If true, prepend new log info to `dest`. If `false`, append new log info.

### github
Specifies the github repository to use to link to commits in the changelog.

By default, tries to find a github repository from the information in `package.json`.

Allows a full repository url, or simply `username/repository`.

Example configurations:
```js
github: 'btford/grunt-conventional-changelog'
```
```js
github: 'http://github.com/angular/angular.js'
```

### version
A string which contains the value of the version which is used by grunt-conventional-changelog.
If no version is specified, grunt-conventional-changelog looks for the version in `pkg.version`.

### editor
If specified, it runs given command before finishing the task. This is useful if you want to manually polish the generated changelog.

For instance you can set it to `sublime -w`.

## License
BSD
