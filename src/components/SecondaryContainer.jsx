import React, { useState } from "react";
import { secondarymenulist } from "../utils/api";
import Performance from "./Performance";

const SecondaryContainer = () => {
  const [click, setclick] = useState(secondarymenulist[0]);
  const clicked = (item) => {
    console.log(item);
    setclick(item);
  };
  return (
    <div className="px-[5%] md:grid md:grid-cols-12 mb-4">
      <div className="col-span-8  w-[100]">
        <div className="flex justify-between pr-[10%] ">
          {secondarymenulist.map((item) => (
            <h1
              key={item}
              className={`hover:cursor-pointer ${
                click === item
                  ? "text-blue-600 border border-b-blue-600 border-b-4 "
                  : "text-gray-700"
              }`}
              onClick={() => clicked(item)}
            >
              {item}
            </h1>
          ))}
        </div>

        <Performance />
      </div>
    </div>
  );
};

export default SecondaryContainer;
