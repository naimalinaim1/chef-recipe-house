// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "./Banner";
import Chefs from "./Chefs";
import NewestRecipes from "./NewestRecipes";
import Team from "./Team";

const Home = () => {
  return (
    <div className="mt-16">
      <Banner />
      <Chefs />
      <NewestRecipes />
      <Team />
    </div>
  );
};

export default Home;
