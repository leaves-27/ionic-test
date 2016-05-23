Ionic App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/driftyco/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ npm install -g ionic
```

Then run: 

```bash
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/submit-issue/) to the main Ionic repository.

# webpack
http://www.tuicool.com/articles/2qiE7jN
# 解决访问权限的分配
# 快递单号的扫描
# 身份证信息的扫描


login:view、controller
   登陆成功后：
   1.向全局广播成功事件；
   2.设置当前用户；
   登陆失败后：
   1.向全局广播失败事件
AuthService：
  isAuthenticated：通过认证。在Session中存在用户id即通过认证。
  isAuthorized：授权。通过认证，并且当前用户的角色在授权角色中。
Session:由后端生成
  id:
  userId:
  userRole:














