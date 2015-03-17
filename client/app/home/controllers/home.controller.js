
angular.module('njl.home').controller('HomeController', function($scope,$sce){
	
	$scope.myModalFour = {title: 'create a bookmark', content: 'Hello Modal<br />This is a multiline message!'};
	$scope.aside = {
	  "title": "Title",
	  "content": "Hello Aside<br />This is a multiline message!"
	};



	$scope.saveTag = function(){
		// console.log($scope.tagObj.tagname);
		$scope.tags.push($scope.tagObj.tagname);
		$scope.tagObj.tagname = "";
	}
	$scope.tags = [];

	$scope.tagObj = {};
	$scope.tagObj.tagname = 'hahah';
});

