# [Google PageSpeed Insights][5]

![pagespeed.png][1]

In this sample I'll help you set up [`grunt-pagespeed`][2] to run an analysis of your site whenever you like, through Grunt.

The configuration takes a URL and gives you a performance score. You'll also need an API key from Google. You can [get one here][4].

Run the example using the code below.

```shell
PAGESPEED_KEY=$YOUR_API_KEY grunt pagespeed:desktop
```

That's it!

![pagespeed-grunt.png][3]

[1]: https://raw.github.com/buildfirst/buildfirst/master/images/pagespeed.png
[2]: https://github.com/jrcryer/grunt-pagespeed
[3]: https://raw.github.com/buildfirst/buildfirst/master/images/pagespeed-grunt.png
[4]: https://code.google.com/apis/console
[5]: https://developers.google.com/speed/docs/insights/
