var User = require('./models/User.js');

function subset (user) {
  return {
    name: user.name,
    email: user.email
  };
}

module.exports = function (id, done) {
  User.findOne({ id: id }, function (err, user) {
    done(err, user ? subset(user) : null);
  });
};
