import React from "react";

const TeamTabs = ({ team, homeTeam, awayTeam, toggleTeamStats }) => {
  return (
    <div className="col-md-12">
      <ul className="nav nav-tabs w-100 ">
        <li className="nav-item w-50 " role="tablist">
          <a
            className={`nav-link ${
              team === "homeTeam" ? "active" : ""
            } `}
            onClick={() => toggleTeamStats("homeTeam")}
          >
            {`${homeTeam.teamCity} ${homeTeam.teamName}`}
          </a>
        </li>
        <li className="nav-item w-50">
          <a
            className={`nav-link ${
              team === "awayTeam" ? "active" : ""
            }`}
            onClick={() => toggleTeamStats("awayTeam")}
          >
            {`${awayTeam.teamCity} ${awayTeam.teamName}`}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamTabs;
