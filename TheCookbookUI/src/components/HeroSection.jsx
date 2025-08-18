import React from "react";
import { useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { PiForkKnifeBold } from "react-icons/pi";

const HeroSection = ({ title, subtitle }) => {
  const path = useLocation();
  const isHomePage = path.pathname === '/';
  return (
    <section className="bg-primary py-30 sm:px-20 text-center relative font-fira p-6">
      {/* Title */}
      <h1 className="text-4xl text-white font-bold mb-4">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl mx-auto font-normal text-white mb-10">
        {subtitle}
      </p>

      {/* Search Bar */}
      {isHomePage && (
      <div className="flex items-center lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto bg-white rounded-xl shadow-md px-2 py-2">
        <PiForkKnifeBold className="text-primary mr-2 w-7 h-7" />
        <input
          type="text"
          placeholder="Find what do you want to cook today"
          className="flex-1 outline-none text-gray font-fira"
        />
        <button className="bg-primary p-3 rounded-lg text-white hover:bg-primary-offset">
          <BiSearch className="w-6 h-6" />
        </button>
      </div>
      )}
    </section>
  );
};

export default HeroSection;
