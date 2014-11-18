var util = require('util');
var test = require('tape');
var sinon = require('sinon');
var proxyquire = require('proxyquireify')(require);
var ListView;
var AddItemView;

function getStubbedRouter () {
  ListView = sinon.spy();
  AddItemView = sinon.spy();
  var ViewRouter = proxyquire('../app/routers/viewRouter.js', {
    '../views/list.js': ListView,
    '../views/addItem.js': AddItemView
  });
  return ViewRouter;
}

test('there are three routes and route handlers', function (t) {
  // Arrange
  var ViewRouter = getStubbedRouter();

  // Act
  var router = new ViewRouter();

  // Assert
  var routes = Object.keys(router.routes);
  t.equal(routes.length, 3);
  routes.forEach(exists); // ensure each route handler exists
  t.end();

  function exists (route) {
    var handlerName = router.routes[route]; // route handler property for route, e.g: root
    var handler = router[handlerName]; // router['root']
    t.ok(handler, util.format('route handler for "%s" exists', route));
  }
});

test('root redirects to the items route', function (t) {
  // Arrange
  var ViewRouter = getStubbedRouter();

  // Act
  var router = new ViewRouter();
  router.navigate = sinon.spy(); // we use a spy so that the real .navigate method isn't used
  router.root();

  // Assert
  t.ok(router.navigate.calledOnce, 'called router.navigate');
  t.ok(router.navigate.calledWith('items', { trigger: true }), 'called router.navigate with proper arguments');
  t.end();
});

test('listItems renders ListView', function (t) {
  // Arrange
  var ViewRouter = getStubbedRouter();

  // Act
  var router = new ViewRouter();
  router.listItems();

  // Assert
  t.ok(ListView.calledOnce, 'called ListView once');
  t.ok(ListView.calledWithNew(), 'called new ListView()');
  t.end();
});


test('addItem renders AddItemView', function (t) {
  // Arrange
  var ViewRouter = getStubbedRouter();

  // Act
  var router = new ViewRouter();
  router.addItem();

  // Assert
  t.ok(AddItemView.calledOnce, 'called AddItemView once');
  t.ok(AddItemView.calledWithNew(), 'called new AddItemView()');
  t.end();
});
