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
    });
});
