/*global Library, Backbone*/

Library.Models = Library.Models || {};

(function () {
    'use strict';

    Library.Models.Profile = Backbone.Model.extend({

        url: 'http://private-efa4b-conspirechallenge.apiary-mock.com/profiles',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
