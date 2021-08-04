import React from "react";
import RecentSplit from "./RecentSplit";
import SplitBillReq from "./SplitBillReq";
import SplitWith from "./SplitWith";
import NearByFriends from "./NearByFriends";
import PendingBills from "./PendingBills";

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 ">
      <div className="order-1 p-2">
        <SplitWith />
      </div>
      <div className="p-2 order-4 w-full">
        <RecentSplit />
      </div>
      <div className="order-2 p-2">
        <NearByFriends />
      </div>
      <div className="bg-blue-400 order-5">4</div>
      <div className="order-3 w-full h-full p-2">
        <SplitBillReq />
      </div>
      <div className="order-6 p-2">
        <PendingBills />
      </div>
    </div>
  );
};

export default DashboardGrid;
