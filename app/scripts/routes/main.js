/*global Library, Backbone*/

Library.Routers = Library.Routers || {};

(function () {
    'use strict';

    Library.Routers.Main = Backbone.Router.extend({
      initalize: function(options){
        this.$rootEl = options.$rootEl;
      },

      routes: {
        '': 'index',
        'profile/:id' : 'showProfile'
      },

      index: function(){
        var that = this;
        conspireApp.profiles.fetch({
          success: function(){
            var indexView = new Library.Views.Profileindex({collection: conspireApp.profiles});
            that._swapView(indexView);
          }
        });
      },

      showProfile: function(id){
        var that = this;
        conspireApp.profiles.fetch({
          success: function(){
            var showView = new Library.Views.Profileshow({model: conspireApp.profiles.get(id)});
            that._swapView(showView);
          }
        });
      },

      _swapView: function (view) {
        this._currentView && this._currentView.remove();
        this._currentView = view;
        this.$rootEl = $('body');
        this.$rootEl.html(view.render().$el.fadeIn(400, function() {
          view.onRender && view.onRender();
        }));
      }
    });

})();
