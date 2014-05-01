var items = require('./items_controller.js');

module.exports = function (app) {
  app.get('/api/items', items.getList);
};
