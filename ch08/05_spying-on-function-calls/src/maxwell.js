module.exports = {
  immediate: function (cb) {
    cb();
  },
  debounce: function (cb) {
    setTimeout(cb, 0);
  }
};
