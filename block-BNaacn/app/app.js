var express = require('express');
var mongoose = require('mongoose');

// Connect to db
mongoose.connect("mongodb://localhost/sample", { useNewUrlParser: true,  useUnifiedTopology: true},  (err) => {
    console.log(err ? err : "connected to the database");
});

// instantiate the app
var app = express();

// Middlewares

// Routes
app.get('/', (req, res) => {
    res.send("Welcome")
})

// Error

// listener
app.listen(5000, () => {
    console.log('server listening on port 5000')
});