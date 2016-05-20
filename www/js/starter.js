var app = angular.module('starter', ['ionic','ui.router','login']);

// //授权事件管理
// app.constant('AUTH_EVENTS', {
//   loginSuccess: 'auth-login-success',
//   loginFailed: 'auth-login-failed',
//   logoutSuccess: 'auth-logout-success',
//   sessionTimeout: 'auth-session-timeout',
//   notAuthenticated: 'auth-not-authenticated',
//   notAuthorized: 'auth-not-authorized'
// });
// //用户角色管理
// app.constant('USER_ROLES', {
//   all: '*',
//   admin: 'admin',
//   editor: 'editor',
//   guest: 'guest'
// });

app.run(run);
//路由配置
app.config(routerConfig);
//授权响应处理
// app.factory('AuthInterceptor',AuthInterceptor);
// //授权
// app.factory('AuthService',AuthService);
// //Session管理
// app.service('Session',Session);
// //
// app.directive('loginDialog',loginDialog);