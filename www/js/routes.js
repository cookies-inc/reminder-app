angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.pO', {
    url: '/pao',
    views: {
      'tab1': {
        templateUrl: 'templates/pO.html',
        controller: 'pOCtrl'
      }
    }
  })

  .state('tabsController.leite', {
    url: '/leite',
    views: {
      'tab2': {
        templateUrl: 'templates/leite.html',
        controller: 'leiteCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/pao')

  

});