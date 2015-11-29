Meteor.startup(function () {
    Tracker.autorun(function () {
        var context = LinksSchema.namedContext('lContext');
        if (!context.isValid()) {
            var errorMessage = '';
            console.log(context.invalidKeys());
            context.invalidKeys().forEach(function (key) {
                errorMessage += context.keyErrorMessage(key.name) + "<br/>";
            });
            toastr.error(errorMessage, 'Error Client');
        }

        // get current route
      	var current = Router.current();

      	Tracker.afterFlush(function () {
      		// set active link as current route
      		$(".nav").find(".active").removeClass("active");
      		if (current) {
      			$('.navbar-nav').first().find('li a[href="' + current.url + '"]').parent().addClass('active');
      		}
      		// scroll to top on route change
      		window.scrollTo(0,0);
      		// TODO: set Logout Button dropdown work patch ( get proper way to do so )
      		$('.dropdown-toggle').dropdown();
      	});
    });


});
