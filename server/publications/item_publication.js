/* global Meteor */

Meteor.publish('items', function () {
    return Items.find({});
});