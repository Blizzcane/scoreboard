import React from "react";

const Score = ({ homeTeamScore, awayTeamScore, gameOver }) => {
  const winnerIsHome = parseInt(homeTeamScore) > parseInt(awayTeamScore);
  const winnerIsAway = parseInt(homeTeamScore) < parseInt(awayTeamScore);

  return (
    <div className="d-flex justify-content-between align-items-center flex-row">
      <span className="team-score ">
        <h2
          className={`${
            gameOver && winnerIsHome ? "text-success " : "fw-lighter"
          }`}
        >
          {homeTeamScore}
        </h2>
      </span>
      <h2>-</h2>
      <span className="team-score">
        <h2
          className={`${
            gameOver && winnerIsAway ? "text-success " : "fw-lighter"
          }`}
        >
          {awayTeamScore}
        </h2>
      </span>
    </div>
  );
};

export default Score;
