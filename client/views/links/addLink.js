
Template.addLink.viewmodel({
  title: '',
  body: '',
  color: '',
  addLink: function () {
    var link = {
      title: this.title(),
      body: this.body(),
      color: this.color(),
      createdAt: new Date()
    };
    if (LinksSchema.namedContext("lContext").validate(link)) {
      Meteor.call('addLink', link, function (err, result) {
        if (err) {
          toastr.error(err.reason, 'Error Server');
        }
        if (result) {
          Modal.hide();
          toastr.success('Link added successfully', 'Success');
          Router.go('Links');
        }
      });
    }
  }
});