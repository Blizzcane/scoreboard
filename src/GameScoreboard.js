import React, { useEffect, useState } from "react";

function GameScoreboard({ gameData }) {
    const [games, setGames] = useState([]);
    useEffect(() => {
      if (gameData && gameData.games && gameData.games.length > 0) {
        setGames(gameData.games);
      }
    }, [gameData]);

    // Define the scoreboard function here
    function scoreboard({homeTeam,awayTeam}) {
      return `${homeTeam.teamName} ${homeTeam.score} - ${awayTeam.score} ${awayTeam.teamName}`;
    }
  
    return (
      <div>
        {games.map((game) => (
            <div key={game.gameId}> 
                <h2>{scoreboard(game)}</h2>
          </div>
        ))}
      </div>
    );
  }
  
  export default GameScoreboard;
  