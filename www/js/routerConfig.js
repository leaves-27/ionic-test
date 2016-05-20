var routerConfig =  function($stateProvider, $urlRouterProvider,$httpProvider) {
  // $httpProvider.interceptors.push([
  //   '$injector',
  //   function ($injector) {
  //     return $injector.get('AuthInterceptor');
  //   }
  // ]);

  $urlRouterProvider.when("","/").otherwise('/login');
  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "../html/login.html"
    })
    .state("home",{
        url:"/home",
        templateUrl: "../html/main.html"
    })
    .state("notice", {
        url:"/notice",
        templateUrl: "../html/notice.html"
    })
    .state("set", {
        url:"/set",
        templateUrl: "../html/set.html"
    });
}