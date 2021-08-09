import React from "react";
import Navbar from "../components/Navbar";
import DashboardGrid from "../components/DashboardGrid";
import TopBar from "../components/TopBar";
import { Switch, Route } from "react-router-dom";
import SplitRequests from "./SplitRequests";

const Prototype = () => {
  return (
    <div className="flex">
      <div className="hidden md:block md:w-24 lg:w-56">
        <Navbar />
      </div>
      <div className="flex flex-col w-full min-h-screen">
        <TopBar />
        <Switch>
          <Route path="/prototype/" exact component={DashboardGrid} />
          <Route path="/prototype/splitreqs" component={SplitRequests} />
        </Switch>
      </div>
    </div>
  );
};

export default Prototype;
