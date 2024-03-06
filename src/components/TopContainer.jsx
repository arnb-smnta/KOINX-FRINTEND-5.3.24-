import axios from "axios";
import React, { useEffect } from "react";
import { coinApi, priceApi } from "../utils/api";
import { redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCoinData, addCoinPriceData } from "../reduxStore/dataSlice";
import appstore from "../reduxStore/appstore";
import TradingViewWidget from "./TradingViewWidget";
import { FaRupeeSign } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { MdArrowDropUp } from "react-icons/md";
const TopContainer = () => {
  const { coinid } = useParams();

  const dispatch = useDispatch();
  const pricedata = useSelector((appstore) => appstore.data.coinPriceData);
  const coindata = useSelector((appstore) => appstore.data.coinSpecifics);

  useEffect(() => {
    function getcoinPricedata() {
      axios
        .get(
          `${priceApi}?ids=${coinid}&vs_currencies=inr%2Cusd&include_24hr_change=true`
        )
        .then((result) => {
          const key = coinid;
          const data = result.data;

          dispatch(addCoinPriceData({ key, data: data[coinid] }));
        })
        .catch((err) => {
          redirect();
        });
    }

    function getspecifiedcoin() {
      axios
        .get(`${coinApi}${coinid}`)
        .then((result) => {
          const key = coinid;
          const data = result.data;

          dispatch(addCoinData({ key, data }));
        })
        .catch((err) => {
          redirect();
        });
    }

    if (!pricedata[coinid]) {
      getcoinPricedata();
    }
    if (!coindata[coinid]) {
      getspecifiedcoin();
    }
  }, []);

  return coindata[coinid] ? (
    pricedata[coinid] ? (
      <div className="col-span-8 min-h-screen px-[2%] bg-white rounded-lg mt-4">
        <div className="mb-8">
          <section className="flex pt-8 mb-8">
            <img
              src={`${coindata[coinid].image.small}`}
              alt="coin logo"
              className="h-10"
            />
            <h1 className="pt-2 ml-2 font-bold text-xl">
              {coindata[coinid].id}
            </h1>
            <h1 className="pt-2 ml-2 text-gray-600">
              {coindata[coinid].symbol.toUpperCase()}
            </h1>

            <p className="pt-2 ml-8 bg-gray-500 rounded-lg text-white px-2">
              {" "}
              Rank #{coindata[coinid].market_cap_rank}
            </p>
          </section>

          <section>
            <section className="flex">
              <section className="pt-1">
                {" "}
                <BiDollar className="text-2xl" />
              </section>
              <h1 className="text-3xl font-sans">{pricedata[coinid].usd}</h1>
              <section className="flex ml-4 bg-green-200 text-green-500 px-2 rounded-sm h-6  mt-2">
                <section className="text-xl pt-1 ">
                  <MdArrowDropUp />
                </section>
                <h2>{pricedata[coinid].usd_24h_change.toFixed(2)}%</h2>
              </section>
              <h2 className="text-gray-400 mt-2 text-sm ml-4">(24 H)</h2>
            </section>
            <section className="flex">
              <section className="pt-1">
                {" "}
                <FaRupeeSign />
              </section>
              <h1 className="text-xl "> {pricedata[coinid].inr}</h1>
            </section>
          </section>
        </div>

        {/* <TradingViewWidget />*/}
      </div>
    ) : null
  ) : null;
};

export default TopContainer;
