import React from "react";
import Navbar from "../components/Navbar";
import DashboardGrid from "../components/DashboardGrid";
import TopBar from "../components/TopBar";
import { Switch, Route } from "react-router-dom";
import SplitRequests from "./SplitRequests";
import History from "./History";

const Prototype = () => {
  return (
    <div className="flex w-screen h-screen pb-16 md:pb-0">
      <div className="w-full h-16 fixed z-10 bottom-0 left-0 bg-white md:static md:h-auto md:w-24 lg:w-56">
        <Navbar />
      </div>
      <div className="flex flex-col w-full max-h-screen overflow-hidden">
        <TopBar />
        <Switch>
          <Route path="/prototype/" exact component={DashboardGrid} />
          <Route path="/prototype/splitreqs" component={SplitRequests} />
          <Route path="/prototype/history" component={History} />
        </Switch>
      </div>
    </div>
  );
};

export default Prototype;
