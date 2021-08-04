import React from "react";

const NearByFriends = () => {
  return (
    <div className=" max-w-sm  mx-auto">
      <span className="text-xl font-medium text-gray-700">Nearby Friends</span>
      <div className="border rounded-lg p-8 mt-5">
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-1">
            <img
              className="w-14 h-14 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              alt=""
            />
            <span>Rizwan</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              className="w-14 h-14 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              alt=""
            />
            <span>Salik</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              className="w-14 h-14 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              alt=""
            />
            <span>Shaista</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img
              className="w-14 h-14 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              alt=""
            />
            <span>Shaista</span>
          </div>
        </div>
        <div className="relative mt-6">
          <input
            type="text"
            placeholder="Add New Friends"
            className="w-full pl-10 px-4 h-10 bg-gray-100 rounded-xl shadow-sm focus:outline-none focus:opacity-80 text-sm"
          />
          <span className="h-full fill-current text-gray-600 ml-2 flex items-center absolute left-0 top-0">
            <ion-icon name="search"></ion-icon>
          </span>
          <span className="h-full fill-current text-white bg-red-400 px-2 flex items-center absolute right-0 top-0 rounded-xl">
            <ion-icon name="add"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NearByFriends;
