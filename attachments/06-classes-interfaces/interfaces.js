var AuthenticatableUser = /** @class */ (function () {
  function AuthenticatableUser(email, password) {
    this.email = email;
    this.password = password;
  }
  AuthenticatableUser.prototype.login = function () {};
  AuthenticatableUser.prototype.logout = function () {};
  return AuthenticatableUser;
})();
var user;
