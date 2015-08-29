var msgLink = {
  successTitle: 'Success',
  errorTitle: 'Error',
  successAdded: 'Link added successfully',
  successDeleted: 'Link deleted successfully'
};

Template.links.helpers({
  links: function () {
    return Links.find();
  }
});
Template.link.events({
  'click .delete': function () {
    Meteor.call('deleteLink', this);
    toastr.success(msgLink.successDeleted, msgLink.successTitle);
  }
});
