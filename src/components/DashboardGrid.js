import React, { useState } from "react";
import RecentSplit from "./RecentSplit";
import SplitBillReq from "./SplitBillReq";
// import SplitWith from "./SplitWith";
// import NearByFriends from "./NearByFriends";
import PendingBills from "./PendingBills";
// import { Participate } from "./Participate";
import { useEffect } from "react";
import { useContext } from "react";
import AuthUserContext from "../context/AuthUserContext";
import { getBills } from "../firebase/firebase.utils";

const DashboardGrid = () => {
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
        setActiveRequest(() => {
          //Filtering bills for the users which contain paid as true
          return newBills.filter((bill) => {
            const mySplit = bill.users.find(
              (user) => user.email === authUser.email
            );
            return !mySplit.paid;
          })[0];
        });
        // setLoading(false);
      });
    }
  }, [authUser]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-5 overflow-y-scroll">
      {/* <div className="order-1 p-2">
        <SplitWith />
      </div> */}
      <div className="p-2 order-4 w-full">
        <PendingBills />
        <RecentSplit />
      </div>
      <div className="order-5 p-2">{/* <NearByFriends /> */}</div>
      {/* <div className="p-2 order-2">
        <Participate />
      </div> */}
      <div className="order-3 w-full h-full p-2">
        <SplitBillReq
          activeRequest={activeRequest}
          setActiveRequest={setActiveRequest}
        />
      </div>
      <div className="order-6 p-2"></div>
    </div>
  );
};

export default DashboardGrid;
