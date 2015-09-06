Tracker.autorun(function () {
	var current = Router.current();
	Tracker.afterFlush(function () {
		$(".nav").find(".active").removeClass("active");
		if (current) {
			$('.navbar-nav').first().find('li a[href="' + current.url + '"]').parent().addClass('active');
		}
		window.scrollTo(0,0);
		//$('.dropdown-toggle').dropdown();
	});
});