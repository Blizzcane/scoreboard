import React from "react";

const BoxScore = ({ players }) => {
  const durationRegex = /PT(\d+)M/;

  return (
    <div className="d-flex flex-column">
      {players.length > 0 &&
        players.map((player) => (
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row ">
              <span className="">{player.jerseyNum}</span>
              <span>{player.name}</span>
            </div>
            <div className=" ">
              <span className="mx-2">
                {player.statistics.minutesCalculated.match(durationRegex)[1]}
              </span>
              <span className="mx-2">{player.statistics.points}</span>

              <span className="mx-2">{player.statistics.reboundsTotal}</span>

              <span className="mx-2">{player.statistics.assists}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BoxScore;
