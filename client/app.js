'use strict';


angular.module('njl.main',['ngAnimate', 'ngSanitize','mgcrea.ngStrap','njl.home']);

angular.module('njl.main')
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    // For any unmatched url, redirect to /state1
    /*$locationProvider.html5Mode(true);
     $urlRouterProvider.otherwise("/home");
     //
     // Now set up the states
     $stateProvider
       .state('home', {
         url: "/home",
         templateUrl: "app/home/views/home.html",
         controller: 'HomeCtrl'
       })*/
})
.run(function($http,$location,$rootScope,activeNavbarService){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        // event.preventDefault(); 
        if(toState.name == 'home'){
          activeNavbarService.key = [false,false,false];
        }else if(toState.name.indexOf('task')!== -1 ){
          activeNavbarService.key = [true,false,false];
        }
    });
})
//存储导航条当前激活的值
.factory('activeNavbarService',  function(){
  return {
    // 'key':'home'
    'key':[false,false,false]
  };
});


//只有第一次加载和f5刷新的时候会执行,页面内跳转不执行
/*mainModule.run(function($http,$location,$rootScope,SessionService){
    $rootScope.$on('$locationChangeStart', function(evt) {
      SessionService.getSessionData().then(function(dataResponse) {
          if(dataResponse.data.isLogin==="0"){
            $location.path('/login');
          }else{
          }
      });
    });
});*/