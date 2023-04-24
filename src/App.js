import React, { useEffect, useState } from "react";
import GameScoreboard from "./layouts/GameScoreboard";
import "./App.css";


function App() {
  const [gameData, setGameData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const scoreBoardUrl = process.env.REACT_APP_SCOREBOARD_URL;

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("./serviceWorker.js")
          .then((reg) => {
            console.log("Worker Registered");
          })
          .catch((err) => {
            console.log("Error in service worker", err);
          });
      });
    }
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = () => {
      fetch(scoreBoardUrl + "/games", { signal })
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
    };

    fetchData(); // initial fetch

    const intervalId = setInterval(fetchData, 60000); // fetch every minute

    return () => {
      clearInterval(intervalId);
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
    : (<div><p>"Dribbling..."</p> <spline-viewer url="https://prod.spline.design/eHUK6JmPy79D67Rc/scene.splinecode"></spline-viewer></div>);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="date date-title my-2">{formattedDate}</h2>
      <GameScoreboard gameData={gameData} scoreBoardUrl={scoreBoardUrl} />
    </div>
  );
}

export default App;
