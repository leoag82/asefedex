
angular.module('asefedex', ['ngCookies', 'asefedex.Routes', 
	'asefedex.Users', 
	'asefedex.Logout', 
    'asefedex.AddUser' , 
	'asefedex.EditUser' , 
	'asefedex.requestCredit' , 
	'asefedex.saving' , 
	'asefedex.renounce' , 	
	'asefedex.payments' , 
	'asefedex.accountStatus' ,
	'asefedex.home',
	'asefedexInit.LoginService'])
.run(function ($rootScope, $cookieStore, $window, $location, LoginService) {

	

    $rootScope.$on('$routeChangeStart', function()
    {

    	var session = LoginService.getSession();
    	session.then(function (s) {
    		
    		
    		if( s.STATUS != undefined && parseInt(s.STATUS) != 0) {
    			$window.location.href = 'http://localhost:81/asefedex/admin/#!'+$location.path();	
    		} else {
    			$window.location.href = "http://localhost:81/asefedex";	
    		}
			
    	});

  
    });
    	

})
.controller('InitController', ['$scope', 'LoginService', function ($scope, LoginService) {
	
    	var session = LoginService.getSession();
    	session.then(function (s) {
    		
    		$scope.user = s.NOMBRE;
    		
    		
    	});

}]);