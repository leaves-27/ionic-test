var app = angular.module('login',[]);
app.controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.isLoginPage = true;
  $scope.login = function (credentials){
    console.log("fdsfd")
    AuthService.login(credentials).then(function (user) {
      console.log("11111")
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
    }, function () {
      console.log("222")
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
});