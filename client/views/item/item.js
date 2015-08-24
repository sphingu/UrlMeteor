/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/* global Template */

Template.items.helpers({
  items: function () {
    return Items.find();
  }
});
Template.item.events({
  'click .delete': function () {
    Meteor.call('deleteItem', this);
  }
});

Template.editItem.events({
  'submit form': function (e) {
    e.preventDefault();
    Meteor.call('addItem', $('#txtItem').val());
  }
});