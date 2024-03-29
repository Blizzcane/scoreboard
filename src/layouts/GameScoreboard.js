import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
// import "./GameScoreboard.css";

function GameScoreboard({ gameData, scoreBoardUrl  }) {
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
        <GameCard key={game.gameId} game={game} scoreBoardUrl={scoreBoardUrl}   />
      ))}
    </div>
  );
}

export default GameScoreboard;
