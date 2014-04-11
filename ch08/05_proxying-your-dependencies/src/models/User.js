var users = {
  111: {
    id: 111,
    name: 'John Doe',
    email: 'johndoe@company.com'
  }
};

module.exports = {
  findOne: function (query, done) {
    // this would be querying a database in the real world
    setTimeout(function () {
      done(null, users[query.id]);
    }, 2000);
  }
};
