// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <h2>this is default layout navbar</h2>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
