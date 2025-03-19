import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return <h1>{message}</h1>;
}

export default App;

