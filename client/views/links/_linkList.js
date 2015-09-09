
Template.link.viewmodel(function (data) {
  return {
    link: data,
    removeLink: function () {
      Links.remove(this.link()._id);
      toastr.success("link deleted successfully", "Success Delete");
    },
    viewDetail: function () {
      Router.go(this.link().detailPath());
    }
  }
});