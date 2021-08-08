import React from "react";
import Navbar from "../components/Navbar";
import DashboardGrid from "../components/DashboardGrid";
import TopBar from "../components/TopBar";

const Prototype = () => {
  return (
    <div className="flex">
      <div className="hidden md:block md:w-24 lg:w-56">
        <Navbar />
      </div>
      <div className="flex flex-col w-full ">
        <TopBar />
        <DashboardGrid />
      </div>
    </div>
  );
};

export default Prototype;
