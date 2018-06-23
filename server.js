var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log(`[${Date.now()}] User '${socket.id}' is connected`);

  socket.on('draw', coordinates=>{
      socket.broadcast.emit('draw', coordinates);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});