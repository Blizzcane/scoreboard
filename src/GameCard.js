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
    const homeTeamName = `${homeTeam.teamCity} ${homeTeam.teamName}`;
    const awayTeamName = `${awayTeam.teamCity} ${awayTeam.teamName}`;
    const homeTeamScore = homeTeam.score;
    const awayTeamScore = awayTeam.score;
    return (
      <div  className="game">
        <div className="team">
          <span className="team-logo">
            <img
              src={homeTeamLogo}
              alt={`${homeTeam.teamCity} ${homeTeam.teamName} logo`}
            />
          </span>
          <span className="team-name">{homeTeamName}</span>
        </div>
        <div className="scores">
          <span className="team-score">{homeTeamScore}</span>-
          <span className="team-score">{awayTeamScore}</span>
        </div>
        <div className="team">
          <span className="team-logo">
            <img
              src={awayTeamLogo}
              alt={`${awayTeam.teamCity} ${awayTeam.teamName} logo`}
            />
          </span>
          <span className="team-name">{awayTeamName}</span>   
        </div>
      </div>
    );
  };

  return (
    <div key={game.gameId}>
      <h2>{scoreboard(game)}</h2>
    </div>
  );
};

export default GameCard;
