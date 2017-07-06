angular.module('asefedex.UsersService', [])
.factory('UsersService', ['$http', function ($http) {
	
	var _SERVICE = "http://localhost:81/fedexservice/rest.php";

	return {
		all: function () {
			
			return $http({
			    method: "post",
				url: _SERVICE,
			  	data: {
			  		action: "get-all-users"
			  	},
			    headers: { 'Content-Type': 'application/json' }
			}).then(function successCallback(response) {

				return response.data;

			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			}); 			
			
		}, 
		get: function (id) {


			return $http({
			    method: "post",
				url: _SERVICE,
			  	data: {
			  		action: "get-user",
			  		id: id
			  	},
			    headers: { 'Content-Type': 'application/json' }
			}).then(function successCallback(response) {

				return response.data;

			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			}); 			

		},
		
		add: function (userNew) {
			return $http({
			    method: "post",
				url: _SERVICE,
			  	data: {
			  		action: "add-users",
			  		firstName: userNew.firstName,
		  			lastName: userNew.lastName,
		  			idNumber: userNew.idNumber, 
		  			password: userNew.password,
		  			inDate: userNew.inDate,
		  			status: userNew.status,
		  			profile: userNew.profile,
		  			email: userNew.email,
		  			phone: userNew.phone
			  	},
			    headers: { 'Content-Type': 'application/json' }
			}).then(function successCallback(response) {

				return response.data;

			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			}); 			

		},		

		delete: function (userId) {
			return $http({
			    method: "post",
				url: _SERVICE,
			  	data: {
			  		action: "delete-user",
			  		id: userId
			  	},
			    headers: { 'Content-Type': 'application/json' }
			}).then(function successCallback(response) {
			
				return response.data;

			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			}); 
		},
		
		edit: function (updUser) {

			return $http({
			    method: "post",
				url: _SERVICE,
			  	data: {
			  		action: "edit-user",
			  		Id: updUser.Id,			  		
					firstName: updUser.first_name,
		  			lastName: updUser.last_name,
		  			Id_emp: updUser.Id_emp,
		  			idNumber: updUser.Id_number, 
		  			password: updUser.password,
		  			inDate: updUser.in_date,
		  			status: updUser.status,
		  			profile: updUser.profile,
		  			email: updUser.email,
		  			phone: updUser.phone

			  	},
			    headers: { 'Content-Type': 'application/json' }
			}).then(function successCallback(response) {
				console.log(response);

				return response.data;

			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			}); 		
			
				
		},

		saving: function (saving) {
			return $http({
			    method: "post",
				url: _SERVICE,
			  	data: {
			  		action: "saving-christmas",
			  		Id: saving.userId,			  		
			  		Qsaving: saving.saving,
			  		date: saving.date			  		
			  	},
			    headers: { 'Content-Type': 'application/json' }
			}).then(function successCallback(response) {
				//console.log(saving);
				return response.data;
				
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			}); 		
		},
		
		credit: function (credit) {
			return $http({
			    method: "post",
				url: _SERVICE,
			  	data: {
			  		action: "request-credit",
			  		Id: credit.userId,	
			  		dateRq: credit.dateRq,
		  			creditAmount: credit.creditAmount, 
			  		termMonths: credit.termMonths
			  		
			  	},
			    headers: { 'Content-Type': 'application/json' }
			}).then(function successCallback(response) {
				console.log(response);
				return response.data;
				
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			}); 		
		},
		
		status: function (status) {
			return $http({
			    method: "post",
				url: _SERVICE,
			  	data: {
			  		action: "request-status",
			  		Id: status.userId,
			  		mount: status.datesv
			  	},
			    headers: { 'Content-Type': 'application/json' }
			}).then(function successCallback(response) {
				//console.log(response);
				return response.data;
				
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			}); 		
		}
	
	};

}])