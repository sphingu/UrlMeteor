
Template.addLink.viewmodel({
  name: 'Test Link',
  addLink: function () {
    Meteor.call('addLink', this.name());
    toastr.success('Link added successfully', 'Success');
  }
});