
Template.addLink.events({
  'submit form': function (e) {
    e.preventDefault();
    Meteor.call('addLink', $('#txtLink').val());
  }
});