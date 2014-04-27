var BaseClientRouter = require('rendr/client/router');

var Router = module.exports = function Router (options) {
  BaseClientRouter.call(this, options);
};

Router.prototype = Object.create(BaseClientRouter.prototype);
Router.prototype.constructor = BaseClientRouter;
