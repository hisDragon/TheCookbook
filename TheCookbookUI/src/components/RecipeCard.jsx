import React, { useEffect, useState } from "react";
import { PiForkKnifeBold } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import DefaultRecipeImage from '../assets/general-img.png'

const RecipeCard = ({ card }) => {
    return (
        <div
            key={card._id}
            className="rounded-xl hover:shadow-lg transition p-0 overflow-hidden cursor-pointer"
        >
            {/* Image container */}
            <div className="relative">
                <img
                    src={DefaultRecipeImage}
                    alt={card.title}
                    className="w-full h-56 object-cover"
                />
                {/* Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button className="group bg-white p-2 rounded-full hover:bg-primary transition cursor-pointer">
                        <FaRegBookmark className="text-primary group-hover:text-white transition" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 text-left">
                <p className="text-primary text-sm font-semibold">
                    {card.category}
                </p>
                <h3 className="font-bold text-lg mb-3 hover:text-primary">
                    {card.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                        <FaRegClock /> {card.cookingTime} mins
                    </div>
                    <div className="flex items-center gap-1">
                        <span>{card.cuisine}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <PiForkKnifeBold /> Serves {card.servings}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
