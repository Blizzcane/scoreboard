import React, { useEffect, useState } from "react";
import "./GameScoreboard.css";

function GameScoreboard({ gameData }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (gameData && gameData.games && gameData.games.length > 0) {
      setGames(gameData.games);
    }
  }, [gameData]);

  const scoreboard = ({ homeTeam, awayTeam }) => {
    const teamNames = `${homeTeam.teamCity} ${homeTeam.teamName} vs ${awayTeam.teamCity} ${awayTeam.teamName}`;
    const homeTeamScore = homeTeam.score;
    const awayTeamScore = awayTeam.score;

    return (
      <div>
        <div className="team">
          <span className="team-name">{teamNames}</span>
        </div>
        <div className="team">
          <span className="team-score">{homeTeamScore}</span>
          <span className="team-score">{awayTeamScore}</span>
        </div>
      </div>
    );
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
