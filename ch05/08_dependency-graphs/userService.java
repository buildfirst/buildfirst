public class UserService {
    private IUserRepository _userRepository;

    // In this case, our dependency is hard-coded, so
    // we won't be able to inject a fake implementation
    // effectively becoming unable to test the UserService class
    // as a unit, without testing UserMySqlRepository as a side-effect
    // as well. In testing, side-effects are poison.
    public UserService () {
        _userRepository = new UserMySqlRepository();
    }

    public User getUserById (int id) {
        return _userRepository.getById(id);
    }
}
