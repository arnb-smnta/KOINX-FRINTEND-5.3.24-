import React from "react";
import { team } from "../utils/dummydata";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div
      className="col-span-8 bg-white mb-[3%] px-[5%] rounded-xl pt-[2%] pb-[5%]"
      id="Teams"
    >
      <section>
        <h1 className="text-xl font-bold">Team</h1>
      </section>
      <section className="my-[2%]">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          tenetur enim, modi eum molestias dignissimos tempora iure quas ad
          repellendus quos inventore sapiente? Earum minima accusantium itaque
          a, quasi nulla.
        </p>
      </section>
      <section>
        {team.map((item, index) => (
          <TeamCard key={index} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Team;
