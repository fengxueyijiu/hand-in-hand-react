var express = require('express');
var app = express();
var port = require('./config.js').port;
var url = require('./config').url;
var User = require('./models/user');
var routes = require('./routes');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var morgan = require('morgan');
app.use(morgan('dev'));
var mongoose = require('mongoose');
mongoose.connect(url);
var db= mongoose.connection;
db.on('error',function(err){
  console.log('connection failed!')
})
db.once('open',function(){
  console.log('success!');
  var user= new User({
    username: 'billie',
    password: 'ssssss'
  });
  user.save();
});
routes(app);

app.listen(port,function(){
  console.log("running on port "+port+" ....")
})
