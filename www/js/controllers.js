angular.module('reminder.controllers', [])

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

.controller('pOCtrl', ['$scope','userService', '$ionicSlideBoxDelegate',
  function($scope, userService, $ionicSlideBoxDelegate) {

    userService.getUsersOfWeek().query({})
    .$promise.then(function(data) {
      console.log(data);
      $scope.usersOfWeek = data;
      $ionicSlideBoxDelegate.slide(0);
      $ionicSlideBoxDelegate.update();
    });

}])

.controller('leiteCtrl', function($scope) {

})

.controller('profileCtrl', function($scope) {
    openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function(user) {
            $scope.$apply(function() {
                $scope.user = user;
            });
        },
        error: function(error) {
            alert('Facebook error: ' + error.error_description);
        }
    });
});
