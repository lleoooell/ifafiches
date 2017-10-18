const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
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

app.get('/webservice', function(req, res) {
	request('http://localhost:3001/api/maliste', function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body); // Print the HTML for the Google homepage.
	  if(body){
	  	var tb = [];
	  	var bodyJson = JSON.parse(body);
	  	bodyJson.forEach(function(item){
	  		newitem = {};

	  		newitem.value1 = item;
	  		newitem.createdBy = 'leo',
	  		newitem.createdAt = new Date();

	  		tb.push(newitem);
	  	})
	  	res.send(tb);
	  }
	  
	});
	
});

app.listen(3000,function(){
	console.log("mon application XXXX est bien lancée sur le port 3000");
});
