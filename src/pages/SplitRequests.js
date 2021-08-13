import React, { useState, useEffect, useContext } from "react";
import { ClipLoader } from "react-spinners";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ActiveSplitRequest from "../components/ActiveSplitRequest";
import AuthUserContext from "../context/AuthUserContext";
import "../animation.css";
import { getBills } from "../firebase/firebase.utils";
import Avatar from "react-avatar";
import { Participate } from "../components/Participate";

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <ClipLoader size={100} />;
      </div>
    );
  }

  return (
    <div className="requests mb-4 flex w-full h-full">
      <div className="req-list w-full md:w-72 lg:w-96 h-full pb-12 overflow-y-auto flex flex-col flex-none border-r border-gray-300">
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
                  <Avatar
                    name={request.name && request.name.toUpperCase()}
                    size={60}
                    round={true}
                    maxInitials={2}
                  />
                  <div className="req-details p-2">
                    <div className="name text-gray-500 text-xl font-bold mb-2 truncate overflow-ellipsis overflow-hidden">
                      {request.name}
                    </div>
                    <div className="date text-sm">
                      <span className="date">
                        {request.createdAt
                          .toDate()
                          .toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                      </span>
                      <span className="time ml-2 font-medium">
                        {request.createdAt
                          .toDate()
                          .toLocaleTimeString("en-IN", {
                            timeStyle: "short",
                          })}
                      </span>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))
          ) : (
            <h1 className="font-medium text-xl m-5">No pending requests</h1>
          )}
        </TransitionGroup>
      </div>
      {activeRequest ? (
        <div className="active-split overflow-y-auto  2xl:flex bg-white absolute left-1/2 top-1/2  justify-around shadow-xl border rounded-lg mx-auto md:w-full md:static md:rounded-none md:shadow-none md:border-none">
          <ActiveSplitRequest
            activeRequest={activeRequest}
            setActiveRequest={setActiveRequest}
          />
          <Participate activeRequest={activeRequest} />
        </div>
      ) : (
        <div className="hidden md:flex flex-col justify-center items-center h-full w-full">
          <img className="w-1/2" src="/images/art.jpg" alt="" />
          <div className="font-bold text-gray-500 text-xl">
            Click on a bill to see details
          </div>
        </div>
      )}
    </div>
  );
};

export default SplitRequests;
