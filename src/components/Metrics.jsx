import React from "react";
import Navbar from "./Navbar";
import DailyMetric from "./DailyMetric";
import MusicMetric from "./MusicMetric";
import TrendingTracks from "./TrendingTracks";
import TrendingUsers from "./TrendingUsers";
import UsersActivity from "./UsersActivity";

const Metrics = () => {
  return (
    <div className="metrics">
      <Navbar />
      <div className="grid__one">
        <DailyMetric />
        <MusicMetric />
      </div>
      <div className="grid__two">
        <TrendingTracks />
        <TrendingUsers />
        <UsersActivity /> 
      </div>
    </div>
  );
};

export default Metrics;
