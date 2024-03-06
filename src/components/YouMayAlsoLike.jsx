import axios from "axios";
import React, { useEffect, useState } from "react";
import { trendingapi } from "../utils/api";
import CoinCard from "./CoinCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const YouMayAlsoLike = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    function getTrendingCoins() {
      axios
        .get(trendingapi)
        .then((result) => {
          console.log(result.data);
          setdata(result.data);
        })
        .catch((err) => {});
    }

    getTrendingCoins();
  }, []);
  console.log(data);
  return data ? (
    <div className="pb-[5%]" id="youmayalsolike">
      <section className="youmaylike-section pt-[5%]">
        <section className="text-xl  font-medium">
          <h1>You May Also Like</h1>
        </section>
        <section className="absolute flex justify-between items-center mt-[4%] w-[90%]">
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <IoIosArrowBack />
          </section>
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <IoIosArrowForward />
          </section>
        </section>
        <section className="flex overflow-x-scroll scrollbar-hide pt-[1%]">
          {data.coins.map((item) => (
            <CoinCard key={item.item.coin_id} data={item.item} />
          ))}
        </section>
        <section className="Trending-coins-section pt-[3%]">
          <section className="text-xl  font-medium">
            <h1>Trending coins</h1>
          </section>
          <section className="absolute flex justify-between items-center mt-[4%] w-[90%]">
            <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
              <IoIosArrowBack />
            </section>
            <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
              <IoIosArrowForward />
            </section>
          </section>
          <section className="flex overflow-x-scroll scrollbar-hide pt-[1%]">
            {data.coins.map((item) => (
              <CoinCard key={item.item.coin_id} data={item.item} />
            ))}
          </section>
        </section>
      </section>
    </div>
  ) : null;
};

export default YouMayAlsoLike;
