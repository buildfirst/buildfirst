module.exports = {
  immediate: function (cb) {
    cb('foo', 'bar');
  },
  debounce: function (cb) {
    setTimeout(cb, 0);
  }
};
