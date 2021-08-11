import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AuthUserContext from "../context/AuthUserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoading, authUser } = useContext(AuthUserContext);

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
