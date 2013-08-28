# MySQL Database Tasks

This is our most complex usage of Grunt so far. I tried to comment on the tasks as much as possible. The database connection is configured with sensible defaults in [**db.json**](db.json "Database JSON configuration"), but feel free to edit as needed.

### Setup

For this sample to work you'll need a server instance of MySQL. This instance can be local or remote. If you're using a local instance and you've installed it with the default setup configuration (`root@localhost:3306`, no password), you should be able to run the Grunt tasks without any further ceremony.

You can change the connection credentials using [**db.json**](db.json "Database JSON configuration"). MySQL installation instructions [can be found here](http://dev.mysql.com/doc/refman/5.1/en/installing.html "Installing and Upgrading MySQL").

Note that we're using a `db.json` file rather than passing in database connection information just so that we don't need to pass the same arguments over and over. In a more realistic setting, these variables should be passed to our application in some way, as we'll discover in later chapters.

### `db_create` Task: Create the database

The `db_create` task will create the database using the provided name. To run it, simply type:

```bash
grunt db_create
```

Keep in mind it won't drop and re-create an existing database.

### `db_upgrade` Task: Update the schema

To update the database with the latest schema changes, we'll be using `db_upgrade`, like this:

```bash
grunt db_upgrade
```

The `db_upgrade` Grunt task will look for `*.up.sql` files in the `scripts/` folder and execute their SQL in sequence on our database. It will also create a table called `__v` to keep track of the schema versions, helping us make sure we don't run an upgrade script twice, and enabling us to roll those schema changes back.

Script names are relevant in that they will be run in the order `grunt.file.expand` produces, so it's probably a good idea to use a naming convention such as `YYYYMMDD.RV_script-description` so that they are always executed in the order they were created in the first place.

### `db_seed` Task: Fill with fake data

For first-time environment setups, we have a handy task that will fill the database with data our developers can play with. This is useful to reduce the time it takes our developers to get up and running in a new development environment.

To use, just execute the task:

```bash
grunt db_seed
```

This will run all `*.seed.sql` scripts, there are no roll-back safe guards here, but that should be fine since it's only going to be executed manually.

A good first-time setup alias might be:

```js
grunt.registerTask('db_setup', 'Create, update, and seed a new database', ['db_create', 'db_upgrade', 'db_seed']);
```

### `db_rollback` Task: Undo a schema change

Sometimes we'll want to roll back the changes made by a particular upgrade script. We'll expect all commiters of schema changes to provide both the `.up.sql` and `.down.sql` versions of their change, so you can switch them back and forth. This is generally useful for testing, but it also helps when things go awry.

The `db_rollback` task will simply execute the `.down.sql` script for the last applied schema change. Each time we run this task, the latest schema change that is applied gets rolled back. Helping us to course-correct our schema change scripts more easily and productively.

To use, just do like with all other `db_*` tasks:

```bash
grunt db_rollback
```

That's all there is to our custom approach to automated MySQL database migration task suite. This doesn't aim to be a perfect, or production-grade database schema manager, but it suffices to demonstrate the power of automation in a case such as this where we took what's usually a really complicated and error prone process, and made it boil down to just four simple commands.

After that, all that's remaining is keeping the actual SQL up to date.