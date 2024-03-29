import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

const NewsCard = ({ item, index }) => {
  return (
    <div className="cursor-pointer md:max-w-[60%] max-w-[80%]  bg-blue-200 rounded-lg grid grid-cols-10 gap-1 px-[2%] pb-[6%] pt-[2%] mr-2 flex-none whitespace-no-wrap">
      <section className="col-span-1  flex justify-end">
        <section
          className={`${
            index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
          } rounded-full md:h-10 md:w-10 h-8 w-8 flex items-center justify-center`}
        >
          {index % 2 === 0 ? (
            <FaRegNewspaper style={{ color: "white" }} size={25} />
          ) : (
            <HiOutlineArrowTrendingUp style={{ color: "white" }} size={25} />
          )}
        </section>{" "}
      </section>
      <section className="col-span-9">
        <section className="mb-2">
          <h1 className="text-xs">{item.heading}</h1>
        </section>

        <section>
          <p className="text-gray-600 text-xs">{item.body}</p>
        </section>
      </section>
    </div>
  );
};

export default NewsCard;
