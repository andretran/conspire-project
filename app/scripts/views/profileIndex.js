/*global Library, Backbone, JST*/

Library.Views = Library.Views || {};

(function () {
    'use strict';

    Library.Views.Profileindex = Backbone.View.extend({

        template: JST['app/scripts/templates/profileIndex.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            // this.listenTo(this.collection, 'change', this.render);
        },

        render: function () {
            this.$el.empty();
            var renderedContent = this.template({ profiles: this.collection });
            this.$el.append(renderedContent);
            return this;
        }

    });

})();
