module.exports = {
  index: function (params, done) {
    var spec = {
      collection: {
        collection: 'ShoppingList',
        params: params
      }
    };
    this.app.fetch(spec, function (err, result) {
      done(err, result);
    });
  },

  new: function (params, done) {
    done();
  }
};
