import React from "react";
import "./ScoreBoardHeaders.css";
const ScoreboardHeader = ({ team, logo }) => {
  return (
    <div className="col-4 d-flex flex-column justify-content-center align-items-center">
      <img
        style={{ maxWidth: "70%" }}
        className="logo"
        src={logo}
        alt={`${team.teamCity} ${team.teamName} logo`}
      />
      <span className="team-name display-7 team-name">{`${team.teamCity} ${team.teamName}`}</span>
      <span className="win-loss">{`(${team.wins}-${team.losses})`}</span>
    </div>
  );
};
export default ScoreboardHeader;
