import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AuthUserContext from "../context/AuthUserContext";
import Redirecting from "../pages/Redirecting";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoading, authUser } = useContext(AuthUserContext);

  if (isLoading) {
    return <Redirecting />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading || authUser ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
