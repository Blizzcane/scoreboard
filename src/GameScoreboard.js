import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
// import "./GameScoreboard.css";

function GameScoreboard({ gameData }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (gameData && gameData.games && gameData.games.length > 0) {
      setGames(gameData.games);
    }
  }, [gameData]);

  const formatDate = (dateString) => {};

  return (
    <div className="d-flex flex-column">
      {games.map((game) => (
        <GameCard  key={game.gameId} game={game} />
      ))}
    </div>
  );
}

export default GameScoreboard;
