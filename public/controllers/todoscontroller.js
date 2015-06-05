var todoApp = angular.module('todoApp', []);

todoApp.controller('todosController', ['$scope', '$http', function ($scope, $http){
  $http.get('/todos').success(function(response){
    $scope.todos = response
  })
  
  $scope.addTodo = function(){
    $http.post('/todo', $scope.todo).success(function(response){
      $scope.todos.push(response);
      $scope.todo = '';
    });
  };

  $scope.deleteTodo = function (id){
    $http.delete('/todo/'+id).success(function (response){  
      var todo = $scope.todos.filter(function(response) {
        return response._id === id;
      })[0];
      index = $scope.todos.indexOf(todo);
      $scope.todos.splice(index, 1);
    })
  }
}])