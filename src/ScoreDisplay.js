import React from "react";
import { nbaTeams } from "./utils/teamInfo";

const ScoreDisplay = ({ homeTeamScore, awayTeamScore, gameStatusText }) => {
    return (
      <div className="col-4 d-flex justify-content-center  flex-column">
        <div className="d-flex justify-content-between align-items-center flex-row">
          <span className="team-score">
            <h2>{homeTeamScore} </h2>
          </span>
          <h2>-</h2>
          <span className="team-score">
            <h2>{awayTeamScore}</h2>
          </span>
        </div>
        <span className="">{`${gameStatusText}`}</span>
      </div>
    );
};
  
export default ScoreDisplay;
