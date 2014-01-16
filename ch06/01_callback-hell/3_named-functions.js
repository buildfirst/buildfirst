function attach (node, status, done) {
  node.addEventListener('click', function handler () {
    var id = node.dataset.id;
    var endpoint = '/api/v1/records/' + id;

    http.get(endpoint, function ajax (res) {
      node.innerHTML = res.data.view;
      reportStatus(res.status);
      done(res);
    });

    function reportStatus (code) {
      status.innerHTML = 'Status: ' + code;
    }
  });
}

attach(record, status, function (res) {
  console.log(res);
});
