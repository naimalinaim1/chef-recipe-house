// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Chef = ({ chef }) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { id, picture, name, experience, num_recipes } = chef;
  return (
    <>
      <div className="card bg-base-100 border">
        <figure className="px-10 pt-10">
          <img
            src={picture}
            className="rounded-xl w-full h-[250px]"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p>Experience: {experience}</p>
            <p>Number of Recipes: {num_recipes}</p>
            <p>Like: 10</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/chef/${id}`}>
              <button className="btn btn-error">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
