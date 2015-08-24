/* global Links */
/* global SimpleSchema */
/* global Mongo */

Links = new Mongo.Collection("links");

Links.attachSchema(new SimpleSchema({
    name: {
        type: String,
        min: 10
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
}));

Links.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Meteor.methods({
    addLink: function (name) {
        //TODO: validate before insert
        var id = Links.insert({
            name: name,
            createdAt: new Date()
        });
    },
    deleteLink: function (id) {
        Links.remove(id);
    }
});