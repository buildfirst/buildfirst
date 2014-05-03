module.exports = function (match) {
  match('',                   'home#index');
  match('users'       ,       'users#index');
  match('users/:login',       'users#show');
};
