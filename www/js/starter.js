var app = angular.module('starter', ['ionic','ui.router','login','courier','order']);

//授权事件管理
app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});
//用户角色管理
app.constant('USER_ROLES', {
  all: '*',//所有
  admin: 'admin',//管理者的角色
  editor: 'editor',//编辑者
  guest: 'guest'//游客的角色
});

app.run(run);
app.controller('ApplicationController',ApplicationController);
//路由配置
app.config(routerConfig);

//授权响应处理
app.factory('AuthInterceptor',AuthInterceptor);
//授权
app.factory('AuthService',AuthService);
//Session管理
app.service('Session',Session);
//
app.directive('loginDialog',loginDialog);