import React from "react";
import "./LiveBadge.css"

const LiveBadge = ({ isLive }) => {
  return (
    <div className="d-inline-block">
      {!isLive && (
        <div className="d-inline-flex align-items-center">
          <span className="badge bg-success d-flex align-items-center">
            <span className="dot" />
            LIVE
          </span>
        </div>
      )}
    </div>
  );
};

export default LiveBadge;
