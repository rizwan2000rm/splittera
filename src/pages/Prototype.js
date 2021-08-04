import React from "react";
import Navbar from "../components/Navbar";
import DashboardGrid from "../components/DashboardGrid";
import TopBar from "../components/TopBar";

const Prototype = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col">
        <TopBar />
        <DashboardGrid />
      </div>
    </div>
  );
};

export default Prototype;
