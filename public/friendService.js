angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      /* FIX ME */
      app.post('/api/login', userCtrl.login)
    };

    this.getFriends = function() {
    	/* FIX ME */
      app.get('/api/profiles', profileCtrl.getFriendProfiles)
    };

});
