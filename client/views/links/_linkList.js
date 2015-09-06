Template.linkList.events({
  'click .delete': function () {
    Meteor.call('deleteLink', this._id);
    toastr.success("link deleted successfully", "Success Delete");
  }
});
