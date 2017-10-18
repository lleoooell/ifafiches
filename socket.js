const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io');

// créer instance express
const app = express();
// creer serveur http avec notre instance d'express en paramètre
var server = require('http').createServer(app);  
// créer notre serveur socket avec notre serveur http en paramètre
var io = require('socket.io')(server);
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
    res.sendFile(__dirname + '/client/socket.html');
});
// gestion des évènements
io.sockets.on('connection', function (socket) {
    console.log("un client est connecté");
    // socket.emit('monsocket', { hello: "world" });
    io.sockets.emit('monsocket', { hello: "world" });
  
});

server.listen(3002,function(){
	console.log("mon application socket est bien lancée sur le port 3002");
});

