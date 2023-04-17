import React from "react";
import "./ScoreSummary.css";

const ScoreSummary = ({ game: { homeTeam, awayTeam } }) => { 
  const homeTeamName = `${homeTeam.teamCity} ${homeTeam.teamName}`;
  const awayTeamName = `${awayTeam.teamCity} ${awayTeam.teamName}`;
  const homeTeamScore = homeTeam.score;
  const awayTeamScore = awayTeam.score;
  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="d-flex flex-column align-items-start">
        <span className="text-muted">Team</span>
        <span className="smaller-text">{homeTeamName}</span>
        <span className="smaller-text">{awayTeamName}</span>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between">
          <div className="mx-1 d-flex flex-column">
            <span className="text-muted">1</span>
            <span className="smaller-text">{homeTeam.periods[0].score}</span>
            <span className="smaller-text">{awayTeam.periods[0].score}</span>
          </div>
          <div className="mx-1 d-flex flex-column">
            <span className="text-muted">2</span>
            <span className="smaller-text">{homeTeam.periods[1].score}</span>
            <span className="smaller-text">{awayTeam.periods[1].score}</span>
          </div>
          <div className="mx-1 d-flex flex-column">
            <span className="text-muted">3</span>
            <span className="smaller-text">{homeTeam.periods[2].score}</span>
            <span className="smaller-text">{awayTeam.periods[2].score}</span>
          </div>
          <div className="mx-1 d-flex flex-column">
            <span className="text-muted">4</span>
            <span className="smaller-text">{homeTeam.periods[3].score}</span>
            <span className="smaller-text">{awayTeam.periods[3].score}</span>
          </div>
          <div className="mx-1 d-flex flex-column">
            <span className="text-muted">T</span>
            <span className="smaller-text">{homeTeamScore}</span>
            <span className="smaller-text">{awayTeamScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
