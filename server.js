// Import socket.io and runs the server on the port 3000
const io = require ("socket.io")(3000)

// Gives everyone that connects their own socket
io.on("connection", socket => {
    console.log("new User")
    socket.emit("emit-message", "Test test") // Everytime someone joins gets this message
})