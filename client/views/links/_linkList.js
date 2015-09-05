Template.linkList.events({
  'click .delete': function () {
    Meteor.call('deleteLink', this);
    toastr.success("link deleted successfully", "Success Delete");
  }
});
