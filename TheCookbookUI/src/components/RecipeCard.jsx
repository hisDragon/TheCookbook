import React, { useEffect, useState } from 'react';
import { PiForkKnifeBold } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const RecipeCard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URI}/api/recipes`)
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error(err));
    }, []);
  
    return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:p-12 p-6 font-fira">
      {cards.map((card) => (
        <div
          key={card._id}
          className="rounded-xl hover:shadow-lg transition p-0 overflow-hidden cursor-pointer"
        >
          {/* Image container */}
          <div className="relative">
            <img
              src="src/assets/general-img.png"
              alt={card.title}
              className="w-full h-56 object-cover"
            />
            {/* Icons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button className="bg-white p-2 rounded-full hover:bg-primary">
                <FaRegBookmark className="text-primary" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 text-left">
            <p className="text-primary text-sm font-semibold">{card.category}</p>
            <h3 className="font-bold text-lg mb-3 hover:text-primary">{card.title}</h3>

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
      ))}
    </div>
  );
}

export default RecipeCard