app.controller('itemsController', function($scope, userFactory, itemFactory, $location, $routeParams, $window){
$scope.items =''
$scope.myItems = []
	$scope.items ='';
	$scope.addItem = function() {
		itemFactory.addItem($scope.newItem)	
		itemFactory.getItems(function(data){
				$scope.items = data
			})
 	}
 	itemFactory.getOneItem($routeParams.id, function(data){
		$scope.item_id = $routeParams.id
		$scope.one_item = data;

	})
	$scope.deleteItem = function(id){
		itemFactory.deleteItem(id, function(data){
			itemFactory.getItems(function(data){
				$scope.items = data
			})
		})	
	}
 	userFactory.getSession(function(data){
		$scope.current_user = data.user
		if($scope.current_user.name ==null){
			$window.location.href="/";
		}
	 	itemFactory.getItems(function(data){
				$scope.items = data
				for(item in $scope.items){
					if($scope.current_user.userId == $scope.items[item]._creator._id){
						$scope.myItems.push($scope.items[item])
					}
				}
			})
		})
 	$scope.updateI = function() {
 		$scope.bundle = {itemId : $routeParams.id, info: $scope.updateItem}
 		itemFactory.updateItem($scope.bundle, function(data){
 		})
 	}
 	$scope.update = function(id) {
 		itemFactory.update(id, function(data){
 		 })
 	}
 })
