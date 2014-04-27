module.exports = function (match) {
  match('', 'root');
  match('items', 'items#list');
  match('items/add', 'items#add');
};
