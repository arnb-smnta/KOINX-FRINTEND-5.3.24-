import axios from "axios";
import React, { useEffect, useState } from "react";
import { trendingapi } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import ListTrendingCoins from "./ListTrendingCoins";

const TrendingCoins = () => {
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

  return (
    <div className="md:col-span-4  md:mt-14 grid grid-rows-12 md:gap-4 mx-[5%] gap-4">
      <div className="row-span-8 bg-blue-600 text-white rounded-lg">
        Advertisment space
      </div>

      <div className="row-span-4 bg-white rounded-lg px-[5%] py-[5%]">
        <section>
          <h1 className="text-2xl font-medium">Trending Coins (24H)</h1>
        </section>

        <section>{data ? <ListTrendingCoins data={data} /> : null}</section>
      </div>
    </div>
  );
};

export default TrendingCoins;
