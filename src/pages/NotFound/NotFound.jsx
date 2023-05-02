// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <img
        className="h-[450px]"
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
        alt=""
      />
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-lg text-gray-500">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-lg text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn btn-error">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
