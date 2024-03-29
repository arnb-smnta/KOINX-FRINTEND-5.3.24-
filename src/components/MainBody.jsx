import React from "react";
import TopContainer from "./TopContainer";
import TrendingCoins from "./TrendingCoins";
import { useParams } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import SecondaryContainer from "./SecondaryContainer";
import YouMayAlsoLike from "./YouMayAlsoLike";

const MainBody = () => {
  const { coinid } = useParams();
  return (
    <div>
      <div className="md:grid md:grid-cols-12">
        <div className="md:col-span-8">
          <section className="px-[5%] mt-4 flex">
            <h1 className="text-gray-400">Cryptocurrencies</h1>
            <section className="pt-1 ml-1">
              <MdOutlineKeyboardDoubleArrowRight className="text-gray-600" />
            </section>
            <h1 className="ml-1">{coinid}</h1>
          </section>
          <div>
            <div className=" px-[5%] gap-8 ">
              <TopContainer />
            </div>
            <SecondaryContainer />
          </div>
        </div>
        <div className="md:col-span-4 sm:block hidden">
          <TrendingCoins />
        </div>
      </div>
      <div className="w-full bg-white px-[5%]">
        <YouMayAlsoLike />
      </div>
      <div className="sm:hidden block">
        <TrendingCoins />
      </div>
    </div>
  );
};

export default MainBody;
