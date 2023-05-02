// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../system/AuthProvider/AuthProvider";
import ActiveLink from "./ActiveLink";
import LazyLoad from "react-lazy-load";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle logout
  const handleLogout = () => {
    logOutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar bg-base-100 border-b py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
            {user ? (
              <>
                <li>
                  <p onClick={handleLogout}>Logout</p>
                </li>
                <LazyLoad>
                  <img
                    className="w-10 h-10 cursor-pointer rounded-full border"
                    src={user?.photoURL}
                    alt={user?.displayName}
                    title={user?.displayName || "Unknown"}
                  />
                </LazyLoad>
              </>
            ) : (
              <>
                <li>
                  <ActiveLink to="/login">Login</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/register">Register</ActiveLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link
          className="text-3xl font-bold text-red-500 hover:text-red-600"
          to="/"
        >
          Recipe House
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu items-center menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
          {user ? (
            <>
              <li>
                <p onClick={handleLogout}>Logout</p>
              </li>
              <LazyLoad>
                <img
                  className="w-10 h-10 cursor-pointer rounded-full border"
                  src={user?.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName || "Unknown"}
                />
              </LazyLoad>
            </>
          ) : (
            <>
              <li>
                <ActiveLink to="/login">Login</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/register">Register</ActiveLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
