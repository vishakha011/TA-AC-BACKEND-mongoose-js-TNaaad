var express = require('express');
var mongoose = require('mongoose');

// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/test", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log(err ? err : "Connected to Database")
})

// instantiate the app
var app = express();


// Middleware

// Routes

// Error

// listener
app.listen(3000, () => {
    console.log('server listening on port 3000')
});