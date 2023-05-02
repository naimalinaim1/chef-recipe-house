// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import LazyLoad from "react-lazy-load";
// eslint-disable-next-line react/prop-types
const ChefRecipes = ({ recipe, userId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { id, name, description, image, rating } = recipe;

  const favoriteRecipe = () => {
    setIsFavorite(true);
    toast.success("Save Your Favorite Recipe.");
  };

  return (
    <>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10">
          <LazyLoad>
            <img
              src={image}
              className="rounded-xl w-full h-[250px]"
              alt="Shoes"
            />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="mt-3 text-gray-500 flex justify-between items-center">
            <p>Rating: {rating}</p>
            <button disabled={isFavorite && true} onClick={favoriteRecipe}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill={isFavorite ? "#ddddcc" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Link
          to={`/recipe/${userId}_${id}`}
          className="p-3 cursor-pointer text-right text-error"
        >
          Read More
        </Link>
      </div>
    </>
  );
};

export default ChefRecipes;
