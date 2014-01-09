# Closures and Immediately-Invoked Function Expressions

Closures are functions whose only purpose is to obtain a child scope. An IIFE is a closure which we execute immediately, the term IIFE stands for Immediately-Invoked Function Expression. Using an IIFE is useful when all we want is to get a closure.

These scripts show the different ways we can use closures and IIFE expressions to build modular code that doesn't leak implementation details, but just _exactly enough_ so that consumers can work with it. Thus, following the principles we've been talking about:

- Single Responsibility Principle
- Information Hiding

![closed-zoo.jpg][1]

  [1]: http://i.imgur.com/UzR3IE4.jpg "Government shut down, no zoo for you!"
