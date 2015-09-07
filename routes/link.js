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
  this.route('LinkDetail', {
    path: '/link/:_id',waitOn: function () {
      return [
        Meteor.subscribe('links')
      ];
    },
     notFoundTemplate: 'home',
    data: function () {
      _id = this.params._id;
      templateData = Links.findOne({ _id: this.params._id });
      return templateData;
    }
  });

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