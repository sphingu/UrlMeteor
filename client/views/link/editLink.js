
Template.editLink.viewmodel(function (data) {
  Session.set('linkId', data._id);
  return {
    title: data.title,
    body: data.body,
    tags: data.tags,
    rating: data.rating,
    color: data.color,
    cancel: function () {
      Router.go('Links');
    },
    saveLink: function () {
      var link = {
        title: this.title(),
        body: $('#txtBody').code(),
        tags: $('#txtTags').val(),
        color: this.color(),
        rating: this.rating()
      };
      if (LinksSchema.namedContext("lContext").validate(link)) {
        if (!Session.get('linkId')) {
          Links.insert(link, showSaveLinkMessage);
        }
        else {
          link._id = Session.get('linkId');
          Links.update(link._id, {$pullAll: {tags:  this.tags().array()}});
          Links.update(link._id, {$addToSet: {tags: {$each: link.tags}}});
          Links.update(link._id, { 
            $set: { title: link.title, body: link.body, color: link.color } },
            showSaveLinkMessage);
         }
      }
      return false;
    }
  };
},'tags');

function showSaveLinkMessage(err, result) {
  if (err) {
    toastr.error(err.reason, 'Error Server');
  }
  if (result) {
    Router.go('Links');
    toastr.success('Link saved successfully', 'Success');
  }
}
Template.editLink.rendered = function () {
  setTimeout(function () {
    $("#txtTags").tagsinput();
    $('#txtBody').summernote();
  }, 1);
}