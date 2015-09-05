
Template.addLink.viewmodel({
  title: '',
  tags: [],
  color: '',
  cancel: function () {
    Router.go('Links');
  },
  addLink: function () {
    var link = {
      title: this.title(),
      body: $('#txtBody').code(),
      tags: this.tags().array(),
      rating :  $('.rateit').rateit('value'),
      color: this.color(),
      createdAt: new Date()
    };
    if (LinksSchema.namedContext("lContext").validate(link)) {
      Meteor.call('addLink', link, function (err, result) {
        if (err) {
          toastr.error(err.reason, 'Error Server');
        }
        if (result) {
          Router.go('Links');
          toastr.success('Link added successfully', 'Success');          
        }
      });
    }
    return false;
  }
});
Template.addLink.rendered = function () {
  $("#txtTags").tagsinput();
  $('#txtBody').summernote();
  $('.rateit').rateit()
}