 var ApplicationController = function ($scope,USER_ROLES,AuthService) {
 	
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;
	$scope.isLoginPage = false;
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };
};