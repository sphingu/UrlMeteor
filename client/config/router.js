/* global Transitioner */
/* global Router */
Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Transitioner['default']({
	  'in': 'transition.slideRightBigIn',
    'out': 'transition.slideLeftBigOut'
});