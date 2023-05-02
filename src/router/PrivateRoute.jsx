// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../system/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-error">
        <p>Loading....</p>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
