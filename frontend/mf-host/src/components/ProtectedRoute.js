import React from 'react';
import { Route, Redirect } from "react-router-dom";
import {useAuth} from "shared/AuthProvider";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  const ctx = useAuth();
  return (
    <Route exact>
      {
        () => ctx.isLoggedIn ? <Component {...props} /> : <Redirect to="./signin" />
      }
    </Route>
)}

export default ProtectedRoute;