import React from "react";

const BoxScore = ({ players }) => {
  const durationRegex = /PT(\d+)M/;

  const formatMinutes = (minutes) => {
    const parsedMinutes = parseInt(minutes);
    return parsedMinutes === 0 ? '0' : parsedMinutes.toString();
  };

  return (
    <div className="table-responsive">
      <table className="table table-sm ">
        <thead className="thead-light">
          <tr>
            <th colSpan="2" style={{ textAlign: "left" }}>
              Player
            </th>
            <th>Pts</th>
            <th>Reb</th>
            <th>Ast</th>
            <th>Min</th>
          </tr>
        </thead>
        <tbody>
          {players.length > 0 &&
            players.map(({ jerseyNum, name, statistics }) => (
              <tr key={jerseyNum}>
                <td>{jerseyNum}</td>
                <td style={{ textAlign: "left" }}>{name}</td>
                <td>{statistics.points}</td>
                <td>{statistics.reboundsTotal}</td>
                <td>{statistics.assists}</td>
                <td>{formatMinutes(statistics.minutesCalculated.match(durationRegex)[1])}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoxScore;
