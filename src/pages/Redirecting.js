import React from "react";
import { ClipLoader } from "react-spinners";

const Redirecting = () => {
  return (
    <div className="h-screen text-2xl font-medium w-screen flex justify-center items-center">
      <ClipLoader size={100} />
    </div>
  );
};

export default Redirecting;
