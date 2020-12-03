var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var articles = new Schema({
    title: String,
    author: String
})