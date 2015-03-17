angular.module('sb.home').filter('trustHtml', function($sce) {
	return function(input) {
		return $sce.trustAsHtml(input);
	}
});