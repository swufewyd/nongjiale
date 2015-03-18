
angular.module('njl.home').controller('HomeController', function($scope,$sce,$location){
	
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

	$scope.panels = [];
	$scope.panels.activePanel = 0;
	$scope.slicks = [{'imgUrl':'assets/images/ad1.png'},
	{'imgUrl':'assets/images/ad2.png'},
	{'imgUrl':'assets/images/ad3.png'},
	{'imgUrl':'assets/images/ad4.png'},
	{'imgUrl':'assets/images/ad5.png'},
	{'imgUrl':'assets/images/ad6.png'},
	{'imgUrl':'assets/images/ad7.png'},
	{'imgUrl':'assets/images/ad8.png'},
	{'imgUrl':'assets/images/ad9.png'},
	{'imgUrl':'assets/images/ad10.png'}
	];

	$scope.index = 0;

	$scope.jump = function(params){
		$location.path('inn_face/'+params);
	}
});

