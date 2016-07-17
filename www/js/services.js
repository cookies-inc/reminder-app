'use strict';

angular.module('reminder.services', ['ngResource'])
	.constant("baseURL","http://localhost:3000/")
	.service('userService', ['$resource', 'baseURL',
		function($resource,baseURL){
			this.getUsersOfWeek = function() {

			  return $resource(baseURL+"users");

			};
		}
	])

	.factory('BlankFactory', [function(){}]);

