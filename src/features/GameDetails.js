import React from "react";
import ScoreSummary from "./ScoreSummary";
import TeamTabs from "../components/TeamTabs";
import BoxScore from "./BoxScore";

const GameDetails = ({ gameId, game, team, homeTeam, awayTeam, players, toggleTeamStats }) => {
  return (
    <div
      id={`collapse${gameId}`}
      className="accordion-collapse collapse"
      aria-labelledby={`heading${gameId}`}
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body d-flex flex-column">
        <ScoreSummary game={game} />
        <TeamTabs
          team={team}
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          toggleTeamStats={toggleTeamStats}
        />
        <BoxScore players={players} />
      </div>
    </div>
  );
};

export default GameDetails;
