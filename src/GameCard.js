import React from "react";
import ScoreboardHeader from "./ScoreBoardHeaders";
import ScoreDisplay from "./ScoreDisplay";
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
        <ScoreboardHeader team={homeTeam} logo={homeTeamLogo} />

        <ScoreDisplay
          homeTeamScore={homeTeam.score}
          awayTeamScore={awayTeam.score}
          gameStatusText={gameStatusText}
        />
        <ScoreboardHeader team={awayTeam} logo={awayTeamLogo} />
      </div>
    );
  };

  return scoreboard(game);
};

export default GameCard;
