import React from "react";
import RecentSplit from "./RecentSplit";
import SplitBillReq from "./SplitBillReq";
import SplitWith from "./SplitWith";

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 place-items-center">
      <div className="order-1 p-2">
        <SplitWith />
      </div>
      <div className="p-6 order-4 w-full">
        <RecentSplit />
      </div>
      <div className="bg-red-400 h-24 order-2">3</div>
      <div className="bg-blue-400 order-5">4</div>
      <div className="order-3 w-full h-full p-2">
        <SplitBillReq />
      </div>
      <div className="bg-blue-400 order-6">6</div>
    </div>
  );
};

export default DashboardGrid;
