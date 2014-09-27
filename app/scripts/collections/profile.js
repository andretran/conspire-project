/*global Library, Backbone*/

Library.Collections = Library.Collections || {};

(function () {
    'use strict';

    Library.Collections.Profile = Backbone.Collection.extend({

        model: Library.Models.Profile,
        url: 'http://private-efa4b-conspirechallenge.apiary-mock.com/profiles',
        // 
        // getOrFetch: function (id) {
        //   var profiles = this;
        //   profiles.fetch();
        //   return profiles.get(id);
        //   // if (profile = this.get(id)) {
        //   //   profile.fetch();
        //   // } else {
        //   //   profile = new Library.Models.Profile({ id: id });
        //   //   profile.fetch({
        //   //     success: function () { profiles.add(profile); }
        //   //   });
        //   // }
        // }
    });

})();
