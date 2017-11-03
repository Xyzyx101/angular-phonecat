(function() {
    'use strict';

    angular
        .module('core.phone')
        .service('Phone', PhoneService);

    PhoneService.$inject = ['$resource'];

    /* @ngInject */
    function PhoneService($resource) {
        return $resource('phones/:phoneId.json', {}, {
          query: {
            method: 'GET',
            params: {phoneId: 'phones'},
            isArray: true
          }
        });
    }
})();
