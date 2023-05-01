// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    }

    // login a user with email and password
    loginUser(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        setError(e.message);
        console.log(e);
      });
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-4 w-[90%] max-w-[550px] border border-gray-200 p-7 rounded-lg"
      >
        <h3 className="text-2xl font-bold text-center border-b pb-2">
          App Login
        </h3>
        <label className="text-lg font-medium">Email:</label>
        <input
          type="email"
          name="email"
          className="p-2 border rounded-md"
          required
        />
        <label className="text-lg font-medium">Password:</label>
        <input
          type="password"
          name="password"
          className="p-2 border rounded-md"
          required
        />
        <input value="Login" type="submit" className="btn btn-info" />

        {/* show  error message */}
        <p className="mt-2 text-center text-red-400">{error}</p>

        {/* user redirect Register page */}
        <div>
          <p className="mt-2 border border-gray-300 p-2 rounded text-center">
            New user{" "}
            <Link to="/register" className="text-blue-500">
              Go to Register
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
