public static class Main {
    public Main () {
        String connectionString = 'SOME_CONNECTION_STRING';
        SqlConnectionString connString = new SqlConnectionString(connectionString);
        SqlDbConnection conn = new SqlDbConnection(connString);
        IUserRepository repo = new UserMySqlRepository(conn);
        UserService service = new UserService(repo);
    }
}
