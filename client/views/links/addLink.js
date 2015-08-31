
Template.addLink.viewmodel({
  name: 'Test Link',
  addLink: function () {
    var link={
      name: this.name(),
      createdAt: new Date()
    };
    if (LinksSchema.namedContext("lContext").validate(link)) {
      Meteor.call('addLink', link, function (err, result) {
        if (err) {
          toastr.error(err.reason, 'Error Server');
        }
        if (result) {
          toastr.success('Link added successfully', 'Success');
          Router.go('Links');
        }
      });
    }
  }
});