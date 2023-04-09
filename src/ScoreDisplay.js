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
    <div className="col-4 d-flex justify-content-center flex-column">
      <Score homeTeamScore={homeTeamScore} awayTeamScore={awayTeamScore} />
      <LiveBadge isLive={isLive} />
      <span className="">{`${gameStatusText}`}</span>
    </div>
  );
};

export default ScoreDisplay;
