/*global Library, Backbone, JST*/

Library.Views = Library.Views || {};

(function () {
    'use strict';

    Library.Views.Profileshow = Backbone.View.extend({

        template: JST['app/scripts/templates/profileShow.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'sync', function(){
              debugger;
              this.render()
            });
        },

        render: function () {
            this.$el.empty();
            var renderedContent = this.template({ profile: this.model });
            this.$el.append(renderedContent);
            return this;
        }

    });

})();
