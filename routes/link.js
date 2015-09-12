Router.map(function () {
  this.route('home', {
    path: '/'
  });
  this.route('Links', {
    waitOn: subscribeLinkOnwait
  });
  this.route('AddLink', {
    template: 'editLink',
    data: function () {
      var link = {
        title: 'my title',
        body: 'my body',
        tags: ['mytags', 'mytags1'],
        color: '#232323',
        rating: 5
      }
      return link;
    }
  });

  this.route('EditLink', {
    template: 'editLink',
    path: '/EditLink/:id',
    waitOn: subscribeLinkOnwait,
    notFoundTemplate: 'home',
    data: function () {
      return Links.findOne({ _id: this.params.id });
    }
  });
  this.route('LinkDetail', {
    path: '/link/:id',
    waitOn: subscribeLinkOnwait,
    notFoundTemplate: 'home',
    data: function () {
      debugger;
      return Links.findOne({ _id: this.params.id });
    }
  });

  this.route('AccessDenied');
  this.route('Backup');


});
function subscribeLinkOnwait() {
  return [
    Meteor.subscribe('links')
  ];
}
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