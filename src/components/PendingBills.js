import React, { useEffect, useContext, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AuthUserContext from "../context/AuthUserContext";
import { getBills } from "../firebase/firebase.utils";
import PendingBill from "./PendingBill";
import "../animation.css";
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
    <div className="max-w-sm  px-2  mx-auto ">
      <h1 className="text-xl font-medium text-gray-700">Pending Bills</h1>
      <div className="border p-4 mt-5 rounded-lg flex flex-col">
        <TransitionGroup component={null}>
          {pendingBills?.map((pendingBill) => {
            return (
              <CSSTransition
                key={pendingBill.id}
                timeout={500}
                classNames="list-item"
              >
                <PendingBill {...pendingBill} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default PendingBills;
