record.addEventListener('click', function () {
  var id = record.dataset.id;
  var endpoint = '/api/v1/records/' + id;

  http.get(endpoint, function (res) {
    record.innerHTML = res.data.view;
  });
});
