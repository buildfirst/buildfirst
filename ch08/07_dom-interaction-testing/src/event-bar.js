module.exports = function () {
  var barman = document.querySelector('.barman');
  var square = document.querySelector('.square');
  var result = document.querySelector('.result');
  var clear = document.querySelector('.clear');

  barman.addEventListener('click', round);
  clear.addEventListener('click', reset);

  function round () {
    var number = parseFloat(square.value);
    rounding(number, report);
  }

  function rounding (number, done) {
    if (isNaN(number)) {
      done(new Error('Do you even know what a number is?'));
    } else if (number === Math.round(number)) {
      done(new Error('You are such a unit. Integers cannot be rounded!'));
    } else {
      done(null, Math.round(number));
    }
  }

  function report (err, value) {
    var p = document.createElement('p');

    if (err) {
      p.className = 'error';
      p.innerText = err.message;
    } else {
      p.className = 'rounded';
      p.innerText = 'Rounded to ' + value + '. Another round?';
    }
    result.appendChild(p);
  }

  function reset () {
    var all = result.querySelectorAll('.result p');
    var i = all.length;

    while (i--) {
      result.removeChild(all[i]);
    }
  }
};
