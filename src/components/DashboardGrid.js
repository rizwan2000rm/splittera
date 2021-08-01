import React from "react";
import SplitBillReq from "./SplitBillReq";

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-2">
      <div className="bg-red-400 h-24 order-1">1</div>
      <div className="bg-blue-400 order-4">2</div>
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
