Items = new Mongo.Collection("items");

Items.attachSchema(new SimpleSchema({
    name: {
        type: String,
        min: 10
    },
    createdAt: {
        type: Date,
        denyUpdate: true
    }
}));

Items.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});

Meteor.methods({
    addItem: function(name) {
        //TODO: validate
        var id = Items.insert({
            name: name,
            createdAt: new Date()
        });
    },
    deleteItem: function(id) {
        Items.remove(id);
    }
});