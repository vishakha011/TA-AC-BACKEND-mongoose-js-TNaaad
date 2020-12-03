var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema({
    name : String,
    email : {type: String, lowercase: true},
    age : {type: Number, default: 0},
    favourite : [String],
    marks : [Number]
});

var address = new Schema({
    village : String,
    city : String,
    state : String,
    pin : Number,
    user : Schema.Types.ObjectId
})