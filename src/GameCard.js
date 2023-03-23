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
      <div className="card row d-flex flex-row text-center">
        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <img
            style={{ maxWidth: '70%' }} 
            className=" "
            src={homeTeamLogo}
            alt={`${homeTeam.teamCity} ${homeTeam.teamName} logo`}
          />
          <span className="team-name">{homeTeamName}</span>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <span className="team-score">{homeTeamScore}</span>-
          <span className="team-score">{awayTeamScore}</span>
        </div>
        <div className="col-4 d-flex flex-column  justify-content-center align-items-center">
          <img
            style={{ maxWidth: '70%' }} 
            src={awayTeamLogo}
            alt={`${awayTeam.teamCity} ${awayTeam.teamName} logo`}
          />
          <span className="team-name">{awayTeamName}</span>
        </div>
      </div>
    );
  };

  return scoreboard(game);
};

export default GameCard;
