# JavaScript Application Design [![Build Status](https://travis-ci.org/buildfirst/buildfirst.svg?branch=master)](https://travis-ci.org/buildfirst/buildfirst)
#### _A Build First Approach_

![buildfirst.png][1]

Accompanying code samples and snippets for the _JavaScript Application Design: A Build First Approach_ book.

These are the accompanying code samples and snippets for a book I wrote about **JavaScript build processes and application architecture**. The samples are organized by chapter, and they appear in the same order as they do in the book, for convenience. Many [other resources for this book are listed in its website][2], such as links to _blog posts, articles, essays, books_, and any other particularly relevant topics discussed throughout the book.

#### Fell out of the skies and would like to learn more about the book?

You could [visit its landing page][3] to learn all about it!

Book buying frenzy? [Say no more, stranger!][4]

# Installation Pre-Requisites

You'll need **Node.js**. You can get the latest version [from their website][5], although I'd suggest using [`nvm`][6], which makes it super easy to install multiple versions, and switch between them.

You'll need [GraphicsMagick][20], and also `phantomjs`, to run some of the examples. PhantomJS comes in a module that you can conveniently install as a global.

```js
npm install -g phantomjs
```

[GraphicsMagick][20] comes in different distributions for OSX, Linux, and Windows, so please [refer to their site][20] to download the appropriate distribution. If you're on Ubuntu, I'd recommend installing it through `apt-get`. If you're on OSX, you can use `brew` to install it. These kinds of tooling download automation present the most benefits when you automate all of your development environment provisioning, enhancing consistency across fresh installs in your systems. As an example, [you can take a look at my dotfiles project][21], for reference.

# Installation

Once you have Node and the other tools you'll need, use the command below to clone this repository and install all of the dependencies:

```shell
curl https://raw.githubusercontent.com/buildfirst/buildfirst/master/install.sh | sh
```

<sub>If you're on **Windows** use `install-dos.sh`, instead.</sub>

> That's it! You are now free to _roam the sample directories_ and follow the instructions in each of them!

Manual installation instructions [can be found here][7], _but you shouldn't need any of that_.

# Execution

To run an example, read its [README.md][8] and follow the instructions I've placed there. I tried to make them as straightforward as possible, but sometimes they might not match the examples in the book to the letter.

There are some examples here that you _won't find on the book_, those will generally be a bit longer: exactly the reason why I _didn't include them_ in the book. Although the code itself might not be present in the book, most of the explaining will definitely be there, rather than here.

# Table of Contents

Here is a complete list of the code samples found in this repository.

