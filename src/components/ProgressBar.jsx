import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${progress}%` }}>
        {progress.toFixed(0)}%
      </div>
    </div>
  );
}

export default ProgressBar;
