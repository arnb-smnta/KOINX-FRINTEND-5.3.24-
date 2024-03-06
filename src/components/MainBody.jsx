import React from "react";
import TopContainer from "./TopContainer";
import TrendingCoins from "./TrendingCoins";
import { useParams } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import SecondaryContainer from "./SecondaryContainer";

const MainBody = () => {
  const { coinid } = useParams();
  return (
    <div className="">
      <section className="px-[5%] mt-4 flex">
        <h1 className="text-gray-400">Cryptocurrencies</h1>
        <section className="pt-1 ml-1">
          <MdOutlineKeyboardDoubleArrowRight className="text-gray-600" />
        </section>
        <h1 className="ml-1">{coinid}</h1>
      </section>
      <div>
        <div className="md:grid md:grid-cols-12 px-[5%] gap-8 ">
          <TopContainer />
          <TrendingCoins />
        </div>
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default MainBody;
