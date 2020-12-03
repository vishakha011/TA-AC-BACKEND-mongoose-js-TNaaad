var express = require('express');
var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser: true, useUnifiedTopology: true},  (err) => {
    console.log(err ? err: "connected to database");
})

// instantiate the app
var app = express();

// Middleware
app.use(logger('dev'))

// routes
app.get('/', (req, res) => {
    res.send('Welcome')
})

// listener
app.listen(4000, () => {
    console.log("server listening on port 4000")
})