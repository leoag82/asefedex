angular.module('asefedexInit.LoginService', ['firebase', 'ngCookies'])
	.factory('LoginService', ['$firebaseObject', '$window', '$cookieStore', '$http', function ($firebaseObject, $window, $cookieStore, $http) {

        var usersTable = firebase.database().ref().child('users');
        var usersObj = $firebaseObject(usersTable);
		
		var _SERVICE = "http://localhost:81/fedexservice/rest.php";

		var service = {

			validateUser: function (user, pass) {
				
				$http({
				    method: "post",
					url: _SERVICE,
				  	data: {
				  		action: "validate-user",
				  		u: user,
				  		p: pass
				  	},
				    headers: { 'Content-Type': 'application/json' }
				}).then(function successCallback(response) {
				
				    var result = response.data[0];
				    
				    if(result != null) {
				    	
			    		/* START */
						$http({
						    method: "post",
							url: _SERVICE,
						  	data: {
						  		action: "create-session",
						  		user: result
						  	},
						    headers: { 'Content-Type': 'application/json' }
						}).then(function successCallback(response) {

							var created = response.data;

							console.log(created);
							
							if (created > 0) {
								$window.location.href = "http://localhost:81/asefedex/admin/#!/home";
							} else {

							}

						}, function errorCallback(error) {
						    // called asynchronously if an error occurs
						    // or server returns response with an error status.
						});
						/* END */
				    	
				    } else {
				    	alert("El usuario NO Existe");
				    }

				  }, function errorCallback(response) {
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
				  }); 

				/*$http({
				  method: 'GET',
				  url: 'http://localhost:81/fedexservice/rest.php?user=2&num=10&format=json'
				}).then(function successCallback(response) {
				    console.log(response.data);
				  }, function errorCallback(response) {
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
				  }); */

				/*
	            usersObj.$loaded().then(function (data) {
	                
	                var userInfo = [];                
	                angular.forEach(data, function (userData, key) {

	                    if (userData.empId === user && userData.password === pass) {
	                        userInfo.push({'id':key, 'record':userData});
	                    }

	                }, userInfo);
	               
	                if (userInfo.length > 0) {
	                    $cookieStore.put('userLogin', userInfo[0].id);
	                    $window.location.href = "http://localhost:81/asefedex/admin/#!/home";
	                } else {
	                    alert("Credeciales Incorrectos!");
	                }
	                
	            });
				*/

			},
			getSession: function () {
				return $http({
					    method: "post",
						url: _SERVICE,
					  	data: {
					  		action: "get-session"
					  	},
					    headers: { 'Content-Type': 'application/json' }
					}).then(function successCallback(response) {

						return response.data;

					}, function errorCallback(response) {
					    // called asynchronously if an error occurs
					    // or server returns response with an error status.
					}); 

				},
				closeSession: function () {
					$window.location.href = "http://localhost:81/asefedex";	
				}

		};

		return service;

	}]);