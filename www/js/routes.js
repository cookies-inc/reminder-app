angular.module('reminder.routes', [])

// .config(
//   //openFB.init({appId: '123456'})
// )

.config(
  function($stateProvider, $urlRouterProvider) {
    openFB.init({appId: '1722281661359340'});

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

  .state('main', {
    url: '/page',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('main.login', {
    url: '/login',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('main.pO', {
    url: '/pao',
    views: {
      'tab2': {
        templateUrl: 'templates/pO.html',
        controller: 'pOCtrl'
      }
    }
  })

  .state('main.leite', {
    url: '/leite',
    views: {
      'tab3': {
        templateUrl: 'templates/leite.html',
        controller: 'leiteCtrl'
      }
    }
  })

  .state('main.profile', {
  url: "/profile",
  views: {
      'menuContent' :{
          templateUrl: "templates/profile.html",
          controller: "ProfileCtrl"
      }
  }
})

  $urlRouterProvider.otherwise('/page/login')

});
