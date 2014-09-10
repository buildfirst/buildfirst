void function () {
  'use strict';

  var i = 1;
  var addButton = document.querySelector('.cm-add');
  var many = document.querySelector('.ms-many');
  var abortAllButton = document.querySelector('.cm-abort-all');
  var preventButton = document.querySelector('.cm-prevent-all');

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

  function addSpace () {
    if (i > 3) {
      tooManySpaces();
      return;
    }
    var header = document.createElement('h3');
    var space = document.createElement('div');
    var requestButton = document.createElement('button');
    var description = document.createElement('pre');
    var layer = measly.layer({ context: space });
    header.innerText = 'Space #' + i++;
    requestButton.classList.add('cm-request');
    requestButton.innerText = 'Start Request!';
    space.classList.add('ms-space');
    space.appendChild(header);
    space.appendChild(requestButton);
    space.appendChild(description);
    document.body.appendChild(space);

    updateDescription();

    layer.on('create', updateDescription);
    layer.on('always', updateDescription);

    function updateDescription () {
      if (layer.requests.length === 0) {
        description.innerText = 'No requests going on!';
        return;
      }
      var html = '';
      layer.requests.forEach(function (req, i) {
        var cls = '';
        var state;
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
        html += ['<div class="',cls,'">',req.method,', ',req.duration,'s (',state,') </div>'].join('');
      });
      description.innerHTML = html;
    }
  }

  function delegateRequest (e) {
    if (!e.target.classList.contains('cm-request')) {
      return;
    }
    var layer = measly.find(e.target);
    var duration = Math.floor(Math.random() * 30 + 2);
    var req = layer.get('http://www.filltext.com/?rows=10&f={firstName}&delay=' + duration);
    req.duration = duration;
  }

  function preventAll () {
    function shield (req) {
      req.prevent();
    }
    measly.on('create', shield);
    preventButton.innerText = 'Shield On..';
    preventButton.classList.add('cm-prevent-on');

    setTimeout(function () {
      measly.off('create', shield);
      preventButton.innerText = 'Prevent for 5s';
      preventButton.classList.remove('cm-prevent-on');
    }, 5000);
  }

  function abortAll () {
    measly.abort();
  }
}();
