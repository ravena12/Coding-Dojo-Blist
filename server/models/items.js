var mongoose = require('mongoose');
var itemsSchema = new mongoose.Schema({
	title: {type : String, required : true},
	user_name: {type: String},
	description: {type : String, required : true},
	_creator : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	complete: {type: Boolean, default : false},
	friend : {type: String},
}, { timestamps: true
});
mongoose.model('items', itemsSchema);