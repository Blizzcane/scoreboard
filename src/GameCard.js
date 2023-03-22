import React from "react";
import { nbaTeams } from "./utils/teamInfo";

const GameCard = ({ game }) => {
  const scoreboard = ({ homeTeam, awayTeam }) => {
    // try {
    //   const homeTeamLogo =
    //     nbaTeams[`${homeTeam.teamCity} ${homeTeam.teamName}`].logo;
    //   const awayTeamLogo =
    //     nbaTeams[`${awayTeam.teamCity} ${awayTeam.teamName}`].logo;
    // } catch (error) {
    //   console.log(
    //     `${homeTeam.teamCity} ${homeTeam.teamName}`,
    //     `${awayTeam.teamCity} ${awayTeam.teamName}`
    //   );
    // }
    const homeTeamLogo =
      nbaTeams[`${homeTeam.teamCity} ${homeTeam.teamName}`].logo;
    const awayTeamLogo =
      nbaTeams[`${awayTeam.teamCity} ${awayTeam.teamName}`].logo;
    const teamNames = `${homeTeam.teamCity} ${homeTeam.teamName} vs ${awayTeam.teamCity} ${awayTeam.teamName}`;
    const homeTeamScore = homeTeam.score;
    const awayTeamScore = awayTeam.score;
    return (
      <div>
        <div className="team">
          <span className="team-logo">
            <img
              src={homeTeamLogo}
              alt={`${homeTeam.teamCity} ${homeTeam.teamName} logo`}
            />
          </span>
          <span className="team-name">{teamNames}</span>
          <span className="team-logo">
            <img
              src={awayTeamLogo}
              alt={`${awayTeam.teamCity} ${awayTeam.teamName} logo`}
            />
          </span>
        </div>
        <div className="team">
          <span className="team-score">{homeTeamScore}</span>
          <span className="team-score">{awayTeamScore}</span>
        </div>
      </div>
    );
  };

  return (
    <div key={game.gameId } className="game">
      <h2>{scoreboard(game)}</h2>
    </div>
  );
};

export default GameCard;
