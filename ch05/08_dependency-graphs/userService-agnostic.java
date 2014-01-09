public class UserService {
    private IUserRepository _userRepository;

    // the constructor receives the dependencies we have, rather than
    // us creating them ourselves. this is known as Inversion of Control.
    // Thus, code becomes more testable, because we can create a fake
    // implementation of that same interface, and the module is still supposed
    // to just work, because we aren't coding to the implementation. Only interface matters.
    public UserService (IUserRepository userRepository) {
        if (userRepository == null) {
            throw new IllegalArgumentException();
        }
        _userRepository = userRepository;
    }

    // here we consume the IUserRepository we've been passed
    // since we're coding against the interface, we won't have to
    // worry about details in the classes that actually implement it.
    public User getUserById (int id) {
        return _userRepository.getById(id);
    }

    // of course, the class might have other methods as well
    // it doesn't just need to consume the interface
    // on that note, nothing is telling us to consume _all_ of the interface
    // http://xkcd.com/221/
    public int getRandomNumber () {
        return 4; // chosen by fair dice roll.
                  // guaranteed to be random.
    }
}
