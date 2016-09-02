var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name : { type : String, required : true, unique : true },
  _createdItems : [{ type: mongoose.Schema.Types.ObjectId, ref: 'items'}],
}, { timestamps: true });

mongoose.model('users', userSchema);
