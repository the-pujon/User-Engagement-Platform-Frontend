import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./../hooks/useUser";
//import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { loggedUser } = useUser();
  //console.log(loggedUser?.role)

  if (loggedUser) {
    return (
      <div className="h-screen flex items-center justify-center  backdrop-blur-lg">
       Loading...
      </div>
    );
  }

  if (loggedUser) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;
