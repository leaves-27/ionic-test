var app = angular.module('login',[]);
  // app.controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
app.controller('LoginController', function ($scope, $rootScope) {  
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.login = function (credentials) {
    // AuthService.login(credentials).then(function (user) {
    //   $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
    //   $scope.setCurrentUser(user);
    // }, function () {
    //   $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    // });
  };
})