import React from "react";
import RecentSplit from "./RecentSplit";
import SplitBillReq from "./SplitBillReq";
import SplitWith from "./SplitWith";
import NearByFriends from "./NearByFriends";
import PendingBills from "./PendingBills";
import { Participate } from "./Participate";

const DashboardGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-5 overflow-scroll">
      <div className="order-1 p-2">
        <SplitWith />
      </div>
      <div className="p-2 order-4 w-full">
        <RecentSplit />
      </div>
      <div className="order-5 p-2">
        <NearByFriends />
      </div>
      <div className="p-2 order-2">
        <Participate />
      </div>
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
