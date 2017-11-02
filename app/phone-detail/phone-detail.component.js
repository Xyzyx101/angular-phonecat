(function() {
  'use strict';

  angular.
    module('phoneDetail').
    component('phoneDetail', {
      templateUrl : '/phone-detail/phone-detail.template.html',
      controller : PhoneDetailController
    });

    PhoneDetailController.$inject = ['$routeParams']
    function PhoneDetailController($routeParams) {
        this.phoneId = $routeParams.phoneId;
    }
})();
