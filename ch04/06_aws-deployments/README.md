# Deploying to Amazon EC2

[Amazon EC2](http://aws.amazon.com/ec2/) is a scalable virtual computing environment on the cloud. Huge data companies (which started small) such as **Instagram** [rely on EC2](http://www.cio.com/article/716829/SSDs_Boost_Instagram_39_s_Speed_on_Amazon_EC2) solutions.

> Amazon Elastic Compute Cloud _(Amazon EC2)_ is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.

> Amazon EC2's simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon's proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers the tools to build failure resilient applications and isolate themselves from common failure scenarios.

On the subject of comparing Heroku to AWS, [other people have much better answers](http://stackoverflow.com/q/9802259/389745) for you than I might have.

# Introduction to [grunt-ec2](https://github.com/bevacqua/grunt-ec2)

I've created a package to deal with Amazon EC2 instances, and if you really want to find out how it works, I recommend sifting through the source code yourself. You might find some _interesting_ things. This package allows you, among other things, to create new EC2 instances on the Amazon cloud, deploy to them, or shut them down, all through Grunt without having to worry about doing anything by yourself.

When an instance is created, it is automatically provisioned with everything we'll need to get you up and running when you make a deployment. Your application must listen on port `8080`, or alternatively, if you choose to turn on `nginx`, then it can listen on any port, and the port must be provided as `NGINX_PROXY_PORT` in the `ec2` configuration, as we'll soon see.

Applications will be managed through [pm2](https://github.com/Unitech/pm2), a process manager that will keep our Node instance alive, act as a cluster, and allow us to swap code during deployments without experiencing any downtime.

On deployments, [grunt-ec2](https://github.com/bevacqua/grunt-ec2) will use `rsync` to transfer our project directory over `ssh` to the server. Individual files and folders can be ignored with an `.rsyncignore` file like the one below.

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

![aws.png][1]

# Setup

First and foremost you'll need an account on Amazon AWS. If you don't already have one, it's not hard to set one up, although they will ask you for your phone number as a verification method, they won't charge you anything the first year around. You can [get an account here](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html).

Once that's sorted out, you'll need to get a pair of _Access Keys (Access Key ID and Secret Access Key)_ for your account. You can [do that following this link](https://console.aws.amazon.com/iam/home?#security_credential). These will be used to enable **grunt-ec2** to do the work for you.

Next, we need to create a Security Group, and turn on acess from all IP addresses (using `0.0.0.0/0` in the `Source` field) to ports `22` (so that we can connect over `ssh` to our instances), and `80` (so humans can connect over `http` using a web browser). Note down the name for our security group.

Now all you have to do is, assuming you have an existing project you want to set up and deploy, install [grunt-ec2](https://github.com/bevacqua/grunt-ec2).

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

Of course, if you want to fine tune the configuration, you can [head over to the documentation](https://github.com/bevacqua/grunt-ec2) and sort that out on your own.

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

Other alternative deployment strategies available through Grunt include, but are _clearly not limited to_, [sftp](https://github.com/thrashr888/grunt-sftp-deploy), [ssh](https://github.com/andrewrjones/grunt-ssh), [rsync](https://github.com/jedrichards/grunt-rsync), and, as we saw earlier, [Heroku](https://github.com/bevacqua/buildfirst/tree/master/ch04/05_heroku-deployments).

![to-glory.gif][2]

  [1]: http://i.imgur.com/Yya9AIy.png
  [2]: http://i.imgur.com/Q5F5ivl.gif
