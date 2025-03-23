import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://backend.default.svc.cluster.local:8080/api/health")  // Use service name inside the cluster
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage("Error connecting to backend!"));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;

