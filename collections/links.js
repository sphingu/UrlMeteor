/* global LinksSchema */
/* global Links */
/* global SimpleSchema */
/* global Mongo */

Links = new Mongo.Collection("links");

LinksSchema = new SimpleSchema({
    title: {
        type: String,
        min: 3,
        max: 30,
        trim: true,
        regEx: /^[a-z ,.'-]+$/i
    },
    body: {
        type: String,
        min: 10,
        trim: true
    },
    color: {
        type: String,
        optional: true
    },
    createdAt: {
        type: Date,
        defaultValue: Date.now(),
        denyUpdate: true
    }
});

LinksSchema.labels({
    title: 'Link title',
    body: 'Link body',
    color: 'Link  Color',
    createdAt: 'Created On'
});

Links.attachSchema(LinksSchema);

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
    addLink: function (link) {
        return Links.insert(link);
    },
    deleteLink: function (id) {
        return Links.remove(id);
    }
});