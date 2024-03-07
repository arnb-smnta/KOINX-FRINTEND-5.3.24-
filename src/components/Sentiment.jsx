import React, { useEffect, useState } from "react";
import { keyEventsData } from "../utils/dummydata";
import NewsCard from "./NewsCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Sentiment = () => {
  const [domcontentloaded, setdomcontentloaded] = useState(false);

  useEffect(() => {
    function addScroll() {
      let scrollcontainer = document.querySelector(".scroll-container");
      let backbtn = document.querySelector(".arrow-left");
      let nextbtn = document.querySelector(".arrow-right");
      if (scrollcontainer != null) {
        scrollcontainer.style.overflow = "hidden";
        scrollcontainer.addEventListener("wheel", (e) => {
          e.preventDefault();
          scrollcontainer.scrollLeft += e.deltaY;
        });

        nextbtn.addEventListener("click", () => {
          scrollcontainer.scrollLeft += 350;
        });

        backbtn.addEventListener("click", () => {
          scrollcontainer.scrollLeft -= 350;
        });
        scrollcontainer.addEventListener("scroll", () => {
          scrollcontainer.style.scrollBehavior = "smooth";
        });
      }
    }
    addScroll();

    setdomcontentloaded(document.readyState === "complete");
  }, [domcontentloaded]);
  return (
    <div
      className="Sentiment-section col-span-8 bg-white px-[5%] py-[2%] h-full mb-4 rounded-xl"
      id="Sentiments"
    >
      <section>
        <h1 className="text-2xl font-sans">Sentiment</h1>
      </section>
      <div className="grid grid-rows-2">
        <section className="key-events-section row-span-1 mt-2">
          <section>
            <h1>Key Events</h1>
          </section>

          <div className="absolute flex justify-between item-center md:w-[53%] w-[80%] mt-[2%]">
            <section className="bg-white h-12 w-12 rounded-full shadow-lg px-4  arrow-left flex justify-between items-center">
              <IoIosArrowBack />
            </section>
            <section className="bg-white h-12 w-12 rounded-full shadow-lg px-4  arrow-right flex justify-between items-center">
              <IoIosArrowForward />
            </section>
          </div>

          <div className="flex overflow-x-auto scroll-container">
            {keyEventsData.map((item, index) => (
              <NewsCard key={index} item={item} index={index} />
            ))}
          </div>
        </section>
        <section className="analysis-estmates-section row-span-1">
          <section>
            <h1>Analysis Estimates</h1>
          </section>
          <section className="h-[100%] w-[100%]">
            <img
              src="/src/assets/buy _sell.png"
              className="h-[100%] w-[100%]"
              alt=""
            />
          </section>
        </section>
      </div>
    </div>
  );
};

export default Sentiment;
