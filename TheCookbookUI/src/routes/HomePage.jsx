import React from "react";
import HeroSection from '../components/HeroSection.jsx';
import RecipeCard from "../components/RecipeCard.jsx";
import ContentSection from "../components/ContentSection.jsx";

const HomePage = () => {
  return (
  <>
    <HeroSection title="The Cookbook Recipes"
      subtitle="Explore and share daily cooking ideas with our recipes. Discover dishes, videos, tips, and inspiration tailored to your tastes and the community you connect with."/>
      <section className="py-20 text-center relative font-fira">
        <h1 className='p-4 font-bold text-3xl'>New Recipes</h1>
        <p className='p-6 pb-10'>Explore our latest recipes, from quick snacks to hearty meals and indulgent desserts.</p>
        <RecipeCard />
      </section>  
      <ContentSection/> 
  </>
  );
};

export default HomePage;
