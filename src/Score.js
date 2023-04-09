import React from "react";

const Score = ({ homeTeamScore, awayTeamScore }) => {
  return (
    <div className="d-flex justify-content-between align-items-center flex-row">
      <span className="team-score">
        <h2>{homeTeamScore} </h2>
      </span>
      <h2>-</h2>
      <span className="team-score">
        <h2>{awayTeamScore}</h2>
      </span>
    </div>
  );
};

export default Score;
