import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlEnvolope } from "react-icons/sl";

const ContentSection = () => {
  const [navigate, setNavigate] = useState("");
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12 max-w-6xl mx-auto p-6 font-fira">
      {/* Newsletter Block */}
      <div className="relative rounded-xl overflow-hidden text-white h-150">
        {/* Background image */}
        <img
          src="/src/assets/Newsletter_BG.jpg"
          alt="Wok Toss"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative p-8 flex flex-col justify-center h-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-yellow-100 text-black px-4 py-1 rounded-full text-sm flex items-center gap-2">
              <SlEnvolope /> Newsletter
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Get the latest recipes and cooking tips delivered to your inbox.
          </h2>
          <p className="text-sm md:text-base mb-6 max-w-md">
            Subscribe to our newsletter and get delicious recipes, expert
            cooking tips, and the latest food trends. Stay inspired in the
            kitchen with ideas and insights delivered straight to your inbox
            every week!
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white px-4 py-3 rounded-l-lg outline-none text-gray-800"
            />
            <button className="bg-primary text-white px-5 py-3 rounded-r-lg text-sm font-semibold hover:bg-primary-offset">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* View Recipe Block */}
      <div className="relative rounded-xl overflow-hidden text-white h-150">
        {/* Background image */}
        <img
          src="/src/assets/Chef_BG.jpg"
          alt="Chef"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative p-8 flex flex-col justify-center h-full">
          <h2 className="text-2xl mt-10 md:text-3xl font-bold leading-snug mb-4">
            Add flavor, flair, and a <br />
            touch of creativity <br />
            to your meals.
          </h2>
          <p className="text-sm md:text-base mb-6 max-w-md">
            Elevate your dishes with bold flavors and creative twists. From
            vibrant ingredients to expert techniques, discover recipes that
            transform your everyday cooking into something extraordinary.
          </p>
          <button
            onClick={() => {
              setNavigate("all-recipes");
            }}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-offset w-fit"
          >
            <Link to="/all-recipes">View Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
