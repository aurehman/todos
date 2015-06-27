'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
 getTask();

function getTask() {
    $http.get('../app/lib/getTask.php').success(function (data) {
    	$scope.tasks = data;
    	console.log (data);

    });
}; /// process json ends

$scope.addTask = function (taskInput) {
	$http.get ('../app/lib/addTask.php?task='+taskInput).success (function (data) {
		getTask();
	});
}; //add task ends

$scope.deleteTask = function (taskID) {
$http.get('../app/lib/deleteTask.php?taskID='+taskID).success (function(data) {
	getTask();
})
}; //delete task ends
     
});