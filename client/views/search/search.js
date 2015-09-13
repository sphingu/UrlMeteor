Template.search.events({
	'click .thumbnail': function(e,t){
			Router.go(this.detailPath());
	}
});