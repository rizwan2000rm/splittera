import React, { useState, useEffect } from "react";
import { signInWithGoogle, auth } from "../firebase/firebase.utils";

const TopBar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(true);
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
    return setUser(null);
  }, []);

  return (
    <div className="flex justify-between items-center w-full px-5 py-2">
      {user ? (
        <h1>Hello {user.displayName}</h1>
      ) : (
        <h1>Log in to start splitting</h1>
      )}
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
        {loading ? (
          <div className="text-black">Loading...</div>
        ) : user === null ? (
          <button
            onClick={() =>
              signInWithGoogle().then((results) =>
                auth.onAuthStateChanged((user) => {
                  setUser(user);
                })
              )
            }
            className="px-4 py-1 rounded-lg cursor-pointer bg-red-300 hover:opacity-80 font-medium"
          >
            LOGIN
          </button>
        ) : (
          <img
            onClick={() => {
              setShowOptions((prevState) => !prevState);
            }}
            className="h-8 w-8 object-cover rounded-lg"
            src={user.photoURL}
            alt=""
          />
        )}

        {showOptions && (
          <button
            onClick={() => {
              auth
                .signOut()
                .then(() => {
                  setUser(null);
                  setShowOptions(false);
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
            className="text-black absolute right-5 mt-20 border-2 border-gray-300 rounded shadow-lg p-2"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
