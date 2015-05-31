var WebSocket = require('ws')
  , ws = new WebSocket('ws://localhost:8181');
ws.on('open', function() {
    ws.send("Time Please");
});
ws.on('message', function(message) {
    console.log('received: %s', message);
});
