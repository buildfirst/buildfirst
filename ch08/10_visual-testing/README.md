# Visual Testing

In this example I showcase how to use [`grunt-photobox`][2] passing it the URL to an environment, and having it take pictures. Since we're using Grunt, we can set it up so that these tests run on every build, letting us know of any difference. Besides that, you can simply skim through the screenshots for yourself, and check whether they look just fine or something doesn't quite add up.

Configuring `photobox` is mostly a matter of choosing the _URL(s)_ and desired viewport size for the screenshots. This is particularly useful for responsive web designs.

```js
photobox: {
  buildfirst: {
    options: {
      urls: ['http://bevacqua.io/bf'],
      indexPath: 'build/photobox',
      screenSizes: ['320', '960', '1440'] // these must be strings
    }
  }
}
```

Next, run the following command in your terminal.

```shell
grunt photobox
```

You'll get a result like this.

![photobox.png][1]

That's it!

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/photobox.png
[2]: https://github.com/stefanjudis/grunt-photobox
