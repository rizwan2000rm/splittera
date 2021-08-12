import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import { ToastContainer, toast } from "react-toastify";
import AsyncSelect from "react-select/async";

import { addBill, db } from "../firebase/firebase.utils";
import AuthUserContext from "../context/AuthUserContext";

import "react-toastify/dist/ReactToastify.css";

const modalOverlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(1px)",
};

const Navbar = () => {
  const [vendor, setVendor] = useState("");
  const [amount, setAmount] = useState(0);
  const { authUser } = useContext(AuthUserContext);

  // REACT SELECT
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState(false);

  const handleChange = (value, actionMeta) => {
    setValue(value);
    console.log(value);
  };

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  // const handleKeyDown = (event) => {
  //   if (!inputValue) return;
  //   // eslint-disable-next-line default-case
  //   switch (event.key) {
  //     case "Enter":
  //     case "Tab":
  //       setInputValue("");
  //       setValue([...value, createOption(inputValue)]);
  //       event.preventDefault();
  //   }
  // };

  const handleSubmit = (close) => {
    const userEmails = value.map((email) => email.value);
    addBill(vendor, amount, userEmails, authUser)
      .then(() => {
        close();
        setVendor("");
        setValue([]);
        setAmount("");
        toast.success("Bill Created", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Bill Creation failed", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const fetchUsers = (inputValue, callback) => {
    db.collection("users").onSnapshot((snapshot) => {
      const newUsers = snapshot.docs
        .map((doc) => {
          return {
            value: doc.data().email,
            label: doc.data().email,
          };
        })
        //filtering the users which do not match the current authenticated user
        .filter((user) => user.value !== authUser.email);
      if (!inputValue) {
        callback(newUsers);
      }
      callback(newUsers.filter((user) => user.value.startsWith(inputValue)));
    });
  };

  const defaultOptions = [
    {
      value: "rizwan2000.rm@gmail.com",
      label: "rizwan2000.rm@gmail.com",
    },
    {
      value: "saistashaikh2019@gmail.com",
      label: "saistashaikh2019@gmail.com",
    },
    {
      value: "salik.ansari6@gmail.com",
      label: "salik.ansari6@gmail.com",
    },
  ];

  return (
    <>
      <div className="flex justify-between md:justify-start md:flex-col items-center w-full h-full py-4 shadow-xl">
        <img
          className="w-1/3 mx-auto mb-3 lg:mb-6"
          src="/images/logo.svg"
          alt=""
        />
        <NavLink
          exact
          to="/prototype/"
          activeClassName="bg-red-300 text-white"
          className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer hover:bg-red-300 hover:text-white hover:font-bold"
        >
          <ion-icon name="home"></ion-icon>
          <span className="hidden lg:block">Dashboard</span>
        </NavLink>
        <Popup
          trigger={
            <button>
              <div className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer hover:bg-red-300 hover:text-white hover:font-bold">
                <ion-icon name="home"></ion-icon>
                <span className="hidden lg:block">Create Bill</span>
              </div>
            </button>
          }
          overlayStyle={modalOverlayStyle}
          modal
          position="center center"
        >
          {(close) => (
            <div className="border bg-white px-12 py-8">
              <div className="w-96">
                <div className="text-gray-600 font-bold mb-6">
                  <h1>Create New Bill</h1>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    value={vendor}
                    onChange={(e) => {
                      setVendor(e.target.value);
                    }}
                    placeholder="Vendor"
                    className="w-full mb-6 px-4 h-10 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring text-sm"
                  />
                  <input
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    type="number"
                    placeholder="Amount"
                    className="w-full mb-6 px-4 h-10 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring text-sm"
                  />
                  <AsyncSelect
                    // components={components}
                    onChange={handleChange}
                    defaultOptions={defaultOptions.filter(
                      (user) => user.value !== authUser.email
                    )}
                    onInputChange={handleInputChange}
                    loadOptions={fetchUsers}
                    isClearable
                    isMulti
                    value={value}
                    inputValue={inputValue}
                    placeholder="Enter users email to split with..."
                    className="w-full mb-6 bg-gray-100 rounded-lg shadow-sm text-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 w-full mx-auto rounded-lg bg-blue-400 text-white text-sm hover:opacity-80"
                    onClick={() => {
                      handleSubmit(close);
                    }}
                  >
                    Split Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </Popup>
        <NavLink
          to="/prototype/splitreqs"
          activeClassName="bg-red-300 text-white"
          className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer hover:bg-red-300 hover:text-white hover:font-bold"
        >
          <ion-icon name="home"></ion-icon>
          <span className="hidden lg:block"> Requests</span>
        </NavLink>
        <NavLink
          to="/prototype/history"
          activeClassName="bg-red-300 text-white"
          className="flex gap-2 m-3 px-4 py-2 transition-all rounded-lg font-bold cursor-pointer hover:bg-red-300 hover:text-white hover:font-bold"
        >
          <ion-icon name="home"></ion-icon>
          <span className="hidden lg:block">History</span>
        </NavLink>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Navbar;
