angular.module('asefedex.Users', ['asefedex.UsersService'])
	.controller('UsersController', ['$scope', 'UsersService', '$window', function ($scope, UsersService, $window) {
		
		$scope.title = "Administracion de Usuarios";


		UsersService.all().then(function (all) {
			$scope.users = all[0];
			//console.log($scope.users);
		});

		$scope.delete = function (userId) {


			UsersService.delete(userId).then(function (result) {
				
				if(result[0] == true){
					
					//Refresh page in Angular

					$window.location.reload();

				} else{
					console.log("Usuario NO Borrado");
				}

			});

		}		
/*
		UsersService.get(0).then(function (u) {
			console.log(u);
		})
*/		

	}])