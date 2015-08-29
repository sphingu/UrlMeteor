/* global Template */
Template.layout.onRendered(function () {
    this.find('.main')._uihooks = {
        insertElement: function (node, next) {
            $(node).hide().insertBefore(next)
            //.delay(200)
                .velocity('fadeIn', 500);
        },
        removeElement: function (node) {
            $(node).remove();
            // $(node).css('position','absolute').velocity({ translateX: '-1000px' }, {
            //     duration: 400,
            //     complete: function () { $(this).remove(); }
            // });
        }
    }
});