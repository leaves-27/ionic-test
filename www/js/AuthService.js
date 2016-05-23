var AuthService =  function ($http, Session) {
  var authService = {};
  authService.login = function (credentials) {
    console.log("fff")
    var urlPrefix = "http://127.0.0.1:3900"
    return $http
      .post(urlPrefix+'/login', credentials)
      .then(function (res){
        Session.create(res.data.id, res.data.user.id,res.data.user.role);
        return res.data.user;
      });
  };
  authService.isAuthenticated = function () {//通过认证
    return !!Session.userId;
  };

  authService.isAuthorized = function (authorizedRoles) {//授权。即通过了认证并且授权角色和Session角色一致
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
  };
  return authService;
}