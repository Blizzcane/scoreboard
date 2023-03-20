import React, { useEffect, useState } from "react";
import GameScoreboard from "./GameScoreboard";
import "./App.css";

function App() {
  const [gameData, setGameData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const scoreBoardUrl = process.env.REACT_APP_SCOREBOARD_URL;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(scoreBoardUrl+"/games", { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setGameData(data.scoreboard);
        setIsLoading(false);
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

  const date = gameData.gameDate ? new Date(gameData.gameDate) : null;

  const formattedDate = date
    ? date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "Dribbling...";

  return (
    <div className="app">
      <h1 className="date">{formattedDate}</h1>
      <GameScoreboard gameData={gameData} />
    </div>
  );
}

export default App;
