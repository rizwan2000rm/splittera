import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import { ToastContainer, toast } from "react-toastify";
import CreatableSelect from "react-select/creatable";

import { addBill } from "../firebase/firebase.utils";
import AuthUserContext from "../context/AuthUserContext";

import "react-toastify/dist/ReactToastify.css";

const modalOverlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(1px)"
};

const Navbar = () => {
  const [vendor, setVendor] = useState("");
  const [amount, setAmount] = useState(0);
  const { authUser } = useContext(AuthUserContext);

  // REACT SELECT
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState(false);

  const components = {
    DropdownIndicator: null
  };

  const createOption = (label) => ({
    label,
    value: label
  });

  const handleChange = (value, actionMeta) => {
    setValue(value);
  };

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    // eslint-disable-next-line default-case
    switch (event.key) {
      case "Enter":
      case "Tab":
        setInputValue("");
        setValue([...value, createOption(inputValue)]);
        event.preventDefault();
    }
  };

  const handleSubmit = () => {
    addBill(vendor, amount, value, authUser)
      .then(() => {
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
          progress: undefined
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
          progress: undefined
        });
      });
  };

  return (
    <div className="flex flex-col items-center w-full h-full py-4 shadow-xl">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                <CreatableSelect
                  components={components}
                  onChange={handleChange}
                  onInputChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  menuIsOpen={false}
                  isClearable
                  isMulti
                  value={value}
                  inputValue={inputValue}
                  placeholder="Type something and press enter..."
                  className="w-full mb-6 bg-gray-100 rounded-lg shadow-sm text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-2 w-full mx-auto rounded-lg bg-blue-400 text-white text-sm hover:opacity-80"
                  onClick={handleSubmit}
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
  );
};

export default Navbar;
