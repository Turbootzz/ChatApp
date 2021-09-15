// Location where the server is hosted.
const socket = io("http://localhost:3000")

socket.on("chat-message", data => {
    console.log(data) // This is going to be the message Test test I wrote.
})