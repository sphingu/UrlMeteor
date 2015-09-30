Router.map(function () {
  this.route('Search', {
    path: '/'
  });
  this.route('Links', {
    waitOn: subscribeLinkOnwait
  });
  this.route('AddLink', {
    template: 'editLink',
    data: function () {
      var link = {
        title: '',
        body: '',
        tags: [],
        color: '#8000ff',
        rating: 5
      }
      return link;
    }
  });

  this.route('EditLink', {
    template: 'editLink',
    path: '/EditLink/:id',
    waitOn: subscribeLinkDetailOnwait,
    notFoundTemplate: 'home',
    data: function () {
      return Links.findOne({ _id: this.params.id });
    }
  });
  this.route('LinkDetail', {
    path: '/link/:id',
    waitOn: subscribeLinkDetailOnwait,
    notFoundTemplate: 'home',
    data: function () {
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
function subscribeLinkDetailOnwait() {
  return [
    Meteor.subscribe('linksWithDetail')
  ];
}
Router.plugin('auth', {
  except: [
    'backup',
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