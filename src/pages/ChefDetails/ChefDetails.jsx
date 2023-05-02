// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ChefRecipes from "./ChefRecipes";
import LazyLoad from "react-lazy-load";

const ChefDetails = () => {
  const { id, name, experience, num_recipes, picture, recipes } =
    useLoaderData();
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <div className="w-full h-screen flex justify-center items-center text-error">
          <p>Loading....</p>
        </div>
      ) : (
        <>
          <div className="hero min-h-[50vh]">
            <div className="hero-content">
              <div className="md:flex gap-6">
                <LazyLoad>
                  <img
                    className="w-full h-[350px] rounded-lg"
                    src={picture}
                    alt=""
                  />
                </LazyLoad>
                <div>
                  <h1 className="text-5xl font-bold">{name}</h1>
                  <p className="pt-6 text-lg text-gray-500">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
            {recipes?.map((recipe) => (
              <ChefRecipes key={recipe.id} userId={id} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ChefDetails;
