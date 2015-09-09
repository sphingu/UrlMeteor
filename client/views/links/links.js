Template.links.viewmodel({
  links: function () {
    return Links.find({}, { sort: { createdAt: -1 } }).map(function (link, index) {
      link.index = index;
      return link;
    });
  },
  changeView: function () {
    Session.set('isThumbView', !Session.get('isThumbView'));
  },
  viewTypeIcon: function () {
    return Session.get('isThumbView') ? 'glyphicon-th-list' : 'glyphicon-th-large';
  },
  viewTypeTemplate: function () {
    return Session.get('isThumbView') ? 'linkThumbList' : 'linkList';
  }
}, ['links', 'viewTypeIcon', 'viewTypeTemplate']);