angular.module('njl.filterBox').directive('njlFilterBox', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {
			$scope.foodPrices = [
				{'price':'&lt;20'},
				{'price':'20~30'},
				{'price':'30~40'},
				{'price':'40~50'},
				{'price':'&gt;50'}
			];
			$scope.roomPrices = [
				{'price':'&lt;50'},
				{'price':'50~70'},
				{'price':'70~90'},
				{'price':'90~110'},
				{'price':'&gt;110'}
			];
			$scope.filterByFoodPrice = function(i){
				console.log($scope.foodPrices[i].price);
			}
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'components/filter-box/views/filter-box.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});