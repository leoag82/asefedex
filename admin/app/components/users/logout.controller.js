angular.module("asefedex.Logout", ['asefedexInit.LoginService'])
	.controller("Logout", ['$scope', 'LoginService', function ($scope, LoginService) {
	

	$scope.closeSession = function () {
		
		LoginService.closeSession();

	};


}]);