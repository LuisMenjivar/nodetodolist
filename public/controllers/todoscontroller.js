var todoApp = angular.module('todoApp', []);

todoApp.controller('todosController', ['$scope', '$http', function ($scope, $http){
  $http.get('/todos').success(function(response){
    $scope.todos = response
  })


 
  // $http.get('/persons').success(function(response){
  //   console.log("this is comming from the /persons get");
  // $scope.persons = response;
  // $scope.updateButton = true
  // // $scope.deleteButton = true
  // });

}])