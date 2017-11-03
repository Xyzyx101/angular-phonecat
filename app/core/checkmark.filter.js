(function() {
    'use strict';

    angular
        .module('core')
        .filter('checkmark', filter);

    function filter() {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        }
    }
})();
