import React from "react";
import { NavLink, Link } from "react-router-dom";
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
      <NavLink
        to="/prototype/"
        activeClassName="bg-red-300 text-white"
        className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold "
      >
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </NavLink>
      <NavLink
        to="/prototype/splitreqs"
        activeClassName="bg-red-300 text-white"
        className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer  hover:text-white hover:font-bold"
      >
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block"> Requests</span>
      </NavLink>
      <NavLink
        to="/prototype/"
        exact
        activeClassName="bg-red-300 text-white"
        className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer text-gray-600 hover:bg-red-300 hover:text-white hover:font-bold"
      >
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </NavLink>
      <NavLink
        to="/prototype/"
        exact
        activeClassName="bg-red-300 text-white"
        className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer text-gray-600 hover:bg-red-300 hover:text-white hover:font-bold"
      >
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </NavLink>

      <Popup
        trigger={
          <button>
            <NavLink
              exact
              to="/prototype/"
              activeClassName="bg-red-300 text-white"
              className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer text-gray-600 hover:bg-red-300 hover:text-white hover:font-bold"
            >
              <ion-icon name="home"></ion-icon>
              <span className="hidden lg:block">Dashboard</span>
            </NavLink>
          </button>
        }
        overlayStyle={modalOverlayStyle}
        modal
        position="center center"
      >
        <div className="border bg-white">
          <form className="flex flex-col mx-10 my-10">
            <input
              type="text"
              placeholder="Hotel"
              className="w-full my-5 pr-10 px-4 h-10 bg-gray-100 rounded-xl shadow-sm focus:outline-none focus:opacity-80 text-sm"
            />
            <input
              type="text"
              placeholder="Oreo"
              className="w-full my-5 pr-10 px-4 h-10 bg-gray-100 rounded-xl shadow-sm focus:outline-none focus:opacity-80 text-sm"
            />
            <input
              type="text"
              placeholder="Total"
              className="w-full my-5 pr-10 px-4 h-10 bg-gray-100 rounded-xl shadow-sm focus:outline-none focus:opacity-80 text-sm"
            />
            <input
              type="text"
              placeholder="Total"
              className="w-full my-5 pr-10 px-4 h-10 bg-gray-100 rounded-xl shadow-sm focus:outline-none focus:opacity-80 text-sm"
            />
            <input
              type="text"
              placeholder="Total"
              className="w-full my-5 pr-10 px-4 h-10 bg-gray-100 rounded-xl shadow-sm focus:outline-none focus:opacity-80 text-sm"
            />
            <button className="px-6 py-3 w-32 my-10 mx-auto rounded-lg bg-blue-400 text-white text-sm hover:opacity-80">
              Split Now
            </button>
          </form>
        </div>
      </Popup>
    </div>
  );
};

export default Navbar;
