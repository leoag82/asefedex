angular.module('asefedex.saving', ['asefedex.UsersService', 'asefedexInit.LoginService'])
	.controller('savingController', ['$scope' ,'UsersService' , 'LoginService' , function ($scope , UsersService , LoginService) {
		
		$scope.title = 'Ahorro Navideño';

		$scope.ahorro = {
			userId:'',
			saving: '',
			date: '',
		};
		
		$scope.christSaving = function () {			
			LoginService.getSession().then(function (session) {				
				$scope.ahorro.userId = session.ID;
				//console.log($scope.ahorro);
				UsersService.saving ($scope.ahorro);
			});
			
			

		}

	}])