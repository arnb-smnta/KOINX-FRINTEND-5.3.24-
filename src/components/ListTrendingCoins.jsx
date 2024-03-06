import React from "react";
import { MdArrowDropUp } from "react-icons/md";
const ListTrendingCoins = ({ data }) => {
  const filtereddata = data.coins.slice(0, 3);

  return filtereddata ? (
    <div>
      {filtereddata.map((item) => (
        <section
          className="grid grid-cols-12 m-4 gap-2"
          key={item.item.coin_id}
        >
          <section className="flex  col-span-9">
            <img
              src={item.item.small}
              alt="coin image"
              className="h-[80%] rounded-lg mr-1"
            />
            <h1 className="pt-1">{item.item.name}</h1>
            <h2 className="pt-1 ml-1">({item.item.symbol})</h2>
          </section>
          <section className="bg-green-100 text-green-500 col-span-3 flex items-center justify-center h-6 rounded-sm p-2">
            <section className="text-2xl">
              <MdArrowDropUp />
            </section>
            <p className="ml-1">
              {item.item.data.price_change_percentage_24h.aed.toFixed(2)}%
            </p>
          </section>
        </section>
      ))}
    </div>
  ) : null;
};

export default ListTrendingCoins;
