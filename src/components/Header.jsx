import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="h-20 bg-white grid grid-cols-12 px-[5%]">
      <section className="col-span-6 flex justify-start items-center">
        <img
          src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
          alt="Koinx"
        />
      </section>

      {/* Hamburger menu for small screens */}
      <section
        className="sm:hidden col-span-6 flex justify-end items-center cursor-pointer"
        id="Hamburger-menu"
      >
        <IoMenu />
      </section>

      {/* Big menu for larger screens */}
      <section
        className="hidden sm:flex justify-between items-center col-span-6"
        id="big-menu"
      >
        <h1>Crypto Taxes</h1>
        <h1>Free Tools</h1>
        <h1>Resource Center</h1>
        <button className="bg-blue-500 text-white text-center h-[50%] rounded-lg w-[20%]">
          {" "}
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Header;
