import React, { useEffect, useContext, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import AuthUserContext from "../context/AuthUserContext";
import { getBills } from "../firebase/firebase.utils";
import PendingBill from "./PendingBill";

const PendingBills = () => {
  const { authUser } = useContext(AuthUserContext);
  const [pendingBills, setPendingBills] = useState([]);

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
        setPendingBills(() => {
          //Filtering bills for the users which contain paid as false
          return newBills
            .filter((bill) => {
              const mySplit = bill.users.find(
                (user) => user.email === authUser.email
              );
              return !mySplit.paid;
            })
            .slice(0, 3);
        });
      });
    }
  }, [authUser]);

  useEffect(() => {
    console.log(pendingBills);
  }, [pendingBills]);

  return (
    <div className="max-w-sm  px-2  mx-auto">
      <h1 className="text-xl font-medium text-gray-700">Pending Bills</h1>

      <div className="border p-4 mt-5 rounded-lg flex flex-col">
        {pendingBills?.map((pendingBill) => {
          return <PendingBill {...pendingBill} />;
        })}
      </div>
    </div>
  );
};

export default PendingBills;
