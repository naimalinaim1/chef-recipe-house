// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const DefaultLayout = () => {
  return (
    <main className="w-[96%] max-w-[1200px] mx-auto">
      <NavBar />
      <div className="min-h-[96vh]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default DefaultLayout;
