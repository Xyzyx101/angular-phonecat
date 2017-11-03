'use strict';
describe('phoneDetail', function() {

  beforeEach(module('phoneDetail'));
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  describe('PhoneDetailController', function() {
    var $httpBackend, ctrl;
    var xyzPhoneData = {
      name:'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);
      $routeParams.phoneId = 'xyz';
      ctrl = $componentController('phoneDetail');
    }));
    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
    
    it('should fetch the phone details', function() {
      expect(ctrl.phone).toEqual({});
      $httpBackend.flush();
      expect(ctrl.phone).toEqual(xyzPhoneData);
    });
  });
});
