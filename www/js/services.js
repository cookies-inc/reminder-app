'use strict';

angular.module('reminder.services', ['ngResource'])
	.constant("baseURL","http://localhost:3000/")
	.service('userService', ['$resource', 'baseURL',
		function($resource,baseURL){
			
			this.getUsersOfWeek = function() {

			  return $resource(baseURL+"week/users");

			};

			this.setDone = function(data) {
				//console.log(data);
				return $resource(baseURL+"historical",{}, {
					update : { method: "POST", params: data }}
				);
			};
		}
	])

	.factory('BlankFactory', [function(){}]);

