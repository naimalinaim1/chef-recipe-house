// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Chef from "./Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-[#121212] text-center leading-[60px] text-5xl font-bold mb-12">
        A chef is a professional <br /> cook and tradesman.
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chefs;
