var DateFormats = {
    short: "DD MMMM - YYYY",
    long: "dddd DD.MM.YYYY HH:mm"
};

UI.registerHelper("formatDate", function(datetime) {
    if (moment) {
        return moment(datetime).fromNow();
    } else {
        return datetime;
    }
});

UI.registerHelper("lblLink",function(key){
    return LinksSchema.label(key);
})