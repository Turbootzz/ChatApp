# ChatApp
 This is my first experience with NodeJS and Socket.io

# Features

  - Chat anonymously to everyone thats connected to the page.
  - See when someone joins the page.
  - Goes into dark mode or light mode depending on the OS settings.

# Explanation method 1

download notejs

open folder in vsc
type in terminal
npm init
npm i socket.io
(optional) npm i --save-dev nodemon

create file server.js

type in server.js :

    // Import socket.io and runs the server on the port 3000
      const io = require ("socket.io")(3000)

    // Gives everyone that connects their own socket
    io.on("connection", socket => {
        console.log("new User")
        //socket.emit("emit-message", "Test test") // Everytime someone joins gets this message
    })


Create script.js for the client side of the server

type this in script.js:

    // Location where the server is hosted.
    const socket = io("http://localhost:3000")

    socket.on("chat-message", data => {
      console.log(data) // This is going to be the message Test test I wrote.
    })

create index.html and type this in the head:

  <!-- where the socket.io is working -->
    <script defer src="http://localhost:3000/socket.io/socket.io.js"></script>
    <script defer src="script.js"></script>

 To add dark and light mode:

  <!-- To transform light mode to dark mode -->
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/styleafter.css">
    <script src="https://unpkg.com/css-prefers-color-scheme/browser.min"></script>

or use this: https://socket.io/get-started/chat
and this: https://npm.io/package/css-prefers-color-scheme