var todoApp = angular.module('todoApp', []);

todoApp.controller('todosController', ['$scope', '$http', function ($scope, $http){
  $http.get('/todos').success(function(response){
    $scope.todos = response
    $scope.updateButton = true;
  })
  // ADD TODO
  $scope.addTodo = function(){
    $http.post('/todo', $scope.todo).success(function(response){
      $scope.todos.push(response);
      $scope.todo = '';
    });
  };
 // DELETE TODO
  $scope.deleteTodo = function (id){
    $http.delete('/todo/'+id).success(function (response){  
      var todo = $scope.todos.filter(function(response) {
        return response._id === id;
      })[0];
      index = $scope.todos.indexOf(todo);
      $scope.todos.splice(index, 1);
    })
  }
 // EDIT TODO 
  $scope.edit = function(todo){
    index = $scope.todos.indexOf(todo)
    console.log(index);
    $scope.todo = todo;
    $scope.addButton = true;
    $scope.deleteButton = true
    $scope.updateButton = false;
  };
 // UPDATE TODO
  $scope.update = function () {
    var id =  $scope.todo._id;
    $http.put('/todo/'+id, $scope.todo).success(function(response){
      $scope.todos.splice(index, 1, response);
    });
    $scope.addButton = false;
    $scope.deleteButton = false
    $scope.updateButton = true;
    $scope.todo = '';
  };
  $scope.cancel = function (){
    $scope.addButton = false;
    $scope.deleteButton = false
    $scope.todo = '';
  }

}]) //end of Todos controller

