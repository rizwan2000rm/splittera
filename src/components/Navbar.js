import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center w-full h-full py-4 shadow-xl">
      <img
        className="w-1/3 mx-auto mb-3 lg:mb-6"
        src="/images/logo.svg"
        alt=""
      />
      <div className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold bg-red-300 text-white">
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </div>
      <div className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer text-gray-600 hover:bg-red-300 hover:text-white hover:font-bold">
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </div>
      <div className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer text-gray-600 hover:bg-red-300 hover:text-white hover:font-bold">
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </div>
      <div className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer text-gray-600 hover:bg-red-300 hover:text-white hover:font-bold">
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </div>
      <div className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer text-gray-600 hover:bg-red-300 hover:text-white hover:font-bold">
        <ion-icon name="home"></ion-icon>
        <span className="hidden lg:block">Dashboard</span>
      </div>
    </div>
  );
};

export default Navbar;
