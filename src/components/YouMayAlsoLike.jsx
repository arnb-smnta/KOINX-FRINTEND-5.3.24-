import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { trendingapi } from "../utils/api";
import CoinCard from "./CoinCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const YouMayAlsoLike = () => {
  const [data, setdata] = useState();
  const scrollContainerRef = useRef(null);

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
      const scrollContainers = document.querySelectorAll(
        ".scroll-container-footer"
      );
      const backBtns = document.querySelectorAll(".left-arrow-footer");
      const nextBtns = document.querySelectorAll(".right-arrow-footer");

      scrollContainers.forEach((scrollContainer, index) => {
        if (scrollContainer !== null) {
          scrollContainer.style.overflow = "hidden";

          scrollContainer.addEventListener("wheel", (e) => {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
          });

          nextBtns[index].addEventListener("click", () => {
            scrollContainer.scrollLeft += 350;
          });

          backBtns[index].addEventListener("click", () => {
            scrollContainer.scrollLeft -= 350;
          });

          scrollContainer.addEventListener("scroll", () => {
            scrollContainer.style.scrollBehavior = "smooth";
          });
        }
      });
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
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center left-arrow-footer">
            <IoIosArrowBack />
          </section>
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center right-arrow-footer">
            <IoIosArrowForward />
          </section>
        </section>
        <section className="flex overflow-x-scroll scrollbar-hide pt-[1%] scroll-container-footer">
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
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center left-arrow-footer">
            <IoIosArrowBack />
          </section>
          <section className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center right-arrow-footer">
            <IoIosArrowForward />
          </section>
        </section>
        <section className="flex overflow-x-scroll scrollbar-hide pt-[1%] scroll-container-footer">
          {data.coins.map((item) => (
            <CoinCard key={item.item.coin_id} data={item.item} />
          ))}
        </section>
      </section>
    </div>
  ) : null;
};

export default YouMayAlsoLike;
