var Prom = require('es6-promise').Promise;

// this method returns a promise
// the promise resolves with the response data
// or rejects with an error message
function get (endpoint) {

  function handler (fulfill, reject) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        fulfill(xhr.response);
      } else {
        reject(new Error(xhr.responseText));
      }
    };

    xhr.onerror = function () {
      reject(new Error('Network Error'));
    };

    xhr.send();
  }

  return new Prom(handler);
}

// here we are chaining promises and transform callbacks
// easily getting to the result we wanted
// first, we make a request to /users on the GitHub API
get('https://api.github.com/users')
  .then(JSON.parse) // then we parse the response
  .then(function (response) {
    // using the response object, we get the first user
    // and then we return a promise object which requests
    // another endpoint on the GitHub API
    return get('https://api.github.com/users/' + response[0].login + '/repos');
  })
  .then(JSON.parse) // we transform that response as well
  .then(function (response) {
    // lastly, we just print the name of the first repo.
    console.log(response[0].name);
  });
