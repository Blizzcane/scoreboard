import React from "react";

const ScoreSummary = ({ game }) => {
  const { homeTeam, awayTeam } = game;
  const homeTeamName = `${homeTeam.teamCity} ${homeTeam.teamName}`;
  const awayTeamName = `${awayTeam.teamCity} ${awayTeam.teamName}`;
  const homeTeamScore = homeTeam.score;
  const awayTeamScore = awayTeam.score;
  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="d-flex flex-column align-items-start">
        <span>Team</span>
        <span>{homeTeamName}</span>
        <span>{awayTeamName}</span>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between">
          <div className="mx-1 d-flex flex-column">
            <span>1</span>
            <span>{homeTeam.periods[0].score}</span>
            <span>{awayTeam.periods[0].score}</span>
          </div>
          <div className="mx-1 d-flex flex-column">
            <span>2</span>
            <span>{homeTeam.periods[1].score}</span>
            <span>{awayTeam.periods[1].score}</span>
          </div>
          <div className="mx-1 d-flex flex-column">
            <span>3</span>
            <span>{homeTeam.periods[2].score}</span>
            <span>{awayTeam.periods[2].score}</span>
          </div>
          <div className="mx-1 d-flex flex-column">
            <span>4</span>
            <span>{homeTeam.periods[3].score}</span>
            <span>{awayTeam.periods[3].score}</span>
          </div>
          <div className="mx-1 d-flex flex-column">
            <span>T</span>
            <span>{homeTeamScore}</span>
            <span>{awayTeamScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
