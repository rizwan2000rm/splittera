import React, { useEffect, useContext, useState } from "react";
import AuthUserContext from "../context/AuthUserContext";
import { getBills, getUsersByEmail } from "../firebase/firebase.utils";

const RecentSplit = () => {
  const { authUser } = useContext(AuthUserContext);
  const [recentSplit, setRecentSplit] = useState(null);
  const [splitters, setSplitters] = useState([]);

  useEffect(() => {
    if (authUser) {
      getBills(authUser.email)
        .limit(1)
        .onSnapshot((snapshot) => {
          snapshot.docs.forEach((doc) => {
            setRecentSplit(doc.data());
          });
        });
    }
  }, [authUser]);

  useEffect(() => {
    if (recentSplit) {
      getUsersByEmail(...recentSplit.userEmails)
        .get()
        .then((snapshot) => {
          const users = [];
          snapshot.forEach((doc) => {
            users.push(doc.data());
          });
          setSplitters(users);
        });
    }
  }, [recentSplit]);

  return (
    <div className="max-w-sm mx-auto">
      <div className="text-xl font-medium text-gray-700">Recent Split</div>
      <div className="border rounded-xl border-gray-300 p-6 mt-5">
        {recentSplit ? (
          <>
            <div className="flex justify-between">
              <div className="flex vendor items-center">
                <img src="/images/pizza.png" alt="" className="h-6 w-6 mr-3" />
                <span className="font-medium text-gray-600">
                  {recentSplit.name}
                </span>
              </div>

              <div className="options fill-current text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <circle cx="128" cy="128" r="12"></circle>
                  <circle cx="128" cy="64" r="12"></circle>
                  <circle cx="128" cy="192" r="12"></circle>
                </svg>{" "}
              </div>
            </div>
            <div className="flex-col items-center md:flex-row flex mt-5 justify-between">
              <img src="/images/pizza.png" alt="" className="h-32 w-32" />
              <div className="avatar-grid mt-5 md:mt-0 grid grid-cols-3 gap-3 md:gap-1 place-items-center">
                {splitters.map((splitter) => {
                  return (
                    <img
                      key={splitter.uid}
                      className="h-12 w-12 rounded-full shadow"
                      src={splitter.photoURL}
                      alt="avatar"
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
};

export default RecentSplit;
