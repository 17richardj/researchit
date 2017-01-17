var express =require('express');             //adds express
var app = express();                         //intializes app to be a function
app.use(express.static("public"));          //allow the app to access the /publc directory (for css,jquery, etc)
var http = require('http').Server(app);     //initializes app to supply a http server


app.get('/', function(req, res){              //define route handler that gets called when we hit our website home
  res.sendFile(__dirname + '/public/html/index.html');    //use send Send File to add index.html
});

http.listen(8000, function(){
  console.log('listening on localhost:8000');   //server listens on port 8000
});
