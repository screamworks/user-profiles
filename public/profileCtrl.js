angular.module('userProfiles')
.controller('profileCtrl', function( friendService, $scope ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
  $scope.user = friendService.getFriends().then(function(res){
    $scope.currentUser = res.data.currentUser
    $scope.friends = res.data.friends
  })
});
