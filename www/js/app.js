// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("list", {
      "url": "/list",
      "templateUrl": "templates/list.html",
      "controller": "MainController",
      "cache": false
    })
    .state("account", {
      "url": "/account",
      "templateUrl": "templates/account.html",
      "controller": "AccountController",
      "cache": false
    });

  $urlRouterProvider.otherwise("list");
})

.controller("MainController", function($scope, $http, $ionicPopup, $localStorage) {

  $scope.launchUrl = function(qval){
    window.open('https://www.google.com/search?q='+qval,'_blank','location=yes,disallowoverscroll=no,toolbar=yes,closebuttoncaption=Done');
  };

  $scope.listObject = {};

  $scope.listObject.dad = "Devin Henkel-Legare";
  $scope.listObject.mom = "Laura Legare";
  $scope.listObject.daughter = "Ellie Legare";
  $scope.listObject.son1 = "Edison Legare";
  $scope.listObject.son2 = "Emmett Legare";


});
