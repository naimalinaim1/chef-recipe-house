// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const [teamMember, setTeamMember] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/team")
      .then((res) => res.json())
      .then((data) => setTeamMember(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="my-20 grid grid-cols-[450px_1fr] gap-60">
      <div>
        <h2 className="text-[#121212] leading-[60px] text-5xl font-bold mb-4">
          The Simply Recipes Team
        </h2>
        <p className="text-lg mb-4">
          Simply Recipes is a trusted resource for home cooks with more than
          3,000 tested recipes, guides, and meal plans, drawing over 15 million
          readers each month from around the world. Were supported by a group of
          recipe developers, food writers, recipe and product testers,
          photographers, and other creative professionals.
        </p>
        <button className="btn btn-error">Read More</button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {teamMember.map((member) => (
          <TeamMember key={member?.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
