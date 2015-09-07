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
    rating: {
        type: Number,
        min: 0,
        max: 5,
        decimal: true
    },
    color: {
        type: String,
        optional: true
    },
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date,
        defaultValue: new Date(),
        denyUpdate: true,
        optional: true
    },
    createdBy: {
        type: String,
        autoValue: function () { return Meteor.userId() },
        optional: true
    }
});

LinksSchema.labels({
    title: 'Link title',
    body: 'Link body',
    rating: 'Link Rating',
    color: 'Link  Color',
    tags: 'Link Tags',
    createdAt: 'Created On'
});

Links.attachSchema(LinksSchema);

Links.allow({
    insert: function (userId, link) {
        return userId && link && userId === link.createdBy;
    },
    update: function (userId, link) {
        return userId && link && userId === link.createdBy;;
    },
    remove: function (userId, link) {
        return userId && link && userId === link.createdBy;
    }
});