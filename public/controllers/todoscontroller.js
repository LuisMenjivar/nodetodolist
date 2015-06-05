var todoApp = angular.module('todoApp', []);

todoApp.controller('todosController', ['$scope', function($scope){
  $scope.todos = [{name: "this is the todo name"}];
}])