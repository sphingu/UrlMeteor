// // date formats for short and long date
// var DateFormats = {
//     short: "DD MMMM - YYYY",
//     long: "dddd DD.MM.YYYY HH:mm"
// };

// log context as json string
UI.registerHelper('log',function(context,options){
   if(context){
       return JSON.stringify(context);
   }
   return context;
});

// return bool based on user logged in or not
UI.registerHelper('isUser',function(context,options){
    return !!Meteor.userId();
});

// timit text to 38 characters
UI.registerHelper('limitText', function (context, options) {
    if (context && context.length > 38) {
        return context.substring(0, 38) + "...";
    }
     return context;
})

//format date using Moment js
UI.registerHelper("formatDate", function (context, options) {
    if (moment && context) {
        return moment(context).fromNow();
    } else {
        return context;
    }
});

// get label text from link schema defined
UI.registerHelper("lblLink", function (key) {
    return LinksSchema.label(key);
});

// Display tag array to proper HTML format
UI.registerHelper("displayTags", function (tags) {
    var tagString = "";
    _.each(tags, function (object, index) {
        tagString += "<span class='label label-primary'>" + object + "</span>";
    });
    return tagString;
});

// set Style of element based on color passed
UI.registerHelper('setColorAlpha', function (hexColor) {
    var color = tinycolor(hexColor || "#fff");
    var alphacolor = color.setAlpha(.5);
    return 'background-color : ' + alphacolor + ';border:1px solid ' + hexColor;
});
