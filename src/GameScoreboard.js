import React, { useEffect, useState } from "react";
import "./GameScoreboard.css";

function GameScoreboard({ gameData }) {
  const [games, setGames] = useState([]);
  useEffect(() => {
    if (gameData && gameData.games && gameData.games.length > 0) {
      setGames(gameData.games);
    }
  }, [gameData]);

  // Define the scoreboard function here
  const scoreboard = ({ homeTeam, awayTeam }) => {
    return `${homeTeam.teamCity} ${homeTeam.teamName} ${homeTeam.score} - ${awayTeam.score} ${awayTeam.teamCity} ${awayTeam.teamName}`;
  };
  const formatDate = (dateString) => {};
  return (
    <div className="scoreboard"> 
      {games.map((game) => (
        <div key={game.gameId} className="game">
          <h2>{scoreboard(game)}</h2>
        </div>
      ))}
    </div>
  );
}

export default GameScoreboard;
