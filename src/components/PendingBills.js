import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

const PendingBills = () => {
  return (
    <div className="max-w-sm  px-2  mx-auto">
      <h1 className="text-xl font-medium text-gray-700">Pending Bills</h1>

      <div className="border p-4 mt-5 rounded-lg flex flex-col">
        <div className="flex justify-between items-center pb-4">
          <div>
            <h1 className="font-bold">Grill Cafe</h1>
            <p>Total payment $380.60</p>

            <div className="flex mt-2">
              <img
                className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
                src="https://i.pravatar.cc/300?img=1"
                alt=""
              />
              <img
                className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
                src="https://i.pravatar.cc/300?img=2"
                alt=""
              />
              <img
                className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
                src="https://i.pravatar.cc/300?img=3"
                alt=""
              />
            </div>
          </div>
          <div>
            <CircularProgressbar
              className="w-14 h-14 font-bold"
              value={percentage}
              text={`${percentage}%`}
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <div>
            <h1 className="font-bold">Pizzeria</h1>
            <p>Total payment $4440.00</p>

            <div className="flex">
              <img
                className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
                src="https://i.pravatar.cc/300?img=4"
                alt=""
              />
              <img
                className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
                src="https://i.pravatar.cc/300?img=5"
                alt=""
              />
              <img
                className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
                src="https://i.pravatar.cc/300?img=6"
                alt=""
              />
            </div>
          </div>
          <div>
            <CircularProgressbar
              className="w-14 h-14 font-bold"
              value={percentage}
              text={`${percentage}%`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingBills;
