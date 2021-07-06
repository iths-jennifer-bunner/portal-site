import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../components/navbarComponents/Navbar";
import { getToken } from "./Common";

function PrivateRoute({ component: Component, ...rest }) {
  console.log(getToken());
  return (
    <>
      <Navbar />
      <Route
        {...rest}
        render={(props) =>
          getToken() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
}

export default PrivateRoute;
