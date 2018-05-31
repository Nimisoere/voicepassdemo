import React from "react";
import { createProfileService } from "../../_services";
import { Route, Redirect } from "react-router-dom";
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      createProfileService.hasRefId() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/", state: { from: props.location } }}
        />
      )
    }
  />
);
