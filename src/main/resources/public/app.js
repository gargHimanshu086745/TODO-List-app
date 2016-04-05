var app = angular.module('ToDoListApp', ['ngRoute','ngResource']);

		app.config(function($routeProvider, $locationProvider){
				$routeProvider.when('/',
				{
					controller: 'ListTasksController',
					templateUrl: '/views/tasks.html'
				})
				.when('/addTask',
				{
					controller: 'AddTasksController',
					templateUrl: '/views/addTasks.html'
				})
				.when('/editTask:id',
				{
					controller: 'EditTasksController',
					templateUrl: '/views/editTasks.html'
				})
				.otherwise({
					redirectTo: '/'
				})
				$locationProvider.html5Mode({
					enabled: true,
					requireBase: false
				});
		});