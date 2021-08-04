import React from "react";
import { signInWithGoogle } from "../firebase/firebase.utils";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center w-full px-5 py-2">
      <h1>Hello Oreo</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full pr-10 px-4 h-10 bg-gray-100 rounded-xl shadow-sm focus:outline-none focus:opacity-80 text-sm"
        />
        <span className="h-full fill-current text-gray-600 mr-2 flex items-center absolute right-0 top-0">
          <ion-icon name="search"></ion-icon>
        </span>
      </div>
      <div className="flex flex-row items-center gap-2 fill-current text-white cursor-pointer">
        <span className="bg-red-300 rounded-lg p-1 h-8 hover:opacity-80">
          <ion-icon name="notifications-outline"></ion-icon>
        </span>
        <button
          onClick={signInWithGoogle}
          className="px-4 py-1 rounded-lg cursor-pointer bg-red-300 hover:opacity-80 font-medium"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default TopBar;
