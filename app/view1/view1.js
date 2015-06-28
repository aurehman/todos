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
    	$scope.todos = data;
    	console.log (data);

    });
}; /// process json ends

$scope.addTask = function (taskInput) {
	 $scope.loading = true;
	$http.get ('../app/lib/addTask.php?task='+taskInput).success (function (data) {
		$scope.todoInput="";
		getTask();
		$scope.loading = false;
	});
}; //add task ends

$scope.deleteTask = function (taskID) {
	$scope.loading = true;
$http.get('../app/lib/deleteTask.php?taskID='+taskID).success (function(data) {
	getTask();
	$scope.loading = false;
});
}; //delete task ends

$scope.updateStatus = function (item, status, task) {
	$scope.loading = true;
if (status == "2"){status="0"} else{status="2"}
	$http.post('../app/lib/updateTask.php?taskID='+item+"&status="+status).success(function(data){
		getTask();
		$scope.loading = false;
	});

};
     
});