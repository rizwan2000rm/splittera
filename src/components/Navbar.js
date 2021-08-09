import React from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";

const modalOverlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(1px)",
};

const Navbar = () => {
  return (
    <div className="flex flex-col items-center w-full h-full py-4 shadow-xl">
      <img
        className="w-1/3 mx-auto mb-3 lg:mb-6"
        src="/images/logo.svg"
        alt=""
      />
      <Popup
        trigger={
          <button>
            <div className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer hover:bg-red-300 hover:text-white hover:font-bold">
              <ion-icon name="home"></ion-icon>
              <span className="hidden lg:block">Create Bill</span>
            </div>
          </button>
        }
        overlayStyle={modalOverlayStyle}
        modal
        position="center center"
      >
        <div className="border bg-white px-12 py-8">
          <div className="w-96">
            <div className="text-gray-600 font-bold mb-6">
              <h1>Create New Bill</h1>
            </div>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Hotel"
                className="w-full mb-6 px-4 h-10 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring text-sm"
              />
              <input
                type="text"
                placeholder="Oreo"
                className="w-full mb-6 px-4 h-10 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring text-sm"
              />
              <input
                type="text"
                placeholder="Total"
                className="w-full mb-6 px-4 h-10 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring text-sm"
              />
              <input
                type="text"
                placeholder="Total"
                className="w-full mb-6 px-4 h-10 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring text-sm"
              />
              <input
                type="text"
                placeholder="Total"
                className="w-full mb-6 px-4 h-10 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring text-sm"
              />
              <button className="px-6 py-2 w-full mx-auto rounded-lg bg-blue-400 text-white text-sm hover:opacity-80">
                Split Now
              </button>
            </form>
          </div>
        </div>
      </Popup>
      <NavLink
        exact
        to="/prototype/"
        activeClassName="bg-red-300 text-white"
        className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer hover:bg-red-300 hover:text-white hover:font-bold"
      >
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </NavLink>
      <NavLink
        to="/prototype/splitreqs"
        activeClassName="bg-red-300 text-white"
        className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer hover:bg-red-300 hover:text-white hover:font-bold"
      >
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block"> Requests</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
