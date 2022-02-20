import React from "react";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule-header">Join us in prayer at these times</div>
      <div className="times">
        <div>
          <h1>Tuesday:</h1>
          <h2>8PM</h2>
        </div>
        <div>
          <h1>Wednesday:</h1>
          <h2>7PM</h2>
        </div>
        <div>
          <h1>Thursday:</h1>
          <h2>8PM</h2>
        </div>
      </div>
      <div>Join us by clicking this button.</div>
      <a
        className="button"
        href="https://us05web.zoom.us/j/88576346316?pwd=YnY0OWdUOGZBMGVZeFBlVDl5NGtqZz09"
        target="_blank"
      >
        Join Us
      </a>
    </div>
  );
};

export default Schedule;
