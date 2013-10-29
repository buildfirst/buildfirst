# Deployments with Heroku

![paas-heroku.jpg][3]

This sample is a showcase of how to approach deployments to the [Heroku](http://heroku.com) platform. You don't have to shell out a dime, _Heroku offers a free tier_ we can play with.

### :rocket: [ Create an account](https://id.heroku.com/signup/devcenter) on Heroku

Every tutorial starts like this. I'll be thrilled the day they don't!

### Install the [Heroku Toolbelt](https://toolbelt.heroku.com/)

A series of command-line programs that help you manage your applications hosted on Heroku. Installing the CLI tools should be straightforward enough.

### Prepare your repository

You'll then need a [**Procfile**](https://devcenter.heroku.com/articles/procfile), we mention that in the book. I wrote one so we don't have to go through that again.

Now, there's a few more steps you need to take, `cd` into this directory, `05_heroku-deployments`, and then execute the following in your shell, to initialize a `git` repository:

```shell
git init
git add .
git commit -m "init"
```

### Authenticate with the CLI

To use the Heroku toolbelt, we need to authenticate with Heroku. Use `heroku login` to input the credentials to your account.

![heroku-auth.png][2]

### Create the Application on Heroku

Only a few more steps! Let's create the app on Heroku.

```shell
heroku create
```

### Deploy!

On every deploy we want to make, we can simply push to the `heroku` remote (which was created by the CLI in the previous step).

```shell
git push heroku master
```

This results in something similar to the screenshot below.

![heroku-push.png][1]

##### Troubleshoot

You might see an error about your RSA key not being uploaded to Heroku, in which case you should create and upload one. The message will say something like: `Permission denied (publickey).`. Don't fret, it's _really easy_ to work around!

```shell
cd ~/.ssh
ssh-keygen -t rsa -C "you@place.com"
heroku keys:add
```

Now you can go back to your repository and try to push again.

### See it in action!

If you want to pull up the application in the browser, just use:

```shell
heroku open
```

## Managing Environments

If we want to set ourselves up so that we can [host multiple environments on Heroku](https://devcenter.heroku.com/articles/multiple-environments), such as `staging` and `production`, we simply use different `git remote`s to achieve this. Create a remote other than `heroku`:

```shell
heroku create --remote staging
```

Instead of doing `git push heroku master`, we now need to specify the `staging` remote: `git push staging master`. Similarly, we must tell `heroku` to use a particular remote, such as `heroku config:set FOO=bar --remote staging`. Remember configuration on Heroku is **environment-specific**.

There's lots more of useful information you can read on [Heroku's documentation site](https://devcenter.heroku.com/articles/getting-started-with-nodejs), in case you're interested. I should mention _what's in this tutorial should suffice, for now_.

  [1]: http://i.imgur.com/bUFbX4D.png "Pushing to a Heroku remote"
  [2]: http://i.imgur.com/xKEeGDv.png "Authenticating with Heroku CLI"
  [3]: http://i.imgur.com/0IbfRuR.jpg "Heroku Platform"
