function attach (node, status, done) {

  function handler () {
    var id = node.dataset.id;
    var endpoint = '/api/v1/records/' + id;

    http.get(endpoint, update);
  }

  function update (res) {
    node.innerHTML = res.data.view;
    status.innerHTML = 'Status: ' + res.status;
    done(res);
  }

  node.addEventListener('click', handler);
}

attach(record, status, function (res) {
  console.log(res);
});
