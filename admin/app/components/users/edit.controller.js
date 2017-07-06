angular.module('asefedex.EditUser', ['asefedex.UsersService'])
	.controller('EditController', ['$scope', '$routeParams', '$window' , 'UsersService' , function ($scope , $routeParams, $window,  UsersService) {
		
		// Id Usuario
		var userId = $routeParams.id;

		/**
		 * Se carga la informacion del usuario
		 */	
		UsersService.get(userId).then(function (data) {
			$scope.user = data[0];					
		});
				
			
		/**
		 * Se actualiza la informacion del usuario
		 */	
		$scope.saveUser = function () {

			UsersService.edit($scope.user);

				$window.location.reload();

		};

	

		

	}])