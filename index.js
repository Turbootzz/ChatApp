const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// can add files like style.css to the index.html
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
  });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

  // Gives everyone that connects their own socket
io.on("connection", socket => {
    console.log("New User Has Joined")
    
    //socket.emit("emit-message", "Test test") // Everytime someone joins gets this message
})

server.listen(3000, () => {
  console.log('listening on *:3000');
});