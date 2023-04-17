import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import LiveBadge from "./LiveBadge";
import Score from "./Score";

const ScoreDisplay = ({
  homeTeamScore,
  awayTeamScore,
  gameStatusText,
  isLive,
}) => {
  const [userGameStatusText, setUserGameStatusText] = useState(gameStatusText);

  useEffect(() => {
    if (gameStatusText !== "Final" && !gameStatusText.includes("Half")) {
      const timezoneOffset = new Date().getTimezoneOffset();

      // Parse the input date string using moment.js and set the timezone to "America/New_York" for ET
      const inputDate = moment.tz(`${gameStatusText} ET`, "h:mm A z", "America/New_York");

      // Convert the input date to the user's timezone using moment.js
      const userDate = inputDate.clone().utcOffset(-timezoneOffset);

      // Format the user date as a string using moment.js
      const userTimeString = userDate.format("h:mm A");

      // Set the user's game status text to the formatted string
      setUserGameStatusText(userTimeString);
    } else {
      setUserGameStatusText(gameStatusText);
    }
  }, [gameStatusText]);

  const gameOver = userGameStatusText === "Final";

  return (
    <div className="col-4 d-flex justify-content-evenly flex-column">
      <LiveBadge isLive={isLive} />
      <Score homeTeamScore={homeTeamScore} awayTeamScore={awayTeamScore} gameOver={gameOver} />
      <span
        className={`${userGameStatusText === "Final" ? "text-danger" : ""}`}
      >
        {userGameStatusText}
      </span>
    </div>
  );
};

export default ScoreDisplay;
