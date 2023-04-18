import React, { useEffect, useState } from "react";
import ScoreboardHeader from "./ScoreBoardHeaders";
import ScoreDisplay from "./ScoreDisplay";
import GameDetails from "../layouts/GameDetails";
import { nbaTeams } from "../utils/teamInfo";  

const GameCard = ({ game,scoreBoardUrl }) => {
  const [accordionShown, setAccordionShown] = useState(false);
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState("homeTeam");

  useEffect(() => {
    if (accordionShown) {
      // fetch data here and update the players state
      fetch(`${scoreBoardUrl}/boxscore?gameId=${game.gameId}`)
        .then((response) => response.json())
        .then((data) => setPlayers(data.game[team].players));
    }
  }, [accordionShown, team]);

  const scoreboard = ({ homeTeam, awayTeam, gameStatusText, gameId }) => {
    const homeTeamLogo =
      nbaTeams[`${homeTeam.teamCity} ${homeTeam.teamName}`]?.logo ?? "";
    const awayTeamLogo =
      nbaTeams[`${awayTeam.teamCity} ${awayTeam.teamName}`]?.logo ?? "";

    const handleAccordionClick = () => {
      setAccordionShown(!accordionShown);
    };
    const toggleTeamStats = (team) => {
      setTeam(team);
    };
    const isLive = gameStatusText.includes("Q") || gameStatusText.includes("Half");

    return (
      <div className="accordion text-center m-1 shadow">
        <div className="accordion-item">
          <div
            className="card row d-flex flex-row accordion-header p-2 m-auto"
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
              isLive={isLive}
            />
            <ScoreboardHeader team={awayTeam} logo={awayTeamLogo} />
          </div>
          <GameDetails
            gameId={gameId}
            game={game}
            team={team}
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            players={players}
            toggleTeamStats={toggleTeamStats}
          />
        </div>
      </div>
    );
  };

  return scoreboard(game);
};

export default GameCard;
