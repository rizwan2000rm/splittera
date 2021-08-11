import React from "react";
import Header from "../components/Header";
import Feature from "../components/Feature";

// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../features/counter/counterSlice";

const Home = () => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <Feature />

      {/* <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
