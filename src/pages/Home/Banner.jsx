// eslint-disable-next-line no-unused-vars
import React from "react";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 items-center">
      <div>
        <h2 className="text-[#121212] leading-[60px] text-5xl font-bold md:pr-10 lg:pr-32">
          Order Something Healthy And Delicious
        </h2>
        <p className="text-gray-500 text-lg my-5">
          Order food online from Recipe House. Choose from a wide range of Lorem
          consectetur adipisicing elit. Accusantium, adipisci!
        </p>
        <button className="btn btn-error">Get Started</button>
      </div>
      <img
        src="https://img.freepik.com/free-photo/rice-with-vegetables-shrimp-sauce-cooked-saj_140725-6790.jpg"
        alt=""
        className="w-full h-[450px] rounded-xl"
      />
    </div>
  );
};

export default Banner;
