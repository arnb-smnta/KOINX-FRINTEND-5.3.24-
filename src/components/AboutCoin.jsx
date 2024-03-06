import React from "react";
import { useParams } from "react-router-dom";

const AboutCoin = () => {
  const { coinid } = useParams();

  return coinid ? (
    <div
      className="bg-white px-[5%] py-[2%] col-span-8 rounded-xl"
      id="Technicals"
    >
      <section className="flex font-semibold text-xl">
        <h1>About</h1>
        <h1 className="ml-4"> {coinid}</h1>
      </section>

      <section className="mt-3">
        <section className="flex font-bold">
          <h1>What is</h1>
          <h1 className="ml-2 ">{coinid}?</h1>
        </section>
        <section className="border-b border-gray-300">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section className="mt-3 border-b border-gray-200">
          <section>
            <h1 className="font-bold">Lorem ipsum dolor sit amet</h1>
          </section>
          <section className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ut
            fugiat non maxime aperiam nostrum dolore laudantium, cupiditate quae
            consequatur eligendi minima nihil? Tempora dolorem molestias iste
            quidem, accusantium quos? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dicta maxime debitis pariatur perspiciatis
            consequuntur numquam odio earum quibusdam recusandae ut dolor, quis
            repellat, quo labore nesciunt enim quod quasi amet.
          </section>{" "}
          <section className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ut
            fugiat non maxime aperiam nostrum dolore laudantium, cupiditate quae
            consequatur eligendi minima nihil? Tempora dolorem molestias iste
            quidem, accusantium quos?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sunt sint veritatis sed cumque delectus ullam
            commodi maxime totam doloribus beatae hic vero omnis voluptatem
            laudantium alias magnam, corporis, quia consectetur.
          </section>{" "}
          <section className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ut
            fugiat non maxime aperiam nostrum dolore laudantium, cupiditate quae
            consequatur eligendi minima nihil? Tempora dolorem molestias iste
            quidem, accusantium quos?
          </section>
        </section>

        <section className="mt-4 border-b border-gray-300">
          <section className="flex font-bold text-xl">
            <h1>Already Holding</h1>
            <h1 className="ml-2">{coinid}?</h1>
          </section>
          <section className="grid md:grid-cols-2 md:h-[150px] md:gap-8 mt-4 h-[300px] grid-rows-2 md:grid-rows-1">
            <section className="md:col-span-1 row-span-1 h-[90%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl"></section>
            <section className="md:col-span-1 row-span-1 h-[90%] bg-gradient-to-r from-red-300 to-red-600 rounded-xl"></section>
          </section>
        </section>

        <section className="mt-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt est
            ea, labore sequi optio asperiores dignissimos! Alias architecto
            deleniti veniam quos sit excepturi corrupti quis voluptatum sint
            iste, non ut? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maxime facilis veritatis aliquam doloremque commodi
            dignissimos, consectetur minima in eligendi, tempore omnis neque, a
            cum provident autem amet accusamus ratione nihil.
          </p>
        </section>
      </section>
    </div>
  ) : null;
};

export default AboutCoin;
