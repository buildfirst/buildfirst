# Deployments with Heroku

This sample is a showcase of how to approach deployments to the [Heroku](http://heroku.com) platform. I'll leave the first series of steps to you. This tutorial is entirely free.

- [Create an account](https://api.heroku.com/signup/devcenter) on Heroku

Every tutorial starts like this. I'll be thrilled the day they don't!

- Install the [Heroku Toolbelt](https://toolbelt.heroku.com/)

A series of command-line programs that help you manage your applications hosted on Heroku. Follow the instructions to run `heroku login` on the [toolbelt site](https://toolbelt.heroku.com/).

You'll then need a `Procfile`, we mention that in the book. I wrote one so we don't have to go through that again.

Now, there's a few more steps you need to take, `cd` into this directory, `05_heroku-deployments`, and then execute the following in your shell, to initialize a `git` repository:

```shell
git init
git add .
git commit -m "init"
```

Then, there's only two more steps, let's create the app on Heroku. This is _a one time thing_.

```shell
heroku create
```

On every deploy we want to make, we can simply push to the `heroku` remote.

```shell
git push heroku master
```

If you want to pull up the application in the browser, just use:

```shell
heroku open
```

# Managing Environments

If we want to set ourselves up so that we can [host multiple environments on Heroku](https://devcenter.heroku.com/articles/multiple-environments), such as `staging` and `production`, we simply use different `git remote`s to achieve this. Create a remote other than `heroku`:

```shell
heroku create --remote staging
```

Instead of `git push heroku master`, we should now do `git push staging master`, instead. Similarly, instead of being able to just `heroku config:set FOO=bar`, we now need to explicitly tell `heroku` to use a particular remote, such as `heroku config:set FOO=bar --remote staging`. Remember environment configuration is environment-specific.

There's lots more of useful information you can read on [Heroku's documentation site](https://devcenter.heroku.com/articles/getting-started-with-nodejs), in case you're interesed. I should mention what's in this tutorial should suffice, for now.

### (then talk about managing environments in heroku apps)
