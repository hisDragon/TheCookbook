import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import RecipeList from "../components/RecipeList.jsx";

const AllRecipes = () => {
    return (
        <>
            <HeroSection
                title="All Recipes"
                subtitle="Discover an array of delicious recipes for every occasion. From quick snacks to gourmet meals,
       explore endless inspiration, expert tips, and creative ideas for your kitchen adventures!"
            />

            <RecipeList isCarousel={false} />
        </>
    );
};

export default AllRecipes;
