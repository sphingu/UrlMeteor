Router.map(function () {
    this.route('home', {
        path: '/'
    });
    this.route('Links',{
        waitOn: function () {
            return Meteor.subscribe('links');
        }
    });
    this.route('AddLink');
    this.route('Home');
    this.route('accessDenied');
    
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