app.controller('usersController', function($scope, userFactory, $location, $window, $routeParams){
	$scope.current_user = null;
	$scope.users = [];
	$scope.exclude = [];
	userFactory.getSession(function(data){
		$scope.current_user = data.user
		$scope.updateUser = $scope.current_user
		if($scope.current_user.name ==null){
			$location.url('/')
		}
	})
	userFactory.getUser(function(data){
		$scope.current_user = data
		if(!$scope.current_user){
			$location.url('/')
		}
	})
	userFactory.getAll(function(data){
		$scope.users = data;
		for(item in $scope.users){
				if($scope.current_user.name != $scope.users[item].name){
					$scope.exclude.push($scope.users[item])
				}
			}
		})
	$scope.login = function() {
		if(typeof ($scope.newUser) !== 'undefined'){
			userFactory.login($scope.newUser.name, function(data){
				$scope.current_user = data;
				$location.url('/dashboard')
			})
		} else {
			alert('fill out the form please')
		}
	}
	$scope.logout = function() {
		userFactory.logout(function(data){
			$location.url('/')
		})
	}
	userFactory.getOneUser($routeParams, function(data){
			$scope.user_id = $routeParams.id
			$scope.one_user = data;
	})
})