var app = angular.module('login',[]);
app.controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, AuthService,$location) {
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.isLoginPage = false;
  $scope.login = function (credentials){
    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
      // $location.url("/courier");
      $location.path("/courier");
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
});