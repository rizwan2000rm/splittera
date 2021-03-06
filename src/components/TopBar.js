import React, { useState, useEffect, useContext } from "react";
import Popup from "reactjs-popup";
import AuthUserContext from "../context/AuthUserContext";
import { useHistory } from "react-router";
import {
  signInWithGoogle,
  auth,
  createUserProfileDocument
} from "../firebase/firebase.utils";
import { ClipLoader } from "react-spinners";

const TopBar = () => {
  const { setAuthUser } = useContext(AuthUserContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        setAuthUser(user);
      }
      setLoading(false);
    });
    return setUser(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        setAuthUser(null);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const modalOverlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(1px)"
  };

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
          className="hidden md:block w-full pr-10 px-4 h-10 bg-gray-100 rounded-xl shadow-sm focus:outline-none focus:opacity-80 text-sm"
        />
        <span className="hidden md:flex items-center h-full fill-current text-gray-600 mr-2 absolute right-0 top-0">
          <ion-icon name="search"></ion-icon>
        </span>
      </div>
      <div className="flex flex-row items-center gap-2 fill-current text-white cursor-pointer">
        <span className="bg-red-300 rounded-lg p-1 h-8 hover:opacity-80">
          <ion-icon name="notifications-outline"></ion-icon>
        </span>
        {loading ? (
          <div className="text-black">
            <ClipLoader />
          </div>
        ) : user === null ? (
          <button
            onClick={() =>
              signInWithGoogle().then((results) =>
                auth.onAuthStateChanged((user) => {
                  setUser(user);
                  setAuthUser(user);
                  createUserProfileDocument(user, {
                    photoURL: user.photoURL
                  });
                })
              )
            }
            className="px-4 py-1 rounded-lg cursor-pointer bg-red-300 hover:opacity-80 font-medium"
          >
            LOGIN
          </button>
        ) : (
          <Popup
            trigger={
              <img
                className="h-8 w-8 object-cover rounded-lg"
                src={user.photoURL}
                alt=""
              />
            }
            position="bottom right"
            on="click"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            arrow={false}
            nested
          >
            <div className="w-36 my-2 border bg-white">
              <Popup
                trigger={
                  <div className="px-4 py-2 text-gray-600 cursor-pointer hover:bg-red-300 hover:text-white">
                    Profile
                  </div>
                }
                overlayStyle={modalOverlayStyle}
                modal
              >
                {(close) => (
                  <div className="border bg-white">
                    <button
                      className="absolute right-0 top-0 h-12 w-12 text-3xl text-red-300 hover:opacity-80"
                      onClick={close}
                    >
                      &times;
                    </button>
                    <div className="p-6 sm:p-12 md:p-24 flex flex-col items-center md:flex-row gap:4 md:gap-12">
                      <img
                        className="w-1/2 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                      <div className="my-2">
                        <div className="font-bold text-center text-xl text-gray-600">
                          {user.displayName}
                        </div>
                        <div className="font-bold text-center text-gray-600">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
              <div
                onClick={signOut}
                className="px-4 py-2 text-gray-600 cursor-pointer hover:bg-red-300 hover:text-white"
              >
                Log Out
              </div>
            </div>
          </Popup>
        )}
      </div>
    </div>
  );
};

export default TopBar;
