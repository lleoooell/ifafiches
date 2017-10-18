const express = require('express');
const bodyParser = require('body-parser');

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
    res.sendFile(__dirname + '/client/index2.html')
});

app.get('/api/maliste', function(req, res) {
	var toReturn = ["item1", "item2","item3"];
    res.send(toReturn);
});

app.listen(3001,function(){
	console.log("mon application XXXX est bien lancée sur le port 3001");
});
