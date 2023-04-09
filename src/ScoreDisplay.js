import React from "react";
import LiveBadge from "./LiveBadge";
import Score from "./Score";
import { nbaTeams } from "./utils/teamInfo";

const ScoreDisplay = ({
  homeTeamScore,
  awayTeamScore,
  gameStatusText,
  isLive,
}) => {
  return (
    <div className="col-4 d-flex justify-content-evenly flex-column">
      <LiveBadge isLive={isLive} />
      <Score homeTeamScore={homeTeamScore} awayTeamScore={awayTeamScore} />
      <span className="">{`${gameStatusText}`}</span>
    </div>
  );
};

export default ScoreDisplay;
