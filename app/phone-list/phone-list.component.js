(function() {
  'use strict';

  // Register `phoneList` component, along with its associated controller and template
  angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });

  PhoneListController.$inject = ['Phone'];

  function PhoneListController(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
})();
