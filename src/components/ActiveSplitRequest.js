import React, { useState, useEffect, useContext } from "react";
import AuthUserContext from "../context/AuthUserContext";
import { auth, getBill, payBill } from "../firebase/firebase.utils";
import { ToastContainer, toast } from "react-toastify";
const ActiveSplitRequest = ({ activeRequest, history }) => {
  const [mySplit, setMySplit] = useState(null);
  const { authUser } = useContext(AuthUserContext);

  useEffect(() => {
    setMySplit(() => {
      return activeRequest.users.find((user) => {
        return user.email === auth.currentUser.email;
      }).amount;
    });
  }, [activeRequest]);

  return (
    <div className=" max-w-sm">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="rounded-lg px-2 py-8 mt-5">
        <img
          className="w-32 h-32 object-cover rounded-full mx-auto p-1 border-2 border-yellow-400"
          src="https://as2.ftcdn.net/v2/jpg/02/88/84/21/1000_F_288842168_nhgjfMO0vtARTs6obR3i9bfdRIuaSL56.jpg"
          alt=""
        />
        <h1 className="font-bold text-base text-center pt-6">
          Hey {auth.currentUser && auth.currentUser.displayName}
        </h1>
        <p className="text-center mx-auto px-8 text-sm pt-2">
          <span className="font-bold">Rakib</span> requested you a split bill
          payment of{" "}
          <span className="font-medium text-yellow-400">${mySplit}</span> from{" "}
          <span className="font-bold">{activeRequest.name}</span>
        </p>
        <div className="px-8 pt-8 flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="text-base">Split Bill</div>
            <div className="font-bold text-gray-600">${mySplit}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-base">Total Bill</div>
            <div className="font-bold text-gray-600">
              ${activeRequest.totalAmount}
            </div>
          </div>
        </div>
        <div className="px-8 pt-4 flex gap-4">
          {!history && (
            <>
              <button className="px-6 py-3 w-1/2 rounded-lg bg-red-400 text-white text-sm hover:opacity-80">
                Decline
              </button>
              <button
                onClick={async () => {
                  //Getting the bill with id of the activeRequest bill
                  const bill = await getBill(activeRequest.id);

                  //Updating the field paid for the authenticated user as true and update the array of users
                  //Wrote the logic for updating boolean field because firebase does allow to update array of objects
                  //REF: https://stackoverflow.com/questions/63679460/how-to-update-an-array-of-maps-objects-on-firestore-in-angular-or-angularfires
                  const updatedUsers = bill.data().users.map((user) => {
                    if (user.email !== authUser.email) {
                      return user;
                    }
                    return {
                      ...user,
                      paid: true,
                    };
                  });

                  //Updating the bill in firebase which updates the whole document
                  payBill(updatedUsers, activeRequest.id)
                    .then(() => {
                      toast.success("Payment Successful", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    })
                    .catch((err) => {
                      console.log("error");
                    });
                }}
                className="px-6 py-3 w-1/2 rounded-lg bg-blue-400 text-white text-sm hover:opacity-80"
              >
                Accept
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveSplitRequest;
