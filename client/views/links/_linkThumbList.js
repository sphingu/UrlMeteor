Template.linkThumb.viewmodel(function (data) {
  return {
    link: data,
    viewDetail: function () {
      Router.go(this.link().detailPath());
    }
  }
});
Template.linkThumb.rendered = function () {
  setTimeout(function () {
    $('.thumbnail').equalHeightGrid(3);
  }, 100);
}