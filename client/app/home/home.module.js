/**
* home Module
*
* Description
*/
angular.module('njl.home', ['ui.router']);

angular.module('njl.home')
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $locationProvider.html5Mode(true);
     $urlRouterProvider.otherwise("/home");
     //
     // Now set up the states
     $stateProvider
       .state('home', {
         url: "/home",
         templateUrl: "app/home/views/home.html",
         controller: 'HomeController'
       })
       

});