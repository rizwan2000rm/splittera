import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center w-56 py-4 shadow-xl">
      <div className="flex gap-2 px-6 py-4 my-2 rounded-2xl bg-red-400 text-white">
        <ion-icon name="home"></ion-icon>
        <span>Dashboard</span>
      </div>
      <div className="flex gap-2 px-6 py-6 rounded-2xl text-gray-600">
        <ion-icon name="home"></ion-icon>
        <span>Dashboard</span>
      </div>
      <div className="flex gap-2 px-6 py-6 rounded-2xl text-gray-600">
        <ion-icon name="home"></ion-icon>
        <span>Dashboard</span>
      </div>
      <div className="flex gap-2 px-6 py-6 rounded-2xl text-gray-600">
        <ion-icon name="home"></ion-icon>
        <span>Dashboard</span>
      </div>
      <div className="flex gap-2 px-6 py-6 rounded-2xl text-gray-600">
        <ion-icon name="home"></ion-icon>
        <span>Dashboard</span>
      </div>
    </div>
  );
};

export default Navbar;
