var mongoose = require('mongoose');
var Item = mongoose.model('items');
var User = mongoose.model('users')
module.exports={
	add : function(req,res){
		User.findOne({_id: req.session.userId},function(err, user){
			item = new Item({user_name:req.body.user_name.name, title:req.body.title, description:req.body.description, friend:req.body.friend})
			item._creator = user
			user._createdItems.push(item)
			item.save(function(err){
				if(err){
					console.log(err)
				}else{
					User.findOne({name: req.body.friend},function(err, friend){
						friend._createdItems.push(item)
						item.save(function(err){
							if(err){
								console.log(err)
							} else {
								friend.save(function(err){
									if(err){
										console.log(err)
									}
								})
							}
						})
					})
					user.save(function(err){
						if(err){
							console.log(err)
						}
					})
				}
				res.json({status: 'success'})
			})
		})
	},
	index: function(req, res){
		Item.find({})
		.populate('_creator ')
		.exec(function(err, items){

			if(err){
				console.log(err)
			}else{
				res.json(items)
			}
		})
	},
	update: function(req, res){
	
		Item.findOne({_id: req.params.id}, function(err, item){
			item.title = req.body.title,
			item.description = req.body.description,
			item.complete = req.body.complete,
			item.save(function(err){
				if(err){
					console.log(err)
				} else {
					res.json({status: 'success!'})
				}
			})
		})
	},
	updateI: function(req, res){
		Item.update({_id: req.params.id}, {complete : true}, function(err, item){
				if(err){
					console.log(err)
				} else {
					res.json({status: 'success!'})
				}
			})
		
	},
	deleteItem: function(req, res){
	 Item.remove({_id : req.params.id}, function(err, deleted){
	 	if(err){
	 		return res.send(err)
	 	} else {
	 		return res.send({status: 'deleted!'})
	 	}
	 })
	},

	showItem :  function(req, res){
		Item
		.findOne({_id : req.params.id}, function(err, item){
			if (err){
				return res.send(item)
			} else {
				return res.send(item)
			}
		})
	}
}