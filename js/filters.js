'use strict';

App.filter('myFilter', [
    function() {
        var filter = function(data) {
            return data;
        };

        return filter;
    }
]);
