import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    function addscroll() {
      let scrollcontainer = document.querySelector(".scroll-container-menu");
      if (scrollcontainer != null) {
        scrollcontainer.style.overflow = "hidden";
        scrollcontainer.addEventListener("wheel", (e) => {
          e.preventDefault();
          scrollcontainer.scrollLeft += e.deltaY;
        });
        scrollcontainer.addEventListener("scroll", () => {
          scrollcontainer.style.scrollBehavior = "smooth";
        });
      }
    }
  });

  return (
    <div>
      <div className="px-[5%] mb-4">
        <div className="col-span-8  w-[100%]">
          <div className="flex pr-[10%] menu-items  overflow-x-scroll md:justify-between scroll-container-menu">
            {secondarymenulist.map((item) => (
              <ScrollLink
                to={`${item}`}
                key={item}
                smooth={true}
                duration={500}
              >
                <div className="min-w-[100px] md:ml-0 ml-3">
                  <h1
                    className={`hover:cursor-pointer w-full  ${
                      click === item
                        ? "text-blue-600 border border-b-blue-600 border-b-4 "
                        : "text-gray-700"
                    }`}
                    onClick={() => clicked(item)}
                  >
                    {item}
                  </h1>
                </div>
              </ScrollLink>
            ))}
          </div>
          <div>
            <Performance />
          </div>
        </div>
      </div>

      <div className="px-[5%] mb-4">
        <Sentiment />
      </div>

      <div className="px-[5%] ">
        <AboutCoin />
      </div>
      <div className="px-[5%] ">
        <Tokenomics />
      </div>
      <div className="px-[5%] ">
        <Team />
      </div>
    </div>
  );
};

export default SecondaryContainer;
