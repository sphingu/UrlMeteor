Template.layout.onRendered(function () {
    this.find('.main')._uihooks = {
        insertElement: function (node, next) {
            $(node).hide().insertBefore(next)
            .delay(200)
                .velocity('fadeIn', 400);
        },
        removeElement: function (node) {
            $(node).css('position','absolute').velocity({ translateX: '-1000px' }, {
                duration: 400,
                complete: function () { $(this).remove(); }
            });
        }
    }
});