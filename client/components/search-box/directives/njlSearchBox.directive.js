angular.module('njl.searchBox').directive('njlSearchBox', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			preLabel:'=preLabel',
			placeHolder:'=placeHolder',
			activePanel:'=activePanel'

		}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {
			$scope.goSearch = function(){
				console.log($scope);
				console.log($scope.$parent);
				$scope.activePanel = 1;
				// $scope.activePanel = 1;
				// console.log($scope);
			}
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'components/search-box/views/search-box.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			var input = angular.element(iElm).find("input");
			var searchButton = angular.element(iElm).find("a");
			input.on("keyup", function( event ){
				if (event.keyCode == "13") {
					searchButton.click();
				}
			});


		}
	};
});