
angular.module('njl.inn').controller('InnController', function($scope,$stateParams,$http,$location){
	// console.log($stateParams);
	$http.post("/api/test/",{params: {id:$stateParams.inn_id}})
	.success(function(response) {
		// console.log(response);
		$scope.name = response.name;
	});



});