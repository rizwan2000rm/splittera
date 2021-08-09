import React from "react";

const SplitWith = () => {
  return (
    <div className="max-w-sm p-2 rounded-lg bg-gradient-to-br from-red-300 mx-auto via-red-400 to-red-600">
      <div className="bg-white rounded-lg p-2 flex flex-col">
        <img
          src="/images/pizza.png"
          alt="vendor"
          className="h-56 filter drop-shadow-xl mx-auto"
        />

        <div className="flex justify-around items-center mt-5">
          <div className="vendor-brand flex items-center">
            <img
              src="/images/pizza.png"
              alt=""
              className="vendor-logo h-5 mr-2"
            />
            <span className="vendor-name">Pizza Inn</span>
          </div>
          <div className="total-bill">
            <div className="text-gray-500">Total Bill</div>
            <div className="font-bold text-xl text-gray-700">$360.80</div>
          </div>
        </div>
        <div className="split-with p-3">
          <span className="font-bold text-gray-600 text-xl">Split with</span>
          <div className="flex justify-between items-center mt-5">
            <div className="avatar-list flex">
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
              <img
                className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
                src="https://i.pravatar.cc/300?img=4"
                alt=""
              />
            </div>
            <button className="px-6 py-3 w-32 rounded-lg bg-blue-400 text-white text-sm hover:opacity-80">
              Split Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitWith;
