'use strict';

describe('phoneList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('phoneList'));
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Test the controller
  describe('controller', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json')
      .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}, {name: 'Bacon Cheese Burger'}]);
      ctrl = $componentController('phoneList');
    }));
    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should create a `phones` model with 3 phones using http', function() {
      expect(ctrl.phones).toEqual([]);
      $httpBackend.flush();
      expect(ctrl.phones.length).toBe(3);
    });

    it('should set a default value for the `orderProp` model', function() {
      $httpBackend.flush();
      expect(ctrl.orderProp).toBe('age');
    });
  });
});
