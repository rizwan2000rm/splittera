import React from "react";

const SplitWith = () => {
  return (
    <div className="w-96 p-3 rounded-3xl bg-gradient-to-br from-red-300 via-red-400 to-red-600">
      <div className="bg-white rounded-3xl p-3 flex flex-col">
        <img
          src="/images/pizza.png"
          alt="vendor"
          className="h-56 filter drop-shadow-xl mx-auto"
        />

        <div className="flex justify-around mt-5">
          <div className="vendor-brand flex items-start">
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
        <button className="mx-auto text-white bg-gradient-to-br from-blue-400 to-blue-800 py-3 px-5 rounded-lg mt-2">
          Split Now
        </button>
      </div>
      <div className="split-with p-3 w-2/3">
        <span className="font-bold text-white text-xl">Split with</span>
        <div className="avatar-list flex mt-5">
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
          <img
            className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
            src="https://i.pravatar.cc/300?img=7"
            alt=""
          />
          <img
            className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
            src="https://i.pravatar.cc/300?img=8"
            alt=""
          />
          <img
            className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
            src="https://i.pravatar.cc/300?img=9"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SplitWith;
