import React, { useEffect, useState } from "react";
import ScoreboardHeader from "./ScoreBoardHeaders";
import ScoreDisplay from "./ScoreDisplay";
import { nbaTeams } from "./utils/teamInfo";

const TestingGameCard = ({ game }) => {
  const [accordionShown, setAccordionShown] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (accordionShown) {
      // fetch data here and update the players state
      fetch(`http://127.0.0.1:5000/boxscore?gameId=${game.gameId}`)
        .then((response) => response.json())
        .then((data) => setPlayers(data.game.homeTeam.players));
    }
  }, [accordionShown]);
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
    const durationRegex = /PT(\d+)M/;

    const handleAccordionClick = () => {
      setAccordionShown(!accordionShown);
    };

    return (
      <div className="accordion text-center m-1 shadow">
        <div className="accordion-item">
          <div
            className="card row d-flex flex-row accordion-header   "
            id={`heading${gameId}`}
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${gameId}`}
            aria-expanded="true"
            aria-controls={`collapse${gameId}`}
            onClick={handleAccordionClick}
          >
            <ScoreboardHeader team={homeTeam} logo={homeTeamLogo} />

            <ScoreDisplay
              homeTeamScore={homeTeam.score}
              awayTeamScore={awayTeam.score}
              gameStatusText={gameStatusText}
            />
            <ScoreboardHeader team={awayTeam} logo={awayTeamLogo} />
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
                      <span>{homeTeamScore}</span>
                      <span>{awayTeamScore}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                {players.length > 0 &&
                  players.map((player) => (
                    <div className="d-flex flex-row justify-content-between">
                      <div className="">
                        <span>{player.jerseyNum}</span>
                        <span>{player.name}</span>
                      </div>
                      <div className=" ">
                        <span>
                          {
                            player.statistics.minutesCalculated.match(
                              durationRegex
                            )[1]
                          }
                        </span>
                        <span>{player.statistics.points}</span>

                        <span>{player.statistics.reboundsTotal}</span>

                        <span>{player.statistics.assists}</span>
                      </div>
                    </div>
                  ))}
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
