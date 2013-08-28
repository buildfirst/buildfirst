# MySQL Database Tasks

This is our most complex usage of Grunt so far. I tried to comment on the tasks as much as possible. The database connection is configured with sensible defaults in [**db.json**](db.json "Database JSON configuration"), but feel free to edit as needed.

For this sample to work you'll need a server instance of MySQL. This instance can be local or remote. If you're using a local instance and you've installed it with the default setup configuration (`root@localhost:3306`, no password), you should be able to run the Grunt tasks without any further ceremony.

You can change the connection credentials using [**db.json**](db.json "Database JSON configuration"). MySQL installation instructions [can be found here](http://dev.mysql.com/doc/refman/5.1/en/installing.html "Installing and Upgrading MySQL").

Note that we're using a `db.json` file rather than passing in database connection information just so that we don't need to pass the same arguments over and over. In a more realistic setting, these variables should be passed to our application in some way, as we'll discover in later chapters.

The `db_create` task will create the database using the provided name. To run it, simply type:

```bash
grunt db_create
```

Keep in mind it won't drop and re-create an existing database. Then, to fill the database with its schema, we need to use `db_upgrade`, like this:

```bash
grunt db_upgrade
```

The `db_upgrade` task will also create a table called `__v` to keep track of the schema versions, helping us make sure we don't run an upgrade script twice, and enabling us to roll those schema changes back.