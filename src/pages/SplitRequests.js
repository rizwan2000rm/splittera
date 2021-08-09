import React, { useState, useEffect } from "react";
import ActiveSplitRequest from "../components/ActiveSplitRequest";

import { getBills } from "../firebase/firebase.utils";

const dummyRequests = [
  {
    name: "Sagar Restaurant",
  },
  {
    name: "Ta'am Restaurant",
  },
  {
    name: "Kosher Restaurant",
  },
  {
    name: "Afzal Restaurant",
  },
  {
    name: "McDonalds",
  },
];

const SplitRequests = () => {
  const [requests, setRequests] = useState([]);
  const [activeRequest, setActiveRequest] = useState(null);

  useEffect(() => {
    getBills().then((bills) => {
      setRequests(bills);
      setActiveRequest(bills[0]);
    });
  }, []);

  useEffect(() => {
    console.log(requests);
  }, [requests]);

  return (
    <div className="requests flex m-6">
      <div className="req-list w-72 flex flex-col border border-gray-300">
        {requests?.map((request) => (
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
        ))}
      </div>
      <div className="active-split ">
        {activeRequest && <ActiveSplitRequest activeRequest={activeRequest} />}
      </div>
    </div>
  );
};

export default SplitRequests;
