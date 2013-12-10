# Dependency Graphs

![hell.jpg][1]

This sample, written in _Java_, is used in the book to explain the trade-offs in attempting to achieve a balance in testability and readability. The following example on how to instance a service isn't ideal.

```java
String connectionString = "SOME_CONNECTION_STRING";
SqlConnectionString connString = new SqlConnectionString(connectionString);
SqlDbConnection conn = new SqlDbConnection(connString);
IUserRepository repo = new UserMySqlRepository(conn);
UserService service = new UserService(repo);
```

That's why we resort to [dependency injection][2] frameworks, so we can have the best of both worlds: **testable and readable code**.

  [1]: http://i.imgur.com/OdaSHKz.jpg
  [2]: http://en.wikipedia.org/wiki/Dependency_injection "Dependency Injection on Wikipedia"
