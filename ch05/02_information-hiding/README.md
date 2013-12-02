# Information Hiding

Hiding information and abstracting complex behavior behind interfaces are two of the key aspects of designing scalable application architectures. This example shows how we might hide information in our implementation of a few functions.

Each sample contains implementation and usage details.

- [Prototypal](https://github.com/bevacqua/buildfirst/tree/master/ch05/02_information-hiding/prototypal.js): we might leak implementation details if we're not careful
- [As a Pure Function](https://github.com/bevacqua/buildfirst/tree/master/ch05/02_information-hiding/pure.js): we don't have such issues as everything is computed within the function
- [Using a Factory](https://github.com/bevacqua/buildfirst/tree/master/ch05/02_information-hiding/factory.js): we can keep prototype-like state variables that can't be publicly accessed.

These are the approaches to information hiding discussed on Chapter 5, section `5.1.2`.
