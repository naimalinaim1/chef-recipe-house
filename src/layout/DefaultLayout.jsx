// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";

const DefaultLayout = () => {
  return (
    <main className="w-[96%] max-w-[1200px] mx-auto">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
