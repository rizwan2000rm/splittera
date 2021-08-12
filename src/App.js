import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthUserContextProvider } from "./context/AuthUserContext";
import Home from "./pages/Home";
import Prototype from "./pages/Prototype";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { ConfigProvider } from "react-avatar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthUserContextProvider>
      <Router>
        <ConfigProvider
          colors={["#9CA3AF", "#F87171", "#FBBF24", "#059669", "#60A5FA"]}
        >
          <>
            <div className="App">
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <ProtectedRoute path="/prototype" component={Prototype} />
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
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
        </ConfigProvider>
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
