import React from "react";
import { keyEventsData } from "../utils/dummydata";
import NewsCard from "./NewsCard";

const Sentiment = () => {
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

          <div className="flex overflow-x-auto">
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
