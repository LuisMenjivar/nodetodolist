// DEPENDENCIES
var express = require('express')
var app = express();
var mongoose = require('mongoose');


// SERVER
app.use(express.static(__dirname + "/public"));
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// Database
var uristring = 'mongodb://localhost/test';
mongoose.connect(uristring);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) { 
});
// Todos Schema
var todoSchema = mongoose.Schema({
    name: String
});
var Todo = mongoose.model('Todo', todoSchema);


// GET TODOS ROUTE
app.get('/todos', function (req, res){
  Todo.find(function (err, docs) {
    if (err) return console.error(err);
    res.json(docs); 
  })
})
