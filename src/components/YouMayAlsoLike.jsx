import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { trendingapi } from "../utils/api";
import CoinCard from "./CoinCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
        .catch((err) => {
          console.log(err);
        });
    }

    getTrendingCoins();
  }, []); // Separate useEffect for data fetching

  useEffect(() => {
    function addScroll() {
      const scrollContainer1 = document.querySelector(
        ".scroll-container-footer1"
      );
      const backBtns1 = document.querySelector(".left-arrow-footer1");
      const nextBtns1 = document.querySelector(".right-arrow-footer1");

      const scrollContainer2 = document.querySelector(
        ".scroll-container-footer2"
      );
      const backBtns2 = document.querySelector(".left-arrow-footer2");
      const nextBtns2 = document.querySelector(".right-arrow-footer2");

      if (scrollContainer1 !== null) {
        scrollContainer1.style.overflow = "hidden";

        scrollContainer1.addEventListener("wheel", (e) => {
          e.preventDefault();
          scrollContainer1.scrollLeft += e.deltaY;
        });

        nextBtns1.addEventListener("click", () => {
          scrollContainer1.scrollLeft += 350;
        });

        backBtns1.addEventListener("click", () => {
          scrollContainer1.scrollLeft -= 350;
        });

        scrollContainer1.addEventListener("scroll", () => {
          scrollContainer1.style.scrollBehavior = "smooth";
        });
      }
      if (scrollContainer2 !== null) {
        scrollContainer2.style.overflow = "hidden";

        scrollContainer2.addEventListener("wheel", (e) => {
          e.preventDefault();
          scrollContainer2.scrollLeft += e.deltaY;
        });

        nextBtns2.addEventListener("click", () => {
          scrollContainer2.scrollLeft += 350;
        });

        backBtns2.addEventListener("click", () => {
          scrollContainer2.scrollLeft -= 350;
        });

        scrollContainer2.addEventListener("scroll", () => {
          scrollContainer2.style.scrollBehavior = "smooth";
        });
      }
    }

    if (data) {
      addScroll();
    }
  }, [data]); // Separate useEffect for setting up event listeners after data has been fetched

  return data ? (
    <div className="pb-[5%]" id="youmayalsolike">
      <section className="youmaylike-section pt-[5%]">
        <section className="text-xl font-medium">
          <h1>You May Also Like</h1>
        </section>
        <section className="absolute flex justify-between items-center mt-[4%] w-[90%]">
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center left-arrow-footer1">
            <IoIosArrowBack />
          </section>
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center right-arrow-footer1">
            <IoIosArrowForward />
          </section>
        </section>
        <section className="flex overflow-x-scroll scrollbar-hide pt-[1%] scroll-container-footer1">
          {data.coins.map((item) => (
            <CoinCard key={item.item.coin_id} data={item.item} />
          ))}
        </section>
      </section>
      <section className="Trending-coins-section pt-[3%]">
        <section className="text-xl font-medium">
          <h1>Trending coins</h1>
        </section>
        <section className="absolute flex justify-between items-center mt-[4%] w-[90%]">
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center left-arrow-footer2">
            <IoIosArrowBack />
          </section>
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center right-arrow-footer2">
            <IoIosArrowForward />
          </section>
        </section>
        <section className="flex overflow-x-scroll scrollbar-hide pt-[1%] scroll-container-footer2">
          {data.coins.map((item) => (
            <CoinCard key={item.item.coin_id} data={item.item} />
          ))}
        </section>
      </section>
    </div>
  ) : null;
};

export default YouMayAlsoLike;
