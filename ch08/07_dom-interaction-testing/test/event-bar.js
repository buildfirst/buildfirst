var test = require('tape');
var bar = require('../src/event-bar.js');

function setup () {
  function add (opt) {
    var element = document.createElement(opt.type || 'div');
    element.className = opt.className || opt;
    document.body.appendChild(element);
  }
  ['barman', { className: 'square', type: 'input' }, 'result', 'clear'].forEach(add);
  bar();
}

function teardown () {
  function rm (className) {
    var element = document.querySelector(className);
    element.parentNode.removeChild(element);
  }
  ['.barman', '.square', '.result', '.clear'].forEach(rm);
}

function testCase (name, cb) {
  var t = test(name, cb);
  t.once('prerun', setup);
  t.once('end', teardown);
}

testCase('clicking barman without input should result in an error message', function (t) {
  // Arrange
  var barman = document.querySelector('.barman');
  var result;

  // Act
  barman.click();
  result = document.querySelectorAll('.result p');

  // Assert
  t.plan(4);
  t.ok(barman);
  t.equal(result.length, 1);
  t.equal(result[0].className, 'error');
  t.equal(result[0].innerText, 'Do you even know what a number is?');
});

testCase('clicking barman with an integer should result in an error message', function (t) {
  // Arrange
  var barman = document.querySelector('.barman');
  var square = document.querySelector('.square');
  var result;

  // Act
  square.value = '2';
  barman.click();
  result = document.querySelectorAll('.result p');

  // Assert
  t.plan(4);
  t.ok(barman);
  t.equal(result.length, 1);
  t.equal(result[0].className, 'error');
  t.equal(result[0].innerText, 'You are such a unit. Integers cannot be rounded!');
});

testCase('clicking barman with a number should result in a rounded number', function (t) {
  // Arrange
  var barman = document.querySelector('.barman');
  var square = document.querySelector('.square');
  var value = 2.4;
  var result;

  // Act
  square.value = value.toString();
  barman.click();
  result = document.querySelectorAll('.result p');

  // Assert
  t.plan(4);
  t.ok(barman);
  t.equal(result.length, 1);
  t.equal(result[0].className, 'rounded');
  t.equal(result[0].innerText, 'Rounded to ' + Math.round(value) + '. Another round?');
});

testCase('clicking barman with two values should produce two results', function (t) {
  // Arrange
  var barman = document.querySelector('.barman');
  var square = document.querySelector('.square');
  var value = 2.4;
  var result;

  // Act
  square.value = value.toString();
  barman.click();
  square.value = '3';
  barman.click();
  result = document.querySelectorAll('.result p');

  // Assert
  t.plan(6);
  t.ok(barman);
  t.equal(result.length, 2);
  t.equal(result[0].className, 'rounded');
  t.equal(result[0].innerText, 'Rounded to ' + Math.round(value) + '. Another round?');
  t.equal(result[1].className, 'error');
  t.equal(result[1].innerText, 'You are such a unit. Integers cannot be rounded!');
});

testCase('clicking clear when empty does not throw', function (t) {
  // Arrange
  var clear = document.querySelector('.clear');

  // Assert
  t.plan(2);
  t.ok(clear);
  t.doesNotThrow(function () {
    clear.click();
  });
});

testCase('clicking clear with results removes them', function (t) {
  // Arrange
  var barman = document.querySelector('.barman');
  var square = document.querySelector('.square');
  var clear = document.querySelector('.clear');
  var result;

  // Act
  square.value = '3.4';
  barman.click();
  square.value = '3';
  barman.click();
  square.value = '';
  barman.click();
  result = document.querySelectorAll('.result p');

  // Assert
  t.plan(2);
  t.equal(result.length, 3);
  clear.click();
  result = document.querySelectorAll('.result p');
  t.equal(result.length, 0);
});
