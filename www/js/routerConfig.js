var routerConfig =  function($stateProvider, $urlRouterProvider,$httpProvider,USER_ROLES) {
  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);

  $urlRouterProvider.when("","/").otherwise('/login');
  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "../html/login.html",
      controller:"LoginController",
      data: {
        authorizedRoles: [USER_ROLES.guest]
      }
    })
    .state("courier", {
      url: "/courier",
      templateUrl: "../html/courier.html",
      controller:"CourierController",
      data: {
        authorizedRoles: [USER_ROLES.editor]
      }
    })
    .state("order", {//
      url:"/order",
      templateUrl: "../html/order.html",
      controller:"OrderController",
      data: {
        authorizedRoles: [USER_ROLES.editor]
      }
    });
    // .state("notice", {
    //   url:"/notice",
    //   templateUrl: "../html/notice.html",
    //   controller:"NoticeController"
    // })
    // .state("set", {
    //   url:"/set",
    //   templateUrl: "../html/set.html",
    //   controller:"SetController"
    // });
}