(function() {
  "use strict";
  angular.
  module('phonecatApp').
    config(configure);

  configure.$inject = ['$locationProvider', '$routeProvider'];
  function configure($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
    when('/phones', {
      template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>'
    }).
    otherwise('/phones');
  }
})();
