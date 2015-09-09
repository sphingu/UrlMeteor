Template.linkThumb.viewmodel(function (data) {
	return {
		link: data,
		viewDetail: function () {
			Router.go(this.link().detailPath());
		}
	}
});