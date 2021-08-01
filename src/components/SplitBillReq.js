import React from "react";

const SplitBillReq = () => {
  return (
    <div className="border max-w-sm h-full rounded-lg px-2 py-8 mx-auto">
      <img
        className="w-32 h-32 object-cover rounded-full mx-auto p-1 border-2 border-yellow-400"
        src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
        alt=""
      />
      <h1 className="font-bold text-base text-center pt-6">Hey Mike!</h1>
      <p className="text-center mx-auto px-8 text-sm pt-2">
        <span className="font-bold">Rakib</span> requested you a split bill
        payment of <span className="font-medium text-yellow-400">$20.00</span>{" "}
        from <span className="font-bold">Sushi Restaurant</span>
      </p>
      <div className="px-8 pt-8 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="text-base">Split Bill</div>
          <div className="font-bold text-gray-600">$20.00</div>
        </div>
        <div className="flex justify-between">
          <div className="text-base">Total Bill</div>
          <div className="font-bold text-gray-600">$220.00</div>
        </div>
        <div className="flex justify-between">
          <div className="text-base">Details</div>
          <div className="font-bold text-red-400">Items</div>
        </div>
      </div>
      <div className="px-8 pt-4 flex gap-4">
        <button className="px-6 py-3 w-1/2 rounded-lg bg-red-400 text-white text-sm hover:opacity-80">
          Decline
        </button>
        <button className="px-6 py-3 w-1/2 rounded-lg bg-blue-400 text-white text-sm hover:opacity-80">
          Accept
        </button>
      </div>
    </div>
  );
};

export default SplitBillReq;
