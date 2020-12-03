var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var address = new Schema({
    village : String,
    city : String,
    state : String,
    pin : Number,
    user : Schema.Types.ObjectId
})