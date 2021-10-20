import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, token, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (!token) {
            // not logged in so redirect to login page with the return url
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }

          // logged in so return component
          return <Component {...props} />;
        }}
      />
    </div>
  );
}

export { PrivateRoute };
