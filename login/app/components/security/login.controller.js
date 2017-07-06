angular.module('asefedexInit.LoginController', ['asefedexInit.LoginService'])
    .controller('LoginController', ['$scope', 'LoginService', function ($scope, LoginService) {
        
        $scope.title = 'Ingreso Usuarios';
        $scope.subtitle = 'Ingrese sus credenciales';

        $scope.userlogin = function () {
            var user = $scope.user;
            var pass = $scope.pass;

            LoginService.validateUser(user, pass);            
            
        };
        

    }]);