// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value || "https://via.placeholder.com/150";

    if (password.length < 6 && email.trim() && name.trim()) {
      setError("Password must be 6 characters");
      return;
    }

    // create new user with email and password
    createUser(email, password)
      .then(() => {
        // update user profile
        updateUserProfile(name, photoURL)
          .then()
          .catch((e) => setError(e.message));

        // navigate home page
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
        onSubmit={handleRegister}
        className="flex flex-col space-y-4 w-[90%] max-w-[550px] border border-gray-200 p-7 rounded-lg"
      >
        <h3 className="text-2xl font-bold text-center border-b pb-2">
          App Register
        </h3>
        <label className="text-lg font-medium">Name:</label>
        <input
          type="text"
          name="name"
          className="p-2 border rounded-md"
          required
        />
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
        <label className="text-lg font-medium">Photo URL:</label>
        <input
          type="url"
          placeholder="No photo url skip it"
          name="photoURL"
          className="p-2 border rounded-md"
        />

        <input value="Register" type="submit" className="btn btn-info" />

        {/* show  error message */}
        <p className="mt-2 text-center text-red-400">{error}</p>

        {/* user redirect login page */}
        <div>
          <p className="mt-2 border border-gray-300 p-2 rounded text-center">
            Already Register{" "}
            <Link to="/login" className="text-blue-500">
              Go to login
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
