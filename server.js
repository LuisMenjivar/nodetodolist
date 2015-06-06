// DEPENDENCIES
var express = require('express')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

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

// ROUTES
// GET TODOS ROUTE
app.get('/todos', function (req, res){
  Todo.find(function (err, docs) {
    if (err) return console.error(err);
    res.json(docs); 
  })
})

// POST TODO ROUTE
app.post('/todo', function (req, res){
  var newTodo = new Todo(req.body);
  newTodo.save(function (err, doc){
    if (err) console.error(err);
    if (doc){
      res.json(doc)}
  })
})

// DELETE ROUTE
app.delete('/todo/:id', function (req, res){

  var todo = Todo.where({_id: req.params.id});
  todo.findOneAndRemove(function (err, doc){
    if (err) console.error (err)
    if (doc) {
      res.json(doc)
    };
  });
});

// UPDATE ROUTE
app.put('/todo/:id', function (req, res){
  var update = req.body; 
  var query = {"_id": req.params.id };
  var options = {new: true};
  Todo.findOneAndUpdate(query, update, options, function (err, doc){
    if (err){ console.error(err) };
    if (doc) { res.json(doc)};
  })
})