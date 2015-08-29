/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */
/* global Meteor */

Meteor.publish('links', function () {
    return Links.find({});
});