'use strict';

/**
 * @ngdoc overview
 * @name everyvoteTuresoApp
 * @description
 * # everyvoteTuresoApp
 *
 * Main module of the application.
 */
angular
  .module('everyvoteTuresoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'everyvoteFilters',
    'truncate',
    'angularLocalStorage',
    'angular-data.DSCacheFactory'
  ])

  .factory('PersonCache', function (DSCacheFactory) {
    return DSCacheFactory.createCache('PersonCache', {
      storageMode: 'localStorage',
      maxAge: 30*60*1000 // 30 min
    });
  })

  .factory('PostCache', function (DSCacheFactory) {
    return DSCacheFactory.createCache('PostCache', {
      storageMode: 'localStorage',
      maxAge: 30*60*1000 // 30 min
    });
  })

  .factory('OrganizationCache', function (DSCacheFactory) {
    return DSCacheFactory.createCache('OrganizationCache', {
      storageMode: 'localStorage',
      maxAge: 30*60*1000 // 30 min
    });
  })

  .config(['$routeProvider', '$locationProvider', 'DSCacheFactoryProvider',
    function($routeProvider, $locationProvider, DSCacheFactoryProvider) {

    DSCacheFactoryProvider.setCacheDefaults({
      deleteOnExpire: 'passive'
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/candidateListing.html',
        controller: 'CandidateListingCtrl',
        name: 'Election'
      })
      .when('/candidates/:id', {
        templateUrl: 'views/candidateDetail.html',
        controller: 'CandidateDetailCtrl',
        name: 'Election'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        // controller: 'AboutCtrl'
        name: 'About'
      })
      .when('/mycandidates', {
        templateUrl: 'views/candidatePicks.html',
        controller: 'CandidatePicksListingCtrl',
        name: 'My Candidates'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(false);

  }]);
