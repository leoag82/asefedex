angular.module('asefedex.accountStatus', ['asefedex.UsersService' , 'asefedexInit.LoginService'])
	.controller('accountStatusController', ['$scope', 'UsersService' , 'LoginService' , function ($scope , UsersService , LoginService) {
		
		$scope.title = 'Estado de cuenta';

		$scope.acctStatus = {
			userId:'',
			Id_emp:'',
			datesv: '',
		};	

		$scope.acctsaving = function () {
			LoginService.getSession().then(function (session) {				
				$scope.acctStatus.userId = session.ID;
				//console.log($scope.ahorro);
				UsersService.status ($scope.acctStatus);
			});
			
			


		}

	}])