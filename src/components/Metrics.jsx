import React from "react";
import Navbar from "./Navbar";
import DailyMetric from "./DailyMetric";
import MusicMetric from "./MusicMetric";
import TrandingTracks from "./TrandingTracks";

const Metrics = () => {
  return (
    <div className="metrics">
      <Navbar />
      <div className="grid__one">
        <DailyMetric />
        <MusicMetric />
      </div>
      <div className="grid__two">
        <TrandingTracks />
      </div>
    </div>
  );
};

export default Metrics;
