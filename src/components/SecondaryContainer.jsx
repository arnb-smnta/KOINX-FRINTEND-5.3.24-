import React, { useState } from "react";
import { secondarymenulist } from "../utils/api";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import AboutCoin from "./AboutCoin";
import Tokenomics from "./Tokenomics";
import Team from "./Team";

import { Link as ScrollLink } from "react-scroll";

const SecondaryContainer = () => {
  const [click, setclick] = useState(secondarymenulist[0]);
  const clicked = (item) => {
    console.log(item);
    setclick(item);
  };
  return (
    <div>
      <div className="px-[5%] md:grid md:grid-cols-12 mb-4">
        <div className="col-span-8  w-[100%]">
          <div className="flex justify-between pr-[10%] ">
            {secondarymenulist.map((item) => (
              <ScrollLink
                to={`${item}`}
                key={item}
                smooth={true}
                duration={500}
              >
                <h1
                  className={`hover:cursor-pointer ${
                    click === item
                      ? "text-blue-600 border border-b-blue-600 border-b-4 "
                      : "text-gray-700"
                  }`}
                  onClick={() => clicked(item)}
                >
                  {item}
                </h1>
              </ScrollLink>
            ))}
          </div>

          <Performance />
        </div>
      </div>

      <div className="md:grid md:grid-cols-12 px-[5%] mb-4">
        <Sentiment />
      </div>

      <div className="md:grid md:grid-cols-12 px-[5%] ">
        <AboutCoin />
      </div>
      <div className="md:grid md:grid-cols-12 px-[5%] ">
        <Tokenomics />
      </div>
      <div className="md:grid md:grid-cols-12 px-[5%] ">
        <Team />
      </div>
    </div>
  );
};

export default SecondaryContainer;
