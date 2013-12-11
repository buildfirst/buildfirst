# Dependency Graphs

![hell.jpg][1]

This sample, written in _Java_, is used in the book to explain the trade-offs in attempting to achieve a balance in testability and readability. The following example on how to instance a service isn't ideal.

Traditionally, people create instances of their dependencies inside the classes which require it. [Like in this example][5].

In this case, the dependency is **hard-coded into the class**, and we won't be able to inject a fake implementation. You effectively become unable to test the `UserService` class as a unit, without testing `UserMySqlRepository` as a side-effect as well.

> In testing, side-effects are poison.

A better approach might be [providing the dependencies][7] as you create instances, like below.

```java
String connectionString = "SOME_CONNECTION_STRING";
SqlConnectionString connString = new SqlConnectionString(connectionString);
SqlDbConnection conn = new SqlDbConnection(connString);
IUserRepository repo = new UserMySqlRepository(conn);
UserService service = new UserService(repo);
```

Here is [how the `UserService` might look like][6].

The constructor receives the dependencies we have, rather than us creating them ourselves. this is known as Inversion of Control. Thus, code becomes more testable. You can create a fake implementation of that same interface, provide it to the class when you instance it, and the module is _still supposed to work_, because we aren't coding to the implementation. It's only the interfaces matter.

[![dependencies.png][3]][4]

That's why we resort to [dependency injection][2] frameworks, so we can have the best of both worlds: **testable and readable code**.

  [1]: http://i.imgur.com/OdaSHKz.jpg
  [2]: http://en.wikipedia.org/wiki/Dependency_injection "Dependency Injection on Wikipedia"
  [3]: http://i.imgur.com/z35usqQ.png
  [4]: http://xkcd.com/754/ "The prereqs for CPSC 357, the class on package management, are CPSC 432, CPSC 357, and glibc2.5 or later."
  [5]: https://github.com/bevacqua/buildfirst/tree/master/ch05/08_dependency-graphs/userService-agnostic.java
  [6]: https://github.com/bevacqua/buildfirst/tree/master/ch05/08_dependency-graphs/userService.java
  [7]: https://github.com/bevacqua/buildfirst/tree/master/ch05/08_dependency-graphs/instantiation.java