- Chapter 1
  - [Lint Sample](https://github.com/buildfirst/buildfirst/tree/master/ch01/01_lint-sample)
- Chapter 2
  - [Intro to Grunt](https://github.com/buildfirst/buildfirst/tree/master/ch02/01_intro-to-grunt)
  - [LESS Task](https://github.com/buildfirst/buildfirst/tree/master/ch02/02_less-task)
  - [Bundle Task](https://github.com/buildfirst/buildfirst/tree/master/ch02/03_bundle-task)
  - [Minify Task](https://github.com/buildfirst/buildfirst/tree/master/ch02/04_minify-task)
  - [Bundle + Minify Task](https://github.com/buildfirst/buildfirst/tree/master/ch02/05_bundle-then-minify)
  - [Spritesheet Task](https://github.com/buildfirst/buildfirst/tree/master/ch02/06_spritesheet-task)
  - [Clean Task](https://github.com/buildfirst/buildfirst/tree/master/ch02/07_clean-task)
  - [Lint Task](https://github.com/buildfirst/buildfirst/tree/master/ch02/08_lint-task)
  - [Timestamp Task](https://github.com/buildfirst/buildfirst/tree/master/ch02/09_timestamp-task)
  - [MySQL Database Tasks](https://github.com/buildfirst/buildfirst/tree/master/ch02/10_mysql-tasks)
- Chapter 3
  - [Build Distributions](https://github.com/buildfirst/buildfirst/tree/master/ch03/01_distribution-config)
  - [Encrypt your configuration with RSA keys](https://github.com/buildfirst/buildfirst/tree/master/ch03/02_rsa-config-encryption)
  - [Merge configuration sources](https://github.com/buildfirst/buildfirst/tree/master/ch03/03_merging-config)
  - [The Grunt `watch` Task](https://github.com/buildfirst/buildfirst/tree/master/ch03/04_watch-task)
  - [Investing in a better `watch`](https://github.com/buildfirst/buildfirst/tree/master/ch03/05_better-watch-closely)
  - [Using `nodemon`](https://github.com/buildfirst/buildfirst/tree/master/ch03/06_nodemon)
  - [Embracing LiveReload](https://github.com/buildfirst/buildfirst/tree/master/ch03/07_livereload)
- Chapter 4
  - [Image Optimization](https://github.com/buildfirst/buildfirst/tree/master/ch04/01_image-optimization)
  - [Inlining Critical CSS](https://github.com/buildfirst/buildfirst/tree/master/ch04/01b_critical-inlining)
  - [Static Asset Hashing](https://github.com/buildfirst/buildfirst/tree/master/ch04/02_asset-hashing)
  - [Version Bumping](https://github.com/buildfirst/buildfirst/tree/master/ch04/03_version-bump)
  - [Conventional Changelogs](https://github.com/buildfirst/buildfirst/tree/master/ch04/04_conventional-changelog)
  - [Deployments with Heroku](https://github.com/buildfirst/buildfirst/tree/master/ch04/05_heroku-deployments)
  - [_Build First_, Deploy, Build Again](https://github.com/buildfirst/heroku-grunt)
  - [Deploying to Amazon EC2](https://github.com/buildfirst/buildfirst/tree/master/ch04/07_aws-deployments)
  - [Continuous Integration](https://github.com/buildfirst/ci-by-example)
  - [Logging with `winston`](https://github.com/buildfirst/buildfirst/tree/master/ch04/09_logging-with-winston)
  - [A Node Cluster](https://github.com/buildfirst/buildfirst/tree/master/ch04/10_a-node-cluster)
  - [Cluster via `pm2`](https://github.com/buildfirst/buildfirst/tree/master/ch04/11_cluster-by-pm2)
- Chapter 5
  - [Single Reponsibility Principle](https://github.com/buildfirst/buildfirst/tree/master/ch05/01_single-responsibility-principle)
  - [Information Hiding](https://github.com/buildfirst/buildfirst/tree/master/ch05/02_information-hiding)
  - [Context Scoping](https://github.com/buildfirst/buildfirst/tree/master/ch05/03_context-scoping)
  - [Hoisting](https://github.com/buildfirst/buildfirst/tree/master/ch05/04_hoisting)
  - [Closures](https://github.com/buildfirst/buildfirst/tree/master/ch05/05_closures)
  - [Prototypal Modularity](https://github.com/buildfirst/buildfirst/tree/master/ch05/06_prototypal-modularity)
  - [Common.JS Modules](https://github.com/buildfirst/buildfirst/tree/master/ch05/07_commonjs-modules)
  - [Dependency Graphs](https://github.com/buildfirst/buildfirst/tree/master/ch05/08_dependency-graphs)
  - [Using RequireJS](https://github.com/buildfirst/buildfirst/tree/master/ch05/09_requirejs-usage)
  - [Compiling RequireJS during builds](https://github.com/buildfirst/buildfirst/tree/master/ch05/10_requirejs-grunt)
  - [Browserify + Common.JS](https://github.com/buildfirst/buildfirst/tree/master/ch05/11_browserify-cjs)
  - [Angular.js Dependencies](https://github.com/buildfirst/buildfirst/tree/master/ch05/12_angularjs-dependencies)
  - [Leveraging Bower Packages](https://github.com/buildfirst/buildfirst/tree/master/ch05/13_bower-packages)
  - [Adopting Component](https://github.com/buildfirst/buildfirst/tree/master/ch05/14_adopting-component)
  - [Automated Component Build Step](https://github.com/buildfirst/buildfirst/tree/master/ch05/15_automate-component-build)
  - [Circular Dependencies](https://github.com/buildfirst/buildfirst/tree/master/ch05/16_circular-dependencies)
  - [Harmony through Traceur, using Grunt](https://github.com/buildfirst/buildfirst/tree/master/ch05/17_harmony-traceur)
- Chapter 6
  - [Callback Hell](https://github.com/buildfirst/buildfirst/tree/master/ch06/01_callback-hell)
  - [Requests Upon Requests](https://github.com/buildfirst/buildfirst/tree/master/ch06/02_requests-upon-requests)
  - [Error Handling](https://github.com/buildfirst/buildfirst/tree/master/ch06/03_async-error-handling)
  - [Flow](https://github.com/buildfirst/buildfirst/tree/master/ch06/04_async-flow)
  - [Functional Tasks](https://github.com/buildfirst/buildfirst/tree/master/ch06/05_async-functional)
  - [Queue](https://github.com/buildfirst/buildfirst/tree/master/ch06/05_async-queue)
  - [Composition](https://github.com/buildfirst/buildfirst/tree/master/ch06/05_async-composition)
  - [Promise Basics](https://github.com/buildfirst/buildfirst/tree/master/ch06/08_promise-basics)
    - [A Basic Promise](https://github.com/buildfirst/buildfirst/tree/master/ch06/08_promise-basics/01_basic.js)
    - [Continuation](https://github.com/buildfirst/buildfirst/tree/master/ch06/08_promise-basics/02_thenable.js)
    - [Asynchronous Promises](https://github.com/buildfirst/buildfirst/tree/master/ch06/08_promise-basics/03_async-promise.js)
    - [Transforming Values](https://github.com/buildfirst/buildfirst/tree/master/ch06/08_promise-basics/04_transforming-values.js)
    - [Chaining Promises](https://github.com/buildfirst/buildfirst/tree/master/ch06/08_promise-basics/05_chaining-promises.js)
  - [Promise Flows](https://github.com/buildfirst/buildfirst/tree/master/ch06/09_promise-flow)
    - [Concurrent Flow](https://github.com/buildfirst/buildfirst/tree/master/ch06/09_promise-flow/01_concurrent.js)
    - [Functional Transformations](https://github.com/buildfirst/buildfirst/tree/master/ch06/09_promise-flow/02_funcitonal.js)
  - [Error Handling Promises](https://github.com/buildfirst/buildfirst/tree/master/ch06/10_promise-error-handling)
  - [Event Emitters](https://github.com/buildfirst/buildfirst/tree/master/ch06/11_event-emitter)
  - [Generator Basics](https://github.com/buildfirst/buildfirst/tree/master/ch06/12_generator-basics)
    - [Infinite Sequence](https://github.com/buildfirst/buildfirst/tree/master/ch06/12_generator-basics/01_fibonacci-sequence.js)
    - [Iterate Using For Of](https://github.com/buildfirst/buildfirst/tree/master/ch06/12_generator-basics/02_for-of.js)
  - [Asynchronicity and Generators](https://github.com/buildfirst/buildfirst/tree/master/ch06/13_generator-flow)
- Chapter 7
  - [Views](https://github.com/buildfirst/buildfirst/tree/master/ch07/01_backbone-views)
  - [View Templates](https://github.com/buildfirst/buildfirst/tree/master/ch07/02_backbone-view-templates)
  - [Models](https://github.com/buildfirst/buildfirst/tree/master/ch07/03_backbone-models)
  - [Collections](https://github.com/buildfirst/buildfirst/tree/master/ch07/04_backbone-collections)
  - [Routing](https://github.com/buildfirst/buildfirst/tree/master/ch07/05_backbone-routing)
  - [Shopping List](https://github.com/buildfirst/buildfirst/tree/master/ch07/06_shopping-list)
  - [The One With Delete Buttons](https://github.com/buildfirst/buildfirst/tree/master/ch07/07_the-one-with-delete-buttons)
  - [Creating Items](https://github.com/buildfirst/buildfirst/tree/master/ch07/08_creating-items)
  - [Item Editing](https://github.com/buildfirst/buildfirst/tree/master/ch07/09_item-editing)
  - [The Road Show](https://github.com/buildfirst/buildfirst/tree/master/ch07/10_the-road-show)
  - [Entourage](https://github.com/buildfirst/buildfirst/tree/master/ch07/11_entourage)
  - [Full Metal Jacket](https://github.com/buildfirst/buildfirst/tree/master/ch07/12_full-metal-jacket)
- Chapter 8
  - [Your First `tape` Test](https://github.com/buildfirst/buildfirst/tree/master/ch08/01_your-first-tape-test)
  - [`tape` In The Browser](https://github.com/buildfirst/buildfirst/tree/master/ch08/02_tape-in-the-browser)
  - [Arrange Act Assert: Testing An Event Emitter](https://github.com/buildfirst/buildfirst/tree/master/ch08/03_arrange-act-assert)
  - [Spying on Function Calls](https://github.com/buildfirst/buildfirst/tree/master/ch08/04_spying-on-function-calls)
  - [Proxying Your Dependencies](https://github.com/buildfirst/buildfirst/tree/master/ch08/05_proxying-your-dependencies)
  - [Fake `XMLHttpRequest` Requests](https://github.com/buildfirst/buildfirst/tree/master/ch08/06_fake-xhr-requests)
  - [DOM Interaction Testing](https://github.com/buildfirst/buildfirst/tree/master/ch08/07_dom-interaction-testing)
  - [Testability Boulevard](https://github.com/buildfirst/buildfirst/tree/master/ch08/07b_testability-boulevard)
  - [Grunt `tape` Automation (Node)](https://github.com/buildfirst/buildfirst/tree/master/ch08/08_grunt-tape-node)
  - [Grunt `tape` Automation (Browser)](https://github.com/buildfirst/buildfirst/tree/master/ch08/09_grunt-tape-browser)
  - [Visual Testing](https://github.com/buildfirst/buildfirst/tree/master/ch08/10_visual-testing)
  - [Google PageSpeed Insights](https://github.com/buildfirst/buildfirst/tree/master/ch08/11_pagespeed-insights)
  - [Yahoo YSlow](https://github.com/buildfirst/buildfirst/tree/master/ch08/12_yahoo-yslow)
- Chapter 9
  - [A `measly` client-side layer](https://github.com/buildfirst/buildfirst/tree/master/ch09/01_a-measly-client-side-layer)
- Appendix A: Introduction to Grunt
  - [Getting Started](https://github.com/buildfirst/buildfirst/tree/master/appendix/introduction-to-grunt/01_getting-started)
  - [Globbing Patterns](https://github.com/buildfirst/buildfirst/tree/master/appendix/introduction-to-grunt/02_globbing-patterns)
  - [Combining and Minifying your CSS](https://github.com/buildfirst/buildfirst/tree/master/appendix/introduction-to-grunt/03_cssmin-task)
  - [Writing Your Own Task](https://github.com/buildfirst/grunt-wordcount)
- Appendix C: Picking Your Build Tool
  - [Running JSHint via CLI](https://github.com/buildfirst/buildfirst/tree/master/appendix/picking-your-build-tool/01_npm-run-jshint)
  - [Chaining tasks together](https://github.com/buildfirst/buildfirst/tree/master/appendix/picking-your-build-tool/02_npm-run-tests)
  - [Running tasks asynchronously](https://github.com/buildfirst/buildfirst/tree/master/appendix/picking-your-build-tool/03_npm-run-build)
  - [Displaying emoji via a script](https://github.com/buildfirst/buildfirst/tree/master/appendix/picking-your-build-tool/04_npm-run-emoji)
  - [JSHint in Gulp](https://github.com/buildfirst/buildfirst/tree/master/appendix/picking-your-build-tool/05_gulp-test)
  - [Building with Gulp](https://github.com/buildfirst/buildfirst/tree/master/appendix/picking-your-build-tool/06_gulp-build)

# Release History

This is the list of releases to date. You can feel free to simply clone `master`, to get the most up-to-date version.

- [Final Review][19]
- [Two Thirds Review][18]
- [One Third Review][9]

You can find [the repository up on GitHub][10], which contains the latest updates to the samples, and interactively renders the Markdown code in this text, displaying images, making code prettier, styling the text, and letting you follow links.

### Troubleshooting

If you run into any problems, please create an issue [here][11]. Maybe it's something that needs fixing. If you feel like contributing, that's awesome! Just fork this repo and create a [pull request][12] with your fixes or improvements.

### Feedback

Feedback **about the book itself** should be posted on the [Manning Online Author Forum][13]. You can drop me a line at [buildfirst@bevacqua.io][14] if you want to leave me _a more personal note_, just say hi, or grunt at me about my failure to amuse you. I'd love to hear from you!

You can also find me blogging at [Pony Foo][15]. My Twitter account is [@nzgb][16], and I enjoy people stalking me over the Internet!

Let the [**#buildfirst**][17] revolution commence!

  [1]: http://www.gravatar.com/avatar/cee019b251cf09f440b4427541e46cb8.png?s=320
  [2]: http://bevacqua.io/buildfirst/resources "#buildfirst resources"
  [3]: http://bevacqua.io/buildfirst "JavaScript Application Design: A Build First Approach"
  [4]: http://bevacqua.io/bf/book "Get the book from Manning!"
  [5]: http://nodejs.org/download/ "Node.js Downloads"
  [6]: https://github.com/creationix/nvm "Node Version Manager"
  [7]: https://github.com/buildfirst/buildfirst/blob/master/wiki/installation-manual.md "Manual Installation Instructions"
  [8]: README.md "To understand recursion, you must first understand recursion"
  [9]: https://github.com/buildfirst/buildfirst/releases/tag/v0.0.1 "Tagged v0.0.1"
  [10]: https://github.com/buildfirst/buildfirst "JavaScript Application Design Code Sample Repository"
  [11]: https://github.com/buildfirst/buildfirst/issues "JavaScript Application Design Code Sample Repository Issues"
  [12]: https://help.github.com/articles/using-pull-requests "Using Pull Requests"
  [13]: http://www.manning-sandbox.com/forum.jspa?forumID=888 "Author Online Forum for JavaScript Application Design"
  [14]: mailto:buildfirst@bevacqua.io "Contact me by mail"
  [15]: http://blog.ponyfoo.com "Pony Foo"
  [16]: https://twitter.com/nzgb "@nzgb on Twitter"
  [17]: https://twitter.com/#buildfirst "#buildfirst on Twitter"
  [18]: https://github.com/buildfirst/buildfirst/releases/tag/v0.0.2 "Tagged v0.0.2"
  [19]: https://github.com/buildfirst/buildfirst/releases/tag/v0.1.0 "Tagged v0.1.0"
  [20]: http://www.graphicsmagick.org/ "GraphicsMagick site"
  [21]: https://github.com/bevacqua/dotfiles "My dotfiles"

![ga](https://ga-beacon.appspot.com/UA-35043128-6/buildfirst/readme?pixel)
