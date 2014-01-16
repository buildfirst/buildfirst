function attach (node, status, done) {
  node.addEventListener('click', function () {
    var id = node.dataset.id;
    var endpoint = '/api/v1/records/' + id;

    http.get(endpoint, function (res) {
      node.innerHTML = res.data.view;
      reportStatus(res.status, function () {
        done(res);
      });
    });

    function reportStatus (status, then) {
      status.innerHTML = 'Status: ' + status;
      then();
    }
  });
}

attach(record, status, function (res) {
  console.log(res);
});
