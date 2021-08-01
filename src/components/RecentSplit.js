import React from "react";

const RecentSplit = () => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="text-xl font-medium text-gray-700">Recent Split</div>
      <div className="border rounded-xl border-gray-300 p-6 mt-5">
        <div className="flex justify-between">
          <div className="flex vendor items-center">
            <img src="/images/pizza.png" alt="" className="h-6 w-6 mr-3" />
            <span className="font-medium text-gray-600">Salik's Pizzeria</span>
          </div>

          <div className="options fill-current text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <circle cx="128" cy="128" r="12"></circle>
              <circle cx="128" cy="64" r="12"></circle>
              <circle cx="128" cy="192" r="12"></circle>
            </svg>{" "}
          </div>
        </div>
        <div className="flex-col items-center md:flex-row flex mt-5 justify-between">
          <img src="/images/pizza.png" alt="" className="h-32 w-32" />
          <div className="avatar-grid mt-5 md:mt-0 grid grid-cols-3 gap-3 md:gap-1 place-items-center">
            <img
              className="h-12 w-12 rounded-full shadow"
              src="https://i.pravatar.cc/300?img=1"
              alt=""
            />
            <img
              className="h-12 w-12 rounded-full shadow"
              src="https://i.pravatar.cc/300?img=2"
              alt=""
            />
            <img
              className="h-12 w-12 rounded-full shadow"
              src="https://i.pravatar.cc/300?img=3"
              alt=""
            />
            <img
              className="h-12 w-12 rounded-full shadow"
              src="https://i.pravatar.cc/300?img=4"
              alt=""
            />
            <img
              className="h-12 w-12 rounded-full shadow"
              src="https://i.pravatar.cc/300?img=5"
              alt=""
            />
            <img
              className="h-12 w-12 rounded-full shadow"
              src="https://i.pravatar.cc/300?img=8"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSplit;
