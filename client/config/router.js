/* global Router */

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

accountsUIBootstrap3.logoutCallback = function (error) {
  if (error) console.log("Error:" + error);
  Router.go('/');
}