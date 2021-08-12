import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { getUsersByEmail } from "../firebase/firebase.utils";

const PendingBill = (props) => {
  const [avatars, setAvatars] = useState([]);
  const [percentage, setPercentage] = useState(0);

  const calculatePaidPercentage = (users) => {
    return Math.floor(
      (users.filter((user) => user.paid).length / users.length) * 100
    );
  };

  useEffect(() => {
    getUsersByEmail(...props.userEmails)
      .get()
      .then((snapshot) => {
        const users = [];
        snapshot.forEach((doc) => {
          users.push(doc.data());
        });
        setAvatars(users);
      });

    setPercentage(calculatePaidPercentage(props.users));
  }, [props.userEmails, props.users]);

  return (
    <div className="flex justify-between items-center pb-4">
      <div>
        <h1 className="font-bold">{props.name}</h1>
        <p>Total payment ${props.totalAmount}</p>

        <div className="flex mt-2">
          {avatars.map((splitter) => {
            return (
              <img
                key={splitter.uid}
                className="h-12 w-12 rounded-full  border-white border-2 -mr-3 shadow"
                src={splitter.photoURL}
                alt="avatar"
              />
            );
          })}
        </div>
      </div>
      <div>
        <CircularProgressbar
          className="w-14 h-14 font-bold"
          value={percentage}
          text={`${percentage}%`}
        />
      </div>
    </div>
  );
};

export default PendingBill;
