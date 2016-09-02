app.factory('itemFactory', function($http){
	var factory = {};
	factory.addItem = function(data){
		$http.post('/item/add', data).success(function(output){

		})
	}
	factory.getItems = function(callback){
		$http.get('/items/get/').success(function(output){
			callback(output)
		})
		
	}
	factory.getOneItem = function(id, callback){
		$http.get('/item/getone/'+id).success(function(output){
			callback(output)
		})
	}
	factory.updateItem = function(data, callback){
		$http.post('/item/update/'+data.itemId, data.info).success(function(output){
			callback(output)
		})

	}
	factory.update = function(data, callback){
		$http.post('/item/updateI/'+data).success(function(output){
			callback(output)
		})
	}
	factory.deleteItem = function(id, callback){
		$http.post('/item/delete/' + id).success(function(output){
			callback(output)
		})
	}
	return factory;
});