import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef("");
  const SendMessage = () => {
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    console.log(message);
    //@ts-ignore
    socket.send(message);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (event) => {
      alert(event.data);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message... " />
      <button onClick={SendMessage}>Send</button>
    </div>
  );
}

export default App;
