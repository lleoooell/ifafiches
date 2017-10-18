const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Users = require('./models/users.js');
 



const app = express();

// configurer express 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended : true
}));

// parse application/json
app.use(bodyParser.json())

// configuration des chemins statics
app.use('/static', express.static('client/static'));

// servir l'index 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html')
});

// servir l'index 
app.get('/api/users', function(req, res) {
	Users.find({},function (err, users) {
	  if (err) {return handleError(err);}
	  else{
	  	res.send(users);
	  }
	  
	})

});
// servir l'index 
app.get('/api/users/:id', function(req, res) {
	Users.findOne({ '_id' : req.params.id},function (err, user) {
	  if (err) {return handleError(err);}
	  else{
	  	res.send(user);
	  }
	  
	})

});
// servir l'index 
app.post('/api/users', function(req, res) {
	var toSave = new Users(req.body);
	toSave.save(function(err, user){
		if(err){ return handleError(err);}
		else{
			console.log('saved!!');
			res.send(user);
		}
	});
	
});


app.listen(3000,function(){
	console.log("mon application XXXX est bien lancée sur le port 3000");
});
