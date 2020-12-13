var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user')

// connect to db
mongoose.connect("mongodb://localhost/assignment2", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log(err ? err : "Connected to db");
});

// instantiate app
var app = express();

// Middleware
app.use(express.json());


// Routes

// Create
app.post('/users', (req, res, next) => {
    User.create(req.body, (err, createUser) => {
        if(err) return next(err);
        res.json(createUser)
    })
});

// find/Read
app.get('/users', (req, res, next) => {
    User.find({}, (err, createdUsers) => {
        if(err) return next(err);
        res.json({Users : createdUsers})
    })
});

app.get('/users/:id', (req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, userById) => {
        if(err) return next(err);
        res.json(userById);
    })
});

// app.get('/users', (req, res, next) => {
//     User.find({"name" : "String 2"}, (err, user) => {
//         if(err) return next(err);
//         res.json({Users: user})
//     })
// });

// app.get('/users', (req, res, next) => {
//     User.findOne({"name" : "String 1"}, (err, user) => {
//         if(err) return next(err);
//         res.json(user)
//     })
// });

// Update

app.put('/users/:id', (req, res, next) => {
    console.log(req.body)
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedUser) => {
        if(err) return next(err);
        res.json(updatedUser)
    })
});

app.put('/users/:id', (req, res, next) => {
    console.log(req.body)
    User.findOneAndUpdate({name: String}, {new: true}, (err, updatedUser) => {
        if(err) return next(err);
        res.json(updatedUser)
    })  
});

// Delete
app.delete('/users/:id', (req, res, next) => {
    var id = req.params.id;
    User.findByIdAndDelete(id, (err, deletedUser) => {
        if(err) return next(err);
        res.json(`Deleted User : ${deletedUser}`)
    })  
});



// Error
app.use((req, res, next) => {
    res.sendstatus(404).send("Page Not Found");
});

app.use((err, req, res, next) => {
    res.send(err);
    next();
})

// Listener

app.listen(4000, () => {
    console.log('server listening on port 4000')
});