// this method returns a promise
// the promise resolves with the response data
// or rejects with an error message
function get (url) {
  var base = 'https://api.github.com';

  function handler (resolve, reject) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', base + url);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error(req.statusText));
      }
    };

    xhr.onerror = function () {
      reject(new Error('Network Error'));
    };

    xhr.send();
  }

  return new Promise(handler);
}

// here we are chaining promises and transform callbacks
// easily getting to the result we wanted
// first, we make a request to /users on the GitHub API
get('/users')
  .then(JSON.parse) // then we parse the response
  .then(function (result) {
    // using the response object, we get the first user
    // and then we return a promise object which requests
    // another endpoint on the GitHub API
    return get('/users/' + result[0].login + '/repos');
  })
  .then(JSON.parse) // we transform that response as well
  .then(function (result) {
    // lastly, we just print the name of the first repo.
    console.log(result[0].name);
  });
