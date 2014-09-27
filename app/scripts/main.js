/*global Installer, $*/


window.Library = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        window.conspireApp = window.conspireApp || {};
        conspireApp.profiles = new Library.Collections.Profile();

        new Library.Routers.Main({
          $rootEl: $('body')
        });
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    Library.init();
});
