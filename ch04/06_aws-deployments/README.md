# Deploying to Amazon EC2

[Amazon EC2](http://aws.amazon.com/ec2/) is a scalable virtual computing environment on the cloud. Huge data companies (which started small) such as **Instagram** [rely on EC2](http://www.cio.com/article/716829/SSDs_Boost_Instagram_39_s_Speed_on_Amazon_EC2) solutions.

> Amazon Elastic Compute Cloud _(Amazon EC2)_ is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.

> Amazon EC2's simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon's proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers the tools to build failure resilient applications and isolate themselves from common failure scenarios.

On the subject of comparing Heroku to AWS, [other people have much better answers](http://stackoverflow.com/q/9802259/389745) for you than I might have.

# Interacting with EC2 through [grunt-ec2](https://github.com/bevacqua/grunt-ec2)

I've created a package to deal with Amazon EC2 instances, and if you really want to find out how it works, I recommend sifting through the source code yourself. You might find some interesting things.


----

MORE
