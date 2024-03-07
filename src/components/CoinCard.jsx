import React from "react";

const CoinCard = ({ data }) => {
  return (
    <div className="md:min-w-[15%] min-w-[35%] border border-gray-300 grid grid-row-5 p-2 ml-2 cursor-pointer ">
      <section className="row-span-1 flex">
        <img src={`${data.thumb}`} alt="" className="h-6" />
        <h1>{data.name}</h1>
        <section
          className={`${
            data.data.price_change_percentage_24h.usd < 0
              ? "bg-red-100 text-red-400"
              : "bg-green-100 text-green-400"
          } h-4 mt-1 w-[30%] text-center text-xs rounded-sm`}
        >
          <h1 className="">
            {data.data.price_change_percentage_24h.usd.toFixed(2)}%
          </h1>
        </section>
      </section>
      <section className="row-span-1">
        <h1>{data.data.price}</h1>
      </section>
      <section className="row-span-3">
        <img src={`${data.data.sparkline}`} alt="" />
      </section>
    </div>
  );
};

export default CoinCard;
