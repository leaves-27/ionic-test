module.exports =  function($stateProvider, $urlRouterProvider,$rootScope,$httpProvider) {
  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);

  $urlRouterProvider.when("","/").otherwise('/pagetab.page1');
  $stateProvider
  .state("pagetab", {
    url: "/pageTab",
    abstract:true,
    templateUrl: "../html/pagetab.html"
  })
  .state("pagetab.page1",{
      url:"/page1",
      templateUrl: "../html/page1.html"
  })
  .state("pagetab.page2", {
      url:"/page2",
      templateUrl: "../html/page2.html"
  })
  .state("pagetab.page3", {
      url:"/page3",
      templateUrl: "../html/page3.html"
  });
}