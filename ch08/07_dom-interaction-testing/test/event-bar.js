var test = require('tape');
var sinon = require('sinon');

function setup () {
  function add (className) {
    var elem = document.createElement('div');
    elem.className = className;
    document.body.appendChild(elem);
  }
  ['barman', 'square', 'result', 'clear'].forEach(add);
}

function teardown () {
  function rm (className) {
    var elem = document.querySelector(className);
    elem.parentNode.removeChild(elem);
  }
  ['.barman', '.square', '.result', '.clear'].forEach(rm);
}

function setdown (name, cb) {
  setup();

  test(name, function (t) {
    cb(t);
    t.once('end', teardown);
  });
}

setdown('clicking barman should call round()', function (t) {
  // Arrange
  var cb = sinon.spy();

  // Act
  var barman = document.querySelector('.barman');

  // Assert
  t.plan(1);
  t.ok(barman);
});
