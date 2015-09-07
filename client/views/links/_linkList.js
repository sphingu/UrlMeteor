Template.linkList.events({
  'click .delete': function () {
    Links.remove(this._id);
    toastr.success("link deleted successfully", "Success Delete");
  }
});
