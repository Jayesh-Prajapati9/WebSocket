import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection", (socket) => {
    console.log("New client connected");
    socket.send("Helloo");
    setInterval(() => {
        socket.send("Message is send every 800 ms to user");
    }, 800);

    // This is when the user send the message to the server
    socket.on("message", (e) => {
        console.log(e.toString());
    })


});