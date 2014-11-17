void function () {
  'use strict';

  var i = 1;

  // get the DOM elements
  var addButton = document.querySelector('.cm-add');
  var many = document.querySelector('.ms-many');
  var abortAllButton = document.querySelector('.cm-abort-all');
  var preventButton = document.querySelector('.cm-prevent-all');

  // bind a few event handlers when clicking on different parts of the app
  document.body.addEventListener('click', delegateRequest);

  addButton.addEventListener('click', addSpace);
  abortAllButton.addEventListener('click', abortAll);
  preventButton.addEventListener('click', preventAll);

  function tooManySpaces () {
    many.classList.add('ms-show');

    setTimeout(function () {
      many.classList.remove('ms-show');
    }, 2000);
  }

  function text (elem, value) {
    elem.innerText = elem.textContent = value;
  }

  function addSpace () {
    // set a hard limit on how many spaces can be added
    if (i > 3) {
      tooManySpaces();
      return;
    }

    // create the space using plain old DOM API
    var header = document.createElement('h3');
    var space = document.createElement('div');
    var requestButton = document.createElement('button');
    var description = document.createElement('pre');

    // a measly layer is associated with this space
    var layer = measly.layer({ context: space });

    text(header, 'Space #' + i++);
    text(requestButton, 'Start Request!');
    requestButton.classList.add('cm-request');
    space.classList.add('ms-space');
    space.appendChild(header);
    space.appendChild(requestButton);
    space.appendChild(description);
    document.body.appendChild(space);

    // set the initial description for this layer
    updateDescription();

    // update the description as events occur on this layer
    layer.on('create', updateDescription);
    layer.on('always', updateDescription);

    function updateDescription () {
      // if no requests are going on, then we bail out.
      if (layer.requests.length === 0) {
        text(description, 'No requests going on!');
        return;
      }
      var html = '';
      // we compile a piece of HTML for each request
      layer.requests.forEach(function (req, i) {
        var cls = '';
        var state;
        // set a css class and state depending on where each request is at.
        if (req.prevented) {
          cls = 'rq-prevented';
          state = 'prevented';
        } else if (req.aborted) {
          cls = 'rq-aborted';
          state = 'aborted';
        } else if (req.cached) {
          cls = 'rq-cached';
          state = 'cached';
        } else if (req.error) {
          cls = 'rq-error';
          state = 'error';
        } else if (req.done) {
          cls = 'rq-done';
          state = 'done';
        } else if (req.requested) {
          cls = 'rq-requested';
          state = 'requested';
        } else {
          state = 'created';
        }
        html += [
          '<div class="',cls,'">',req.method,', ',req.duration,'s (',state,') </div>'
        ].join('');
      });
      // refresh the HTML once
      description.innerHTML = html;
    }
  }

  function delegateRequest (e) {
    // make a request through measly.
    if (!e.target.classList.contains('cm-request')) {
      return;
    }
    var layer = measly.find(e.target);
    var duration = Math.floor(Math.random() * 30 + 2);
    var req = layer.get('http://www.filltext.com/?rows=10&f={firstName}&delay=' + duration);
    req.duration = duration;
  }

  // prevents all requests fired by measly for 5 seconds.
  function preventAll () {
    function shield (req) {
      req.prevent();
    }
    measly.on('create', shield);
    text(preventButton, 'Shield On..');
    preventButton.classList.add('cm-prevent-on');

    setTimeout(function () {
      measly.off('create', shield);
      text(preventButton, 'Prevent for 5s');
      preventButton.classList.remove('cm-prevent-on');
    }, 5000);
  }

  function abortAll () {
    // aborts all ongoing requests on a global level
    measly.abort();
  }
}();
