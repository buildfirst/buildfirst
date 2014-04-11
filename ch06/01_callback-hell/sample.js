(function () {
  var loaded;
  function init () {
    document.body.addEventListener('click', function () {
      console.log('Clicks are important.');
      handleClick(function (data) {
        if (data) {
          return processData(data, function (copy) {
            copy.append = true;
            done(copy);
          });
        } else {
          reportError(function () {
            console.log('data processing failed.', err);
          });
        }
      });
    });
    function done(data) {
      loaded = true;
      console.log('finished', data);
    }
  }
  init();
})();
