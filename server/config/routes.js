var path = require('path');
var users = require(path.join(__dirname, '..', 'controllers', 'users.js'))
var items = require(path.join(__dirname, '..', 'controllers', 'items.js'))

module.exports = function(app) {
  app.post('/users', users.login);
  app.get('/logout', users.logout);
  app.get('/getall', users.index);
  app.get('/getuser', users.getUser);
  app.get('/user/session', function(req, res){
		users.getSession(req, res)
	})
  app.post('/user/getone/:id', function(req, res){
		users.getOneUser(req, res);
	})
  app.post('/item/add', function(req, res){
  	items.add(req,res)
  })
  app.get('/items/get', function(req, res){
	items.index(req,res)
	})
  app.get('/item/getone/:id', function(req, res){
	items.showItem(req, res);
	})
  app.post('/item/update/:id', function(req, res){
    items.update(req, res);
  })
   app.post('/item/updateI/:id', function(req, res){
    items.updateI(req, res);
  })

  app.post('/item/delete/:id', function(req, res){
    items.deleteItem(req, res);
  })

 }
