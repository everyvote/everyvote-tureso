'use strict';

/**
 * @ngdoc function
 * @name everyvoteTuresoApp.controller:EvbodyCtrl
 * @description
 * # EvbodyCtrl
 * Controller of the everyvoteTuresoApp
 */
angular.module('everyvoteTuresoApp')
  .controller('EvPageCtrl', function ($scope) {

    $scope.zone = 'EveryVote University > Student Association';
    $scope.electionName = 'Spring 2015 Semester';
    $scope.summary = "This is a prototype of the EveryVote Townhall election information platform. Learn about, connect with, and share your opinion on all of your candidates for office from one convenient web page. Make a list of the candidates you are voting for in your next election, then share your My Candidates list on other social networks. Our primary focus for 2015 and 2016 is to support and help increase voter turnout in university student elections. We believe that students, better than any other demographic, can demonstrate the remarkable potential of internet technology to improve civic engagement, and that governments and other organizations can learn from their example. EveryVote is free and open source, financially transparent, 100% donation-sustained, and is compliant with international open government data specifications (thanks to Poplus, PopIt, Popolo, and more). EveryVote will never have advertisements, will never sell your data, and will never collect a fee from candidates or users. If you would like your school or organization to use EveryVote in its next election, please email contactus@everyvote.org and we'll help you get started."

    // Hide by default
    $scope.showSummary = false;

    $scope.toggle = function () {
      $scope.showSummary = !$scope.showSummary;
    };

  });
