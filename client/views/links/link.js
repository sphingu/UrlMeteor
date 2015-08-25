/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/* global Template */

Template.links.helpers({
  links: function () {
    return Links.find();
  }
});
Template.link.events({
  'click .delete': function () {
    Meteor.call('deleteLink', this);
  }
});

Template.editLink.events({
  'submit form': function (e) {
    e.preventDefault();
    Meteor.call('addLink', $('#txtLink').val());
  }
});