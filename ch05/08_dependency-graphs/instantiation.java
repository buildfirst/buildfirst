public class Main {
    public static void main (String[] args) {
        String connectionString = "SOME_CONNECTION_STRING";
        SqlConnectionString connString = new SqlConnectionString(connectionString);
        SqlDbConnection conn = new SqlDbConnection(connString);
        IUserRepository repo = new UserMySqlRepository(conn);
        UserService service = new UserService(repo);
    }
}
