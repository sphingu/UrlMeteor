Template.links.helpers({
  links: function () {
    return Links.find();
  }
});
Template.link.events({
  'click .delete': function () {
    Meteor.call('deleteLink', this);
  }
});
