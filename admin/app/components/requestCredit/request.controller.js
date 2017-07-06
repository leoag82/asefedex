angular.module('asefedex.requestCredit', ['asefedex.UsersService', 'asefedexInit.LoginService'])
	.controller('requestCreditController', ['$scope' , 'UsersService' , 'LoginService' , function ($scope , UsersService , LoginService) {
		
		$scope.title = 'Nuevo Credito';

		$scope.credit = {
			userId: '',
			dateRq: '',
		    creditAmount:  '',
		    termMonths:  '',
		};

		$scope.solicitCredito = function(){

			//console.log($scope.credit);

			LoginService.getSession().then(function (session) {		// esta funcion esta creada en loginservices		
				$scope.credit.userId = session.ID;
				//console.log($scope.credit);
				UsersService.credit($scope.credit);
			});


		}



	}])