# Angular.js Dependency Resolution

[![angularjs.png][1]][2]

[Angular.js][2] is a innovative client-side MVC framework developed at **Google**. Applications interact with the DOM through [directives][3], access REST interfaces (and other logic) through [services][4], and everything gets tied together in [controllers][5]. [Views][6] can be made up of regular HTML elements, decorated with special attributes. Custom elements can be used as well. These elements become data-bound to [Angular scopes][7], not to be confused with JavaScript scopes we've talked about earlier. Angular scopes can be defined by directives, controllers, and there is also a [root scope][8].

There's **a lot more** to understanding Angular yet, but this should get us going for now. I'll be getting back to the _inner workings_ of Angular in Chapter 7. Until then, we will just focus on its [dependency resolver][9]. Run the example from your shell, using:

```shell
google-chrome test.html
```

<sub>(or just open `test.html` in your favorite browser)</sub>

Note that this sample merely outputs a few values to the developer console, so you better open it up!

_A deeper analysis of the behavior and _inner workings_ of Angular can be found in the book._

  [1]: http://i.imgur.com/SN9pdq1.png
  [2]: http://angularjs.org
  [3]: http://docs.angularjs.org/guide/directive
  [4]: http://docs.angularjs.org/guide/dev_guide.services.creating_services
  [5]: http://docs.angularjs.org/guide/controller
  [6]: http://docs.angularjs.org/tutorial/step_07
  [7]: http://docs.angularjs.org/guide/scope
  [8]: http://docs.angularjs.org/api/ng.$rootScope
  [9]: http://bevacqua.io/angular-di
