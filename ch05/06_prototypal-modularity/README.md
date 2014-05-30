# Prototypal modularity

![prototype.jpg][1]

The sample [protolib.js][2] has a few ideas at work. It shows how strictly private data can be kept entirely off of the object instances, using an identifier on each object to map them to their private data counterparts. This can be used when we don't want consumers _accessing particular pieces of private data_.

Secondly, we can use [`Object.defineProperty`][3] as a way to define read-only properties, like we did with the `_id` in this case, to avoid consumers changing _(or deleting)_ them and breaking the private data reference, or our library code in general.

Thirdly there is _an IIFE being used here too_, that helps us hide the private data entirely, both from the instances and the global object. In addition, functions or variables which have no business being on the global object can be properly contained in our module's code, such is the case of the `lastId` variable, and the `done` function.

  [1]: http://i.imgur.com/wYIk9JX.jpg "Prototypes! JavaScript ones."
  [2]: https://github.com/buildfirst/buildfirst/tree/master/ch05/06_prototypal-modularity/protolib.js
  [3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
