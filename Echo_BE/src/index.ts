import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on("connection", (socket) => {
    socket.on("message", (e) => {
      if (e.toString() === "ping" || e.toString() === "Ping")
      {
          console.log(e.toString());
          socket.send("Pong");
      }
  });
});
