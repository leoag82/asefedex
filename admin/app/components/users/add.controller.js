angular.module('asefedex.AddUser', ['asefedex.UsersService'])
	.controller('AddController', ['$scope', 'UsersService' , function ($scope , UsersService) {
		
		$scope.title = 'Nuevo Usuario';

		$scope.user = {
			firstName: '',
			lastName: '',
			idNumber: '',
			password: '',
			inDate: '',
			status: '',
			profile: '',
			email: '',
			phone: '',
		};

		/**
		 * Esta es la funcion que almacena al usuario
		 */
		$scope.saveUser = function () {			
			 

			 UsersService.add($scope.user);
			 
		}

	}])