angular.module('asefedex.payments', [])
	.controller('paymentsController', ['$scope', '$firebaseArray' ,  function ($scope , $firebaseArray) {
		
		$scope.title = 'Sus pagos';
		$scope.payment = {
			invoice: '',
			amount: '',
			mountPayment:'',

		};

				$scope.payments = function () {			
			 var paymt = firebase.database().ref().child('payments');
			 var x = $firebaseArray(paymt);

    		 x.$add($scope.payment);			 
		}


	}]);