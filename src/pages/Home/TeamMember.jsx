// eslint-disable-next-line no-unused-vars
import React from "react";
import LazyLoad from "react-lazy-load";

// eslint-disable-next-line react/prop-types
const TeamMember = ({ member }) => {
  // eslint-disable-next-line react/prop-types
  const { name, picture } = member;
  return (
    <div>
      <LazyLoad>
        <img src={picture} className="w-[150px] h-[150px] rounded-3xl" alt="" />
      </LazyLoad>
      <h2 className="text-xl font-bold">{name}</h2>
    </div>
  );
};

export default TeamMember;
