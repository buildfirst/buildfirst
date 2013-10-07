<a name="v1.0.0"></a>
## v1.0.0 (2013-07-17)


#### Bug Fixes

* append if prepend set to false ([bdc56349](https://github.com/btford/grunt-conventional-changelog/commit/bdc563498d21de2be468c38ed3791825f4646146))
* Write whether file exists or not ([a2f663c0](https://github.com/btford/grunt-conventional-changelog/commit/a2f663c0c08bd7cbc6316389d89d6c327b0bd7db))


#### Features

* parse multiple "Closes" definitions ([57e93d77](https://github.com/btford/grunt-conventional-changelog/commit/57e93d77de638d7701d6df837f216ca79ccf18fa))
* parse Closes/Fixes from subject ([8bcd7a39](https://github.com/btford/grunt-conventional-changelog/commit/8bcd7a39c2e32cad775af874d26ec91cb56a3a4e))
* replace with the changelog task from karma ([25a01c7c](https://github.com/btford/grunt-conventional-changelog/commit/25a01c7c7e55bcc2f87fb34e850b6c254f70ee7f))

<a name="v0.1.2"></a>
### v0.1.2 (2013-06-23)


#### Bug Fixes

* **log:** correctly generate links to GitHub commits ([de15bde5](https://github.com/btford/grunt-conventional-changelog/commit/de15bde55e4ed11fc33c85c43f8ffdf7d01efe2f))

<a name="v0.1.1"></a>
### v0.1.1 (2013-06-11)


#### Bug Fixes

* **task:** Fix shelljs dependency problem ([2db8cf96](https://github.com/btford/grunt-conventional-changelog/commit/2db8cf969b2ac0aa4d2f9f6ab908b3f7f96f8cf2))

<a name="v0.1.0"></a>
## v0.1.0 (2013-05-30)


#### Bug Fixes

* **gruntfile:** load package.json ([8c4cb685](https://github.com/btford/grunt-conventional-changelog/commit/8c4cb685f161e1ed920138fd65d9d13be501ed33))
* **task:**
  * fix issue when no changelog exist yet ([c1a31f56](https://github.com/btford/grunt-conventional-changelog/commit/c1a31f566ee1fecc4f1ff3807d98d1a6aedf87a9))
  * version regex now matches the commit messages created by `npm version` by defaul ([db3985d2](https://github.com/btford/grunt-conventional-changelog/commit/db3985d2069ba909b413fe7bcbb8521db2f8b7e2))


#### Features

* **changelog:**
  * Allow 'enforce' option: Adds a git hook for commit conventions ([1cbe92cf](https://github.com/btford/grunt-conventional-changelog/commit/1cbe92cfa3f8f200ec42f7ef709c33813c230a03))
  * allow 'version' option, to use instead of 'pkg.version' ([4a06569a](https://github.com/btford/grunt-conventional-changelog/commit/4a06569ad0c0024bde2d4b098ec839cd023ceeaa))
* **log:**
  * Add smart 'github' option for commit links ([6ac1083a](https://github.com/btford/grunt-conventional-changelog/commit/6ac1083a51a5b01e9c32f230254488e45f733b47))
  * Add breaking changes section ([04ecfceb](https://github.com/btford/grunt-conventional-changelog/commit/04ecfceb57626ab7373eb66db25e1a465469d985))
  * dogfooding - this task uses itself to generate its own changelogs ([746e9ffc](https://github.com/btford/grunt-conventional-changelog/commit/746e9ffca4dd8e90f359a424dca1cfad0a4e4ccf))

<a name="v0.0.12"></a>
### v0.0.12 (2013-04-06)


#### Features

* **log:** automatically split notes based on release version ([5545fe45](https://github.com/btford/grunt-conventional-changelog/commit/5545fe456f3376ae0d089face51a8b53bcad038d))
* **readme:** improve the readme ([0aeec479](https://github.com/btford/grunt-conventional-changelog/commit/0aeec479cfa68e04c33d81bd994a0445f7ddce26))

<a name="v0.0.11"></a>
### v0.0.11 (2013-04-05)


#### Bug Fixes

* **grunt:** add .jshintrc ([fd79b784](https://github.com/btford/grunt-conventional-changelog/commit/fd79b78483498e6e0cadedb9e4d4bb945fe5c644))
* **readme:** rename project, add license ([7320c25f](https://github.com/btford/grunt-conventional-changelog/commit/7320c25fa03b741047a584dbd1f024d62d98de9b))
* **release:** push to github and npm ([c794c502](https://github.com/btford/grunt-conventional-changelog/commit/c794c5023581796fc0853c3db5c36355ef897052))

