import React, { useState, useEffect, useContext } from "react";
import { ClipLoader } from "react-spinners";
import ActiveSplitRequest from "../components/ActiveSplitRequest";
import AuthUserContext from "../context/AuthUserContext";
import { getBills } from "../firebase/firebase.utils";

const History = () => {
  const [requests, setRequests] = useState([]);
  const [activeRequest, setActiveRequest] = useState(null);
  const { authUser } = useContext(AuthUserContext);
  const [loading, setLoading] = useState(true);

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
          //Filtering bills for the users which contain paid as true
          return newBills.filter((bill) => {
            const mySplit = bill.users.find(
              (user) => user.email === authUser.email
            );
            return mySplit.paid;
          });
        });
        setLoading(false);
      });
    }
  }, [authUser]);

  useEffect(() => {
    setActiveRequest(requests[0]);
  }, [requests]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <ClipLoader size={100} />
      </div>
    );
  }

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
              <div
                className="flex justify-center items-center font-medium text-2xl bg-purple-600 text-white rounded-full h-12 w-12"
                alt=""
              >
                {request.name && request.name[0].toUpperCase()}
              </div>
              <div className="req-details p-2">
                <div className="name text-gray-600 text-xl font-bold mb-2">
                  {request.name}
                </div>
                <div className="date text-sm">12th January 2021</div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-xl font-medium m-5">History Empty</h1>
        )}
      </div>
      <div className="active-split ">
        {activeRequest && (
          <ActiveSplitRequest history={true} activeRequest={activeRequest} />
        )}
      </div>
    </div>
  );
};

export default History;
