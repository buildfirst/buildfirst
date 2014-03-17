var quote = require('./qotdService.js');

quote(function done (err, quote) {
  //document.querySelector('.quote').innerHTML = quote;
  console.log(quote);
});
