import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";
import RecipeList from "../components/RecipeList.jsx";

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      fetch(`${import.meta.env.VITE_API_URI}/api/recipes`)
        .then((response) => response.json())
        .then((json) => {
          const fetchedData = json.filter((recipe) =>
            recipe.title?.toLowerCase().includes(query.toLowerCase())
          );
          console.log(fetchedData);
          setRecipes(fetchedData);
        });
    }
  }, [query]);
  return (
    <>
      <HeroSection
        title={`Search results for : ${query}`}
        subtitle={`Total ${recipes.length} Recipes`}
      />
      {
        recipes.length > 0 ? (<RecipeList recipes = {recipes} isCarousel={false} />) : (<p>No Results Found</p>)
      }
    </>
  );
};

export default SearchResults;
