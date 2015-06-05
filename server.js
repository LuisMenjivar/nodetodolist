var express = require('express')
var app = express();

app.use(express.static(__dirname + "/public"));

// get todos route
app.get('/todos', function (req, res){
  todos = [{name: "this is the todo name"}];
  res.json(todos);
})


// server
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});