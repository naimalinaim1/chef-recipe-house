// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const { name, experience, num_recipes, picture } = useLoaderData();
  return (
    <div className="hero min-h-[50vh]">
      <div className="hero-content">
        <div className="flex gap-6">
          <img className="w-full h-[350px] rounded-lg" src={picture} alt="" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="pt-6 text-lg text-gray-500">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="border border-red-200 p-2 rounded space-y-2 text-lg my-4 text-gray-500">
              <p>Like: 10</p>
              <p>Number of Recipes: {num_recipes}</p>
              <p>Year of experience: {experience}</p>
            </div>
            <button className="btn btn-error">Hire Chef</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
