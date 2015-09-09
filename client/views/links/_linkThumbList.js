
Template.linkThumbList.rendered = function () {
	$('.rateit').rateit();
};

Template.linkThumbList.events({
	'click .thumbnail': function (e,t) {
		Router.go(this.detailPath());
	}
});