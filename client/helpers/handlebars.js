var DateFormats = {
    short: "DD MMMM - YYYY",
    long: "dddd DD.MM.YYYY HH:mm"
};

UI.registerHelper('log',function(context,options){
   if(context){
       return JSON.stringify(context);
   } 
   return context;
});

UI.registerHelper('isUser',function(context,options){
    return !!Meteor.userId();
});

UI.registerHelper('limitText', function (context, options) {
    if (context && context.length > 40) {
        return context.substring(0, 40) + "...";
    }
     return context;
})

UI.registerHelper("formatDate", function (context, options) {
    if (moment && context) {
        return moment(context).fromNow();
    } else {
        return context;
    }
});

UI.registerHelper("lblLink", function (key) {
    return LinksSchema.label(key);
});

UI.registerHelper("displayTags", function (tags) {
    var tagString = "";
    _.each(tags, function (object, index) {
        tagString += "<span class='label label-primary'>" + object + "</span>";
    });
    return tagString;
});

UI.registerHelper('setColorAlpha', function (hexColor) {
    var color = tinycolor(hexColor || "#fff");
    var alphacolor = color.setAlpha(.5);
    return 'background-color : ' + alphacolor + ';border:1px solid ' + hexColor;
});
