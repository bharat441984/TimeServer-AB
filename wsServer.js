
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8181});
  
  var request = require('request');
  var message = "time";

// request to httpserver
function sendreq(){
request({
    url: 'http://localhost:3000/time',
	qs: {from: 'timez', time: +new Date()},
    method: 'GET',

}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
		message = body;
}
});
}
var time = 
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
		sendreq();
        console.log('received: %s', message);
    });
setInterval(function(){
	sendreq();
	ws.send(message);
	}, 10000);
});
    

