import React from "react";
import { nbaTeams } from "./utils/teamInfo";

const GameCard = ({ game }) => { 
  
  
  const scoreboard = ({ homeTeam, awayTeam, gameStatusText, gameClock }) => {
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
      <div className="card row d-flex flex-row text-center m-1 p-2 shadow">
        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <img
            style={{ maxWidth: "70%" }}
            className=" "
            src={homeTeamLogo}
            alt={`${homeTeam.teamCity} ${homeTeam.teamName} logo`}
          />
          <span className="team-name display-7">{homeTeamName}</span>
          <span className="win-loss">{`(${homeTeam.wins}-${homeTeam.losses})`}</span>
        </div>
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
        <div className="col-4 d-flex flex-column  justify-content-center align-items-center">
          <img
            style={{ maxWidth: "70%" }}
            src={awayTeamLogo}
            alt={`${awayTeam.teamCity} ${awayTeam.teamName} logo`}
          />
          <span className="team-name display-7">{awayTeamName}</span>
          <span className="win-loss ">{`(${awayTeam.wins}-${awayTeam.losses})`}</span>
        </div>
      </div>
    );
  };

  return scoreboard(game);
};

export default GameCard;
