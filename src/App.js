import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthUserContextProvider } from "./context/AuthUserContext";
import Home from "./pages/Home";
import Prototype from "./pages/Prototype";

function App() {
  return (
    <AuthUserContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/prototype">
              <Prototype />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthUserContextProvider>
  );
}

export default App;

// const razorPay = async () => {
//   const results = await fetch("/.netlify/functions/createOrder");
//   console.log(results);
// };

/* <button
className="px-12 py-8 bg-yellow-400 hover:bg-yellow-300 text-white rounded-xl"
onClick={razorPay}
>
RAZOR PAY
</button> */
