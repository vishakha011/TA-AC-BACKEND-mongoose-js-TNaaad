var express = require('express');
var mongoose = require('mongoose');


// Connect to db
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true, useUnifiedTopology: true},  (err) => {
    console.log(err ? err: "connected to database");
});


// instantiate app

var app = express();


// Route
app.get('/', (req, res) => {
    res.send("Welcome")
});


// listener 
app.listen(3000, () => {
    console.log("server listening on port 4000")
});