import React, { useEffect, useState } from "react";
import GameScoreboard from "./GameScoreboard";

function App() {
  const [gameData, setGameData] = useState({}); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch("http://127.0.0.1:5000", { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setGameData(data.scoreboard);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>My App</h1>
      <GameScoreboard gameData={gameData} />
    </div>
  );
}

export default App;
