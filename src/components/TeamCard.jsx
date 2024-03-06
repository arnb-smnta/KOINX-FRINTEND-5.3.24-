import React from "react";

const TeamCard = ({ item }) => {
  return (
    <div className="bg-blue-100 md:grid md:grid-cols-12 mb-4 rounded-xl grid grid-rows-12 px-[3%] md:grid-rows-1 md:pt-[3%] md:pb-[2%]">
      <section className="md:col-span-2 row-span-4 mr-4">
        <section className="mb-2">
          <img src={item.pic} alt="bg-image" className="rounded-lg h-25" />
        </section>
        <section className="mb-1">
          <h1 className="text-xs font-bold">{item.name}</h1>
        </section>
        <section>
          <h1 className="text-xs">{item.Designation}</h1>
        </section>
      </section>
      <section className="md:col-span-10 row-span-8 text-gray-600">
        <p>{item.description}</p>
      </section>
    </div>
  );
};

export default TeamCard;
