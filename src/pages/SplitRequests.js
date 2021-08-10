import React, { useState, useEffect, useContext } from "react";
import ActiveSplitRequest from "../components/ActiveSplitRequest";
import AuthUserContext from "../context/AuthUserContext";
import { getBills } from "../firebase/firebase.utils";

const SplitRequests = () => {
  const [requests, setRequests] = useState([]);
  const [activeRequest, setActiveRequest] = useState(null);
  const { authUser } = useContext(AuthUserContext);

  useEffect(() => {
    if (authUser) {
      //Added onSnapshot to get realtime updates
      getBills(authUser.email).onSnapshot((snapshot) => {
        const newBills = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setRequests(() => {
          //Filtering bills for the users which contain paid as false
          return newBills.filter((bill) => {
            const mySplit = bill.users.find(
              (user) => user.email === authUser.email
            );
            return !mySplit.paid;
          });
        });
      });
    }
  }, [authUser]);

  useEffect(() => {
    setActiveRequest(requests[0]);
  }, [requests]);

  useEffect(() => {
    console.log(requests);
  }, [requests]);

  return (
    <div className="requests flex m-6">
      <div className="req-list w-72 flex flex-col border border-gray-300">
        {requests.length !== 0 ? (
          requests.map((request) => (
            <div
              className="req-list-item flex gap-4 items-center pl-4 py-2 border-b border-gray-300 cursor-pointer"
              onClick={() => {
                setActiveRequest(request);
              }}
            >
              <img
                src="https://as2.ftcdn.net/v2/jpg/02/88/84/21/1000_F_288842168_nhgjfMO0vtARTs6obR3i9bfdRIuaSL56.jpg"
                className="h-12 w-12"
                alt=""
              />
              <div className="req-details p-2">
                <div className="name text-gray-600 text-xl font-bold mb-2">
                  {request.name}
                </div>
                <div className="date text-sm">12th January 2021</div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="font-medium text-xl m-5">No pending requests</h1>
        )}
      </div>
      <div className="active-split ">
        {activeRequest && <ActiveSplitRequest activeRequest={activeRequest} />}
      </div>
    </div>
  );
};

export default SplitRequests;
