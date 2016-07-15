angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {
  $scope.fbLogin = function() {
    openFB.login(
      function(response) {
        if (response.status === 'connected') {
          console.log('Facebook login succeeded');
          $scope.closeLogin();
        } else {
          alert('Facebook login failed');
        }
      },
      {scope: 'email,publish_actions'});
  }
})

.controller('pOCtrl', function($scope) {

})

.controller('leiteCtrl', function($scope) {

})
