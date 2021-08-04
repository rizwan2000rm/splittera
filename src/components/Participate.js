import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const Participate = () => {
  const [persons] = useState([
    {
      id: 1,
      name: "Kyle Foster",
    },
    {
      id: 2,
      name: "Salik Ansari",
    },
    { id: 3, name: "Rizwan Memon" },
    {
      id: 4,
      name: "Shaista Shaikh",
    },
    {
      id: 5,
      name: "John Doe",
    },
  ]);

  return (
    <div className="max-w-sm mx-auto ">
      <div className="flex">
        <span className="text-xl font-medium text-gray-700">Participate</span>
        <span className="ml-auto">5 person</span>
      </div>
      <div className="border rounded-xl border-gray-300 p-6 mt-5 flex flex-col">
        {persons.map((person) => {
          return (
            <div className="person flex mb-8 items-center">
              <img
                src={`https://i.pravatar.cc/300?img=${person.id}`}
                alt=""
                className="avatar h-12 w-12 rounded-full shadow"
              />
              <div className="flex-1 ml-5">
                <div className="flex justify-between">
                  <div className="name text-sm mb-2">{person.name}</div>
                  <div className="font-bold text-sm">$28.20</div>
                </div>
                <Slider
                  handleStyle={{
                    backgroundColor: "#EF4444",
                    borderColor: "white",
                    boxShadow: "1px 2px 5px gray",
                    borderWidth: "3px",
                  }}
                  trackStyle={{
                    backgroundColor: "#EF4444",
                  }}
                />
              </div>
            </div>
          );
        })}
        <button className="bg-gradient-to-br from-red-300 to-red-600 font-bold text-white py-2 px-5 rounded-lg mx-auto">
          Send Bill
        </button>
      </div>
    </div>
  );
};
