// eslint-disable-next-line no-unused-vars
import React from "react";
import LazyLoad from "react-lazy-load";

const NewestRecipes = () => {
  return (
    <div className="mt-40 grid md:grid-cols-2 gap-6 items-center">
      <LazyLoad>
        <img
          src="https://img.freepik.com/free-vector/business-travelers-holding-briefcase_1262-21211.jpg"
          alt=""
          className="w-full max-h-[450px] rounded-xl"
        />
      </LazyLoad>
      <div>
        <h2 className="text-[#121212] leading-[60px] text-5xl font-bold">
          Check out my newest vegan recipes books
        </h2>
        <p className="text-gray-500 text-lg my-5">
          Order food online from Recipe House. Choose from a wide range of Lorem
          consectetur adipisicing elit. Accusantium, adipisci!
        </p>
        <button className="btn btn-error">Book Now</button>
      </div>
    </div>
  );
};

export default NewestRecipes;
