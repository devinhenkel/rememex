// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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

.controller("MainController", function($scope, $http, $ionicPopup) {

 // An alert dialog
 $scope.showAlert = function(aval) {
   var alertPopup = $ionicPopup.alert({
     title: 'Person Clicked',
     template: aval
   });

   alertPopup.then(function(res) {
     console.log('Thanks for clicking a person');
   });
 };

  $scope.makeRequest = function (qval) {
    $http(
      {
        url: "https://httpbin.org/get",
        method: "GET",
        param: {
          person: qval
        }
      }
    ).then(
      function(result){
        console.log(JSON.stringify(result));
        $scope.showAlert(JSON.stringify(result.config.param.person));
      },
      function(error){
        console.log(JSON.stringify(error));
        $scope.showAlert(JSON.stringify(error));
      }
    );
  };

  $scope.listObject = {};

  $scope.listObject.a = "Devin Henkel-Legare";
  $scope.listObject.b = "Laura Legare";
  $scope.listObject.c = "Ellie Legare";
  $scope.listObject.d = "Edison Legare";
  $scope.listObject.e = "Emmett Legare";


});
