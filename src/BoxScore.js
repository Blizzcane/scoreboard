import React from "react";

const BoxScore = ({ players }) => {
  const durationRegex = /PT(\d+)M/;

  return (
    <div className="d-flex flex-column">
      {players.length > 0 &&
        players.map(({ jerseyNum, name, statistics }) => (
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-row ">
              <span className="">{jerseyNum}</span>
              <span>{name}</span>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-center">
              <span className="mx-2">
                {statistics.minutesCalculated.match(durationRegex)[1]}
              </span>
              <span className="mx-2">{statistics.points}</span>
              <span className="mx-2">{statistics.reboundsTotal}</span>
              <span className="mx-2">{statistics.assists}</span>
            </div>
          </div>
        ))}
          
    </div>
  );
};

export default BoxScore;
