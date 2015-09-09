Template.links.helpers({
  links: function () {
    return Links.find({}, { sort: { createdAt: -1 } }).map(function (link, index) {
      link.index = index;
      return link;
    });
  },
  viewTypeTemplate: function () {
    return Session.get('isThumbView') ? 'linkThumbList' : 'linkList';
  },
  viewTypeIcon: function () {
    return Session.get('isThumbView') ? 'glyphicon-th-list' : 'glyphicon-th-large';
  }
});

Template.links.viewmodel({
  changeView: function () {
    Session.set('isThumbView', !Session.get('isThumbView'));
  }
});