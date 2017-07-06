angular.module('asefedex.Routes', ["ngRoute"])
	.config(['$routeProvider', function ($routeProvider) {
		
		$routeProvider.when("/home", {
			templateUrl: "app/components/home/home.html",
			controller: 'homeController'
		}).when("/users", {
			templateUrl: "app/components/users/users.html",
			controller: 'UsersController'
		}).when("/users/new", {
			templateUrl: "app/components/users/new.html",
			controller: 'AddController'
		}).when("/users/edit/:id",{
			templateUrl: "app/components/users/edit.html",
			controller: 'EditController'
		}).when("/requestCredit", {
			templateUrl: "app/components/requestCredit/requestCredit.html",
			controller: 'requestCreditController'
		}).when("/christmas-saving", {
			templateUrl: "app/components/christmas-saving/saving.html",
			controller: 'savingController'	
		}).when("/renounce", {
			templateUrl: "app/components/renounce/renounce.html",
			controller: 'renounceController'
		}).when("/payments",{
			templateUrl: "app/components/payments/payments.html",
			controller: 'paymentsController'
		}).when("/accountStatus",{
			templateUrl: "app/components/accountStatus/accountStatus.html",
			controller: 'accountStatusController'
		}).otherwise({ redirectTo: '/home' });

	}]);