module.exports=function(app){
app.factory('newItemService', ['$http', function ($http) {
    let shoppinglistItems = [];
    // $scope.Cat = '';
    // $scope.Name = '';
    // $scope.Desc = '';
    // $scope.Quant = '';
    // $scope.Price = '';
    return {

        addNEWitems: function (){
          console.log("sending diz")
          $http({
            method:'POST',
            url: "create-item"
          }).then(function(response){
            console.log("we created" + response);
            return response;
          });
          console.log("the end")
        },
        getSLItems: function () {
          var promise = $http({
                method: 'GET',
                url: 'get-items'
            }).success(function (response) {
                console.log(response);
                return response;
                // angular.copy(response., slItems);
            }).error(function (response) {
               return {"status": false};
            });

            return promise;
        },

         // borrowBook: function (target) {
        //  console.log("borrowing diz")
        //  $http({
        //    method: "POST",
        //    url: "http://10.1.10.215:7000/library/borrow/" + target.id
        //  }).then(function(response){
        //    console.log(response)
        //    angular.copy(response.data.books,allBooks);
        //
        //  })

        // /* POST request to update one book */
        // borrowBook: function (book) {
        //
        // },
        // /* POST request to update one book */
        // returnBook: function (book) {
        //
        // },
    };
}]);
}
// testing
