const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

let onlineUsers = {};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  onlineUsers[socket.id] = "Anonymous";

  socket.broadcast.emit("chat message", `${onlineUsers[socket.id]} joined the chat`);

  io.emit("online-users", Object.values(onlineUsers));

  socket.on("set nickname", (name) => {
    onlineUsers[socket.id] = name;

    io.emit("online-users", Object.values(onlineUsers));
  });

  socket.on("chat message", (msg) => {
    socket.emit("self message", msg);

    socket.broadcast.emit("chat message", `${onlineUsers[socket.id]}: ${msg}`);
  });

  socket.on("typing", () => {
    socket.broadcast.emit("typing", `${onlineUsers[socket.id]} is typing...`);
  });

  socket.on("disconnect", () => {
    io.emit("chat message", `${onlineUsers[socket.id]} left the chat`);
    delete onlineUsers[socket.id];

    io.emit("online-users", Object.values(onlineUsers));
    console.log("A user disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Chat server running at http://localhost:3000");
});
