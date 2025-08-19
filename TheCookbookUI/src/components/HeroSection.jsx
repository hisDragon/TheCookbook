import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar  from "../components/SearchBar.jsx"

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
      <SearchBar />
      )}
    </section>
  );
};

export default HeroSection;
