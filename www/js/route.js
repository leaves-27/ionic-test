var app = require("./starter");
app.run(function($ionicPlatform){
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider,$rootScope) {
   $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
    // 如果是进入登录界面则允许
    if(toState.name=='login') return;
    // 如果用户不存在
    if(!$rootScope.user || !$rootScope.user.token){
      event.preventDefault();// 取消默认跳转行为
      $state.go("login",{from:fromState.name,w:'notLogin'});//跳转到登录界面
    }
  });


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
});
