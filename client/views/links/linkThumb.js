Template.linkThumb.helpers({
  links: function () {
    return Links.find({}, {sort: {createdAt: -1}}).map(function(link, index) {
      link.index = index;
      return link;
    });
  },
  isInsertRow: function (index) {
    return index !=0 && index % 3 == 0;
  },
  colorStyle: function () {
    return {
      style:  "background-color:" + this.color
    }
  }
});
