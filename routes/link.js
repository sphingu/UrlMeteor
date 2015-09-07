Router.map(function () {
  this.route('home', {
    path: '/'
  });
  this.route('Links', {
    waitOn: function () {
      return [
        Meteor.subscribe('links')
      ];
    }
  });
  this.route('AddLink');
  this.route('AccessDenied');
  this.route('Backup');

});

Router.plugin('auth', {
  except: [
    'enroll',
    'forgotPassword',
    'home',
    'login',
    'resetPassword',
    'signup',
    'verifyEmail'
  ],
  authenticate: {
    template: 'accessDenied'
  }
});