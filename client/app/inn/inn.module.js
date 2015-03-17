angular.module('njl.inn', ['ui.router']);
angular.module('njl.inn')
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $locationProvider.html5Mode(true);
     // Now set up the states
     $stateProvider
       .state('inn_face', {
         url: "/inn_face",
         templateUrl: "app/inn/views/inn_face.html",
         controller: 'InnController'
       })
       

});