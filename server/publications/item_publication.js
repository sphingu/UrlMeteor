/* global Meteor */

Meteor.publish('links', function () {
    return Links.find({});
});