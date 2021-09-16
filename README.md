# controllerjs
 This is my first experience with NodeJS and Socket.io

# Explanation method 1

download notejs

open folder in vsc
type in terminal
npm init
npm i socket.io
npm i --save-dev nodemon

en dan in package.json type je onder scripts

	"devStart": "nodemon server.js"

maak file genaamd server.js

dan in terminal: npm run devStart

type dit in server.js :

// Import socket.io and runs the server on the port 3000
const io = require ("socket.io")(3000)

// Gives everyone that connects their own socket
io.on("connection", socket => {
    console.log("new User")
    socket.emit("emit-message", "Test test") // Everytime someone joins gets this message
})


maak script.js voor de client side van de server

type dit in script.js:

// Location where the server is hosted.
const socket = io("http://localhost:3000")

socket.on("chat-message", data => {
    console.log(data) // This is going to be the message Test test I wrote.
})

maak index.html en type dit in de head:

  <!-- where the socket.io is working -->
  <script defer src="http://localhost:3000/socket.io/socket.io.js"></script>
  <script defer src="script.js"></script>

of gebruik dit: https://socket.io/get-started/chat
