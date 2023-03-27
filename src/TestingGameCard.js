import React from "react";
import { nbaTeams } from "./utils/teamInfo";

const TestingGameCard = ({ game }) => {
  const scoreboard = ({ homeTeam, awayTeam, gameStatusText, gameId }) => {
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
      <div className="accordion text-center m-1">
        <div className="accordion-item">
          <div
            className="card row d-flex flex-row accordion-header   "
            id={`heading${gameId}`}
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${gameId}`}
            aria-expanded="true"
            aria-controls={`collapse${gameId}`}
          >
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
          <div
            id={`collapse${gameId}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${gameId}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-column">
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
                      <span>{homeTeam.score}</span>
                      <span>{awayTeam.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return scoreboard(game);
};

export default TestingGameCard;
