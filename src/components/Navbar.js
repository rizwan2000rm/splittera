import React from "react";
import { NavLink, Link } from "react-router-dom";

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
      <NavLink
        exact
        to="/prototype/"
        activeClassName="bg-red-300 text-white"
        className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer text-gray-600 hover:bg-red-300 hover:text-white hover:font-bold"
      >
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
