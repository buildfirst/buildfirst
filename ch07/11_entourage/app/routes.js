module.exports = function (match) {
  match('', 'root');
  match('items', 'items#index');
  match('items/add', 'items#add');
};
