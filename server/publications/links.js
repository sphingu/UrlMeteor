/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */
/* global Meteor */

Meteor.publish('links', function () {
  if (this.userId) {
    return Links.find({ createdBy: this.userId });
  } else {
    this.ready();
  }
});