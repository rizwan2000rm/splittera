import React, { useState, useEffect, useContext } from "react";
import { ClipLoader } from "react-spinners";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ActiveSplitRequest from "../components/ActiveSplitRequest";
import AuthUserContext from "../context/AuthUserContext";
import "../animation.css";
import { getBills } from "../firebase/firebase.utils";

const SplitRequests = () => {
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
          //Filtering bills for the users which contain paid as false
          return newBills.filter((bill) => {
            const mySplit = bill.users.find(
              (user) => user.email === authUser.email
            );
            return !mySplit.paid;
          });
        });
        setLoading(false);
      });
    }
  }, [authUser]);

  useEffect(() => {
    setActiveRequest(requests[0]);
  }, [requests]);

  useEffect(() => {
    console.log(requests);
  }, [requests]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <ClipLoader size={100} />;
      </div>
    );
  }

  return (
    <div className="requests m-1 mb-4 flex h-full border border-gray-300">
      <div className="req-list w-72 lg:w-96 h-full pb-12 overflow-scroll flex flex-col border-r border-gray-300">
        <TransitionGroup component={null}>
          {requests.length !== 0 ? (
            requests.map((request) => (
              <CSSTransition
                key={request.id}
                timeout={500}
                classNames="list-item"
              >
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
              </CSSTransition>
            ))
          ) : (
            <h1 className="font-medium text-xl m-5">No pending requests</h1>
          )}
        </TransitionGroup>
      </div>
      <div className="active-split ">
        {activeRequest && <ActiveSplitRequest activeRequest={activeRequest} />}
      </div>
    </div>
  );
};

export default SplitRequests;
