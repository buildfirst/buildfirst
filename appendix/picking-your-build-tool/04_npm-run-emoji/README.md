# Emoji via `npm run`

This sample shows how to combine `npm` with the [`emoji-random`][1] npm package. The tasks are defined in the [`package.json`][2] file, and the [emoji script file][3].

```json
{
  "scripts": {
    "emoji": "./emoji"
  }
}
```
To run the task, enter the following command in your terminal.

```shell
npm run emoji
```

[1]: https://github.com/bevacqua/node-emoji-random
[2]: https://github.com/buildfirst/buildfirst/tree/master/appendix/picking-your-build-tool/02_npm-run-emoji/package.json
[3]: https://github.com/buildfirst/buildfirst/tree/master/appendix/picking-your-build-tool/02_npm-run-emoji/emoji
