var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title : String,
    description : {type: String, maxlength: 200}
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;