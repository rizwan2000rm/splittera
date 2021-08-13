import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect } from "react";
import { getUsersByEmail } from "../firebase/firebase.utils";
import { useContext } from "react";
import AuthUserContext from "../context/AuthUserContext";

export const Participate = ({ activeRequest }) => {
  const [splitters, setSplitters] = useState(null);
  const [mySplit, setMySplit] = useState(null);

  const { authUser } = useContext(AuthUserContext);

  useEffect(() => {
    setMySplit(() => {
      return activeRequest.users
        .find((user) => {
          return user.email === authUser.email;
        })
        .amount.toFixed(2);
    });

    getUsersByEmail(...activeRequest.userEmails).onSnapshot((snapshot) => {
      const newSplitters = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setSplitters(newSplitters);
    });
  }, [activeRequest, authUser.email]);

  return (
    <div className="hidden md:block lg:pt-10 flex-1 max-w-sm md:mx-auto">
      <div className="flex">
        <span className="text-xl font-medium text-gray-700">Participate</span>
        <span className="ml-auto">{splitters && splitters.length} person</span>
      </div>
      <div className="border rounded-xl border-gray-300 p-6 mt-5 flex flex-col">
        {splitters?.map((person) => {
          return (
            <div className="person flex mb-8 items-center">
              <img
                src={person.photoURL}
                alt=""
                className="avatar h-12 w-12 rounded-full shadow"
              />
              <div className="flex-1 ml-5">
                <div className="flex justify-between">
                  <div className="name text-sm mb-2">{person.displayName}</div>
                  <div className="font-bold text-sm">${mySplit && mySplit}</div>
                </div>
                <Slider
                  value={100}
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
      </div>
    </div>
  );
};
