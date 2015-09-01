Tracker.autorun(function () {
	var current = Router.current();
	Tracker.afterFlush(function () {
		$(".nav").find(".active").removeClass("active");
		$('.navbar-nav').first().find('li a[href="' + current.url + '"]').parent().addClass('active');
	});
});