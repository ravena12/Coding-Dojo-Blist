console.log('hey from users factory front end')
app.factory('userFactory', function($http) {
	var factory = {};
	factory.current_user = null;
	factory.getSession = function(callback){
		$http.get('/user/session').success(function(output){
			callback(output)
		})
	}
	factory.getAll = function(callback){
		$http.get('/getall').success(function(output){
			callback(output)
		})
	}
	factory.getUser = function(callback) {
		$http.get('/getuser').success(function(output){
			factory.current_user = {name : output.name, _id: output._id}
		})
		callback(factory.current_user)
	}
	factory.login = function(user, callback){
		var data = {name :user}
		$http.post('/users', data).success(function(output){
			if(output.error){
				alert('please fill everything out.')
			} else {
				factory.current_user = {name : output.name, _id: output._id}
				if(factory.current_user){
					 callback(factory.current_user.data)	
				}
			}
		})
	}
	factory.getOneUser = function(id, callback){
		$http.post('/user/getone/'+id, id).success(function(output){
			callback(output)
		})
	}
	factory.logout = function(callback){
		$http.get('/logout').success(function(output){
			callback(output)
		})
	}
	return factory;

})