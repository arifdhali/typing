const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
});
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
}))
app.get("/", (req, res) => {
    res.send("Hello");
})
io.on("connection", (socket) => {
    console.log(`New user found ${socket.id}`);
    socket.on("hello", (d) => {
    })
})

server.listen(3000, (error) => {
    console.log(`Server listening on http://localhost:3000`);
})