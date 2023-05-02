// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const { name, image, description, ingredients, directions } = useLoaderData();
  const goBack = () => {
    history.back();
  };
  return (
    <>
      <button onClick={goBack} className="mt-6 text-error font-bold">
        Go Back
      </button>
      <div className="mt-20 mb-32">
        <img src={image} alt="" className="h-[300px] mx-auto rounded-xl" />
        <div>
          <h2 className="text-[#121212] leading-[60px] text-5xl font-bold pr-32">
            {name}
          </h2>
          <p className="text-gray-500 text-lg">{description}</p>
          {/* ingredient */}
          <div className="text-gray-500 my-6">
            <p className="text-xl font-bold border-b mb-2">Ingredients</p>
            <ul className="pl-3 space-y-1">
              {ingredients?.map((ind, idx) => (
                <li key={idx}>{ind}</li>
              ))}
            </ul>
          </div>
          {/* cooking method */}
          <div className="text-gray-500">
            <p className="text-xl font-bold border-b mb-2">Cooking Method</p>
            <ul className="pl-3 space-y-1">
              {directions?.map((dir, idx) => (
                <li key={idx}>{dir}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
