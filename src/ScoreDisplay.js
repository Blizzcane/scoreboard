import React from "react";
import LiveBadge from "./LiveBadge";
import Score from "./Score"; 

const ScoreDisplay = ({
  homeTeamScore,
  awayTeamScore,
  gameStatusText,
  isLive,
}) => {
  const gameOver = gameStatusText === "Final";
  return (
    <div className="col-4 d-flex justify-content-evenly flex-column">
      <LiveBadge isLive={isLive} />
      <Score homeTeamScore={homeTeamScore} awayTeamScore={awayTeamScore} gameOver={gameOver} />
      <span
        className={`${
          gameStatusText === "Final" ? "text-danger" : ""
        }`}
      >
        {gameStatusText}
      </span>
    </div>
  );
};

export default ScoreDisplay;
