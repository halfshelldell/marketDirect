module.exports = function (app) {
    app.controller('InventoryController', ['$scope', '$http', '$location', 'loginService', function ($scope, $http, $location, loginService) {


        // $scope.login = function () {
        //     console.log(`${$scope.name} in as we speak`);
        //     loginService.userLogin($scope.name, $scope.password);
        //     $location.path('/explore');
        // };
    }]);
}
