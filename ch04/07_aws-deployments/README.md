# Deploying to Amazon EC2

[Amazon EC2][1] is a scalable virtual computing environment on the cloud. Huge data companies (which started small) such as **Instagram** [rely on EC2][2] solutions.

> Amazon Elastic Compute Cloud _(Amazon EC2)_ is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.

> Amazon EC2's simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon's proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers the tools to build failure resilient applications and isolate themselves from common failure scenarios.

On the subject of comparing Heroku to AWS, [other people have much better answers][3] for you than I might have.

# Introduction to [grunt-ec2][4]

I've created a package to deal with Amazon EC2 instances, and if you really want to find out how it works, I recommend sifting through the source code yourself. You might find some _interesting_ things. This package allows you, among other things, to create new EC2 instances on the Amazon cloud, deploy to them, or shut them down, all through Grunt without having to worry about doing anything by yourself.

When an instance is created, it is automatically provisioned with everything we'll need to get you up and running when you make a deployment. Your application must listen on port `8080`, or alternatively, if you choose to turn on `nginx`, then it can listen on any port, and the port must be provided as `NGINX_PROXY_PORT` in the `ec2` configuration, as we'll soon see.

Applications will be managed through [pm2][5], a process manager that will keep our Node instance alive, act as a cluster, and allow us to swap code during deployments without experiencing any downtime.

On deployments, [grunt-ec2][4] will use `rsync` to transfer our project directory over `ssh` to the server. Individual files and directories can be ignored with an `.rsyncignore` file like the one below.

```
# vcs files
.git

# sensitive data
env/cert
env/private/*

# unnecessary on deployed applications
env/secure
build
deploy
test

# will `npm install --production` on the server
node_modules
```

You can further specify include and exclude patterns, as described in the documentation. Once the files arrive at the EC2 instance, we'll install dependencies with `npm install --production`, and then reload the application using `pm2 reload all`.

![aws.png][6]

# Setup

First and foremost you'll need an account on Amazon AWS. If you don't already have one, it's not hard to set one up, although they will ask you for your phone number as a verification method, they won't charge you anything the first year around. You can [get an account here][7].

Once that's sorted out, you'll need to get a pair of _Access Keys (Access Key ID and Secret Access Key)_ for your account. You can [do that following this link][8]. These will be used to enable **grunt-ec2** to do the work for you.

Next, we need to create a Security Group, and turn on acess from all IP addresses (using `0.0.0.0/0` in the `Source` field) to ports `22` (so that we can connect over `ssh` to our instances), and `80` (so humans can connect over `http` using a web browser). Note down the name for our security group.

Now all you have to do is, assuming you have an existing project you want to set up and deploy, install [grunt-ec2][4].

```shell
npm install grunt-ec2 --save-dev
```

Lastly, we'll need to configure `grunt-ec2`. This is the easy part. We'll need to provide `grunt.initConfig` with a key named `ec2`, and provide the information we've been gathering so far. We could either provide the configuration object directly, or provide a string with the path to a JSON file. Like this:

```js
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  ec2: 'private/ec2.json'
});
```

Note that the `pkg` is used to take the package version when deploying. In `ec2.json`, the configuration would be something like this.

```json
{
  "AWS_ACCESS_KEY_ID": "A2QL5WALQKDAIPGZMU3B",
  "AWS_SECRET_ACCESS_KEY": "tn48A9BgKMiauKXX9tVP3p71IEVyFr3B9lcYiKpS",
  "AWS_SECURITY_GROUP": "something"
}
```

Of course, if you want to fine tune the configuration, you can [head over to the documentation][4] and sort that out on your own.

# Usage

Now that we're all set comes the easy part. Creating an instance is as simple as picking a name, and then using the `ec2_launch` task.

```shell
grunt ec2_launch:staging
```

The instance will be tagged with the name we provided, assigned an static IP address, and an `ssh` RSA key pair will be generated for the instance. The `name` can be anything, but I recommend using `staging` and `production` for formal instances, and funny names for anything else, like `rocket`.

At any time, we can terminate our instances cleanly using the `ec2_shutdown` task, like below.

```shell
grunt ec2_shutdown:staging
```

This task will not just terminate the instance, but also perform some cleanup tasks in releasing the static IP address allocated to the instance, remove the key pair from AWS, delete the name tag so we can re-use it.

When we're good to go, we should set up a workflow (in a Grunt task alias), that builds and then deploys. We need to **Build First** because `rsync` will send whatever there is currently in our working directory, and not just something taken from `git`. While useful, this can be dangerous too, an alias task minimizes that risk.

```js
grunt.registerTask('deploy', ['build:release', 'ec2_deploy:staging']);
grunt.registerTask('deploy:production', ['build:release', 'ec2_deploy:production']);
```

Obviously, we'll need to have created the instances first using `ec2_launch`. Now, every time we run `grunt deploy` our application will be built and deployed to our EC2 instance, which will be immediately accessible.

Other alternative deployment strategies available through Grunt include, but are _clearly not limited to_, [sftp][9], [ssh][10], [rsync][11], and _Heroku_, as we saw earlier, in [**ch04e05** Heroku Deployments][12].

![to-glory.gif][13]

You might want to check out [unbox][14], which makes use of [grunt-ec2][4] and contains some structure for prototyping applications.

  [1]: http://aws.amazon.com/ec2/
  [2]: http://www.cio.com/article/716829/SDs_Boost_Instagram_39_s_Speed_on_Amazon_EC2
  [3]: http://stackoverflow.com/q/9802259/389745
  [4]: https://github.com/bevacqua/grunt-ec2
  [5]: https://github.com/Unitech/pm2
  [6]: http://i.imgur.com/Yya9AIy.png
  [7]: https://portal.aws.amazon.com/gp/aws/developer/registration/index.html
  [8]: https://console.aws.amazon.com/iam/home?#security_credential
  [9]: https://github.com/thrashr888/grunt-sftp-deploy
  [10]: https://github.com/andrewrjones/grunt-ssh
  [11]: https://github.com/jedrichards/grunt-rsync
  [12]: https://github.com/buildfirst/buildfirst/tree/master/ch04/05_heroku-deployments "Heroku Deployments"
  [13]: http://i.imgur.com/Q5F5ivl.gif
  [14]: https://github.com/bevacqua/unbox
