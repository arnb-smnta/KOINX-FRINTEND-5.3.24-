import React from "react";
import { BiDollar } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Performance = () => {
  const coindata = useSelector((appstore) => appstore.data.coinSpecifics);
  const { coinid } = useParams();
  console.log(coindata);

  return coindata[coinid] ? (
    <div className="bg-white px-[5%] py-[2%]  rounded-xl" id="Overview">
      <section className="performance-section">
        <section>
          <h1 className="text-2xl font-serif font-bold">Performance</h1>
        </section>
        <section className="grid grid-cols-12 gap-4 my-[4%] text-gray-600 font-sans ">
          <section className="col-span-2 text-left grid grid-rows-2 gap-2">
            <h1 className="row-span-1">Today's Low</h1>
            <p className="row-span-1">
              {coindata[coinid].market_data.low_24h.usd}
            </p>
          </section>

          <section className="col-span-8">
            <img src="/src/assets/first-graph.png" alt="" />
          </section>

          <section className="col-span-2 text-right grid grid-rows-2 gap-2">
            <h1 className="row-span-1">Today's High</h1>
            <p className="row-span-1">
              {coindata[coinid].market_data.high_24h.usd}
            </p>
          </section>
        </section>
        <section className="grid grid-cols-12 gap-4 my-[4%] text-gray-600 font-sans">
          <section className="col-span-2 text-left grid grid-rows-2 gap-2">
            <h1 className="row-span-1">52W Low</h1>
            <p className="row-span-1">{coindata[coinid].market_data.atl.usd}</p>
          </section>

          <section className="col-span-8">
            <img src="/src/assets/second-graph.png" alt="" />
          </section>

          <section className="col-span-2 text-right grid grid-rows-2 gap-2">
            <h1 className="row-span-1">52W High</h1>
            <p className="row-span-1">{coindata[coinid].market_data.ath.usd}</p>
          </section>
        </section>
      </section>

      <section className="Fundamentals-section " id="Fundamentals">
        <section>
          <h1 className="text-xl font-serif">Fundamentals I</h1>
        </section>

        <section className="md:grid md:grid-cols-12 md:gap-16 grid-rows-2">
          <section className="col-span-6 row-span-1 grid grid-row-5">
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-left text-gray-500">
                Bitcoin Price
              </h1>
              <section className="col-span-1 text-right flex justify-end">
                <section className="pt-1">
                  {" "}
                  <BiDollar className="" />
                </section>
                <p>
                  {coindata[
                    coinid
                  ].market_data.current_price.usd.toLocaleString()}
                </p>
              </section>
            </section>
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-gray-500">24h Low/ 24h High</h1>
              <section className="col-span-1  flex justify-end ">
                <section className="flex justify-end">
                  <section className="pt-1">
                    <BiDollar />
                  </section>
                  <p>
                    {coindata[coinid].market_data.low_24h.usd.toLocaleString()}
                  </p>
                </section>{" "}
                <section>
                  <p>/</p>
                </section>
                <section className="flex justify-end">
                  <section className="pt-1">
                    <BiDollar />
                  </section>
                  <p>
                    {coindata[coinid].market_data.high_24h.usd.toLocaleString()}
                  </p>{" "}
                </section>
              </section>
            </section>
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-gray-500 ">7d Low/ 7d High</h1>
              <section className="col-span-1  flex justify-end ">
                <section className="flex justify-end">
                  <section className="pt-1">
                    <BiDollar />
                  </section>
                  <p>
                    {coindata[coinid].market_data.low_24h.usd.toLocaleString()}
                  </p>
                </section>{" "}
                <section>
                  <p>/</p>
                </section>
                <section className="flex justify-end">
                  <section className="pt-1">
                    <BiDollar />
                  </section>
                  <p>{coindata[coinid].market_data.high_24h.usd}</p>{" "}
                </section>
              </section>
            </section>
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-gray-500">Trading Volume</h1>

              <section className="col-span-1 flex justify-end">
                <section className="pt-1">
                  <BiDollar />
                </section>
                <p>
                  {coindata[
                    coinid
                  ].market_data.total_volume.usd.toLocaleString()}
                </p>
              </section>
            </section>
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-gray-500">Market Cap Rank</h1>
              <p className="col-span-1 text-right">
                #{coindata[coinid].market_data.market_cap_rank}
              </p>
            </section>
          </section>
          <section className="col-span-6 row-span-1 grid grid-rows-5 ">
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-gray-500">Market Cap</h1>
              <section className="col-span-1 flex justify-end">
                <section className="pt-1">
                  <BiDollar />
                </section>
                <p>
                  {coindata[coinid].market_data.market_cap.usd.toLocaleString()}
                </p>
              </section>
            </section>
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-gray-500">Market Cap Dominance</h1>
              <p className="col-span-1 text-right">38%</p>
            </section>
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-gray-500">Volume/Market Cap</h1>
              <p className="col-span-1 text-right">
                {(
                  coindata[coinid].market_data.total_volume.usd /
                  coindata[coinid].market_data.market_cap.usd
                ).toFixed(3)}
              </p>
            </section>
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-gray-500">All-Time High</h1>
              <section className="col-span-1">
                <section className="flex justify-end">
                  <section className="col-span-1 text-right mr-2 flex justify-end">
                    <section className="pt-1">
                      <BiDollar />
                    </section>
                    <p>{coindata[coinid].market_data.ath.usd}</p>
                  </section>
                  <p
                    className={`${
                      coindata[coinid].market_data.ath_change_percentage.usd < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {coindata[
                      coinid
                    ].market_data.ath_change_percentage.usd.toFixed(1)}
                    %
                  </p>
                </section>
                <section className="whitespace-no-wrap">
                  <p className="truncate text-xs text-right">
                    {coindata[coinid].market_data.ath_date.usd}
                  </p>
                </section>
              </section>
            </section>
            <section className="grid grid-cols-2 border-b border-gray-200 pt-3">
              <h1 className="col-span-1 text-gray-500">All-Time Low</h1>
              <section className="col-span-1">
                <section className="flex justify-end">
                  <section className="col-span-1 text-right mr-2 flex justify-end">
                    <section className="pt-1">
                      <BiDollar />
                    </section>
                    <p>{coindata[coinid].market_data.atl.usd}</p>
                  </section>
                  <p
                    className={`${
                      coindata[coinid].market_data.atl_change_percentage < 0
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {coindata[
                      coinid
                    ].market_data.atl_change_percentage.usd.toFixed(1)}
                    %
                  </p>
                </section>
                <section className="whitespace-no-wrap">
                  <p className="truncate text-xs text-right">
                    {coindata[coinid].market_data.atl_date.usd}
                  </p>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  ) : null;
};

export default Performance;
