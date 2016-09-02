var mongoose = require('mongoose');
var User = mongoose.model('users');
module.exports = {
  index: function(req, res) {
    User.find(function(err, users){
      if(err){
        res.send(err);
      } else {
        res.send(users)
      };
    })
  },
  login: function(req, res){
    if (!req.body.name) return res.send({error: 'no_name_in_body'})
    User.create(req.body,function(err, newUser){
      if(err) {
        return User.findOne({name: req.body.name}, function(err, existingUser){
          req.session.name = existingUser.name;
          req.session.userId = existingUser._id;
          return res.send(existingUser);
        });
      } 
      req.session.name = newUser.name;
      req.session.userId = newUser._id;
      return res.send(newUser);
      
    });
  },
  logout : function(req, res) {
    req.session.destroy();
    res.send({success: true});
  },
  getSession : function(req, res){
    if(req.session.name === undefined){
      res.json({status:'failed', user: {name: null, userId: null}})
    }else{
      res.json({status: 'successdd', user: {name: req.session.name, userId: req.session.userId}})
    }
  },
   getOneUser: function(req, res){
    User.findOne({_id : req.body.id})
      .populate('_createdItems')
        .exec(function(err, user){
          if(err){
            console.log(err)
          }else {
            res.send(user)
          }
      })
  },
  getUser: function(req, res) {
    if(!req.session.userId){
    user = {
      name: null, 
      _id: null,
      } ,res.send(user)
    } else {
      user = {
      name: req.session.name, 
      _id: req.session.userId,
    },
    res.send(user)

    }
    
  }

};