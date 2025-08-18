import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

export default function CookbookNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navigate, setNavigate] = useState("home");
  return (
    <nav className="bg-white sticky shadow-md top-0 z-50">
      <div className="container h-25 mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/the_cookbook_logo.svg"
            className="w-12 h-12 object-cover rounded-lg cursor-pointer"
          />
          <span className="text-primary font-bold text-3xl font-fira">
            The Cookbook
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <li 
          onClick={() => {
              setNavigate("/");
            }} 
          className="font-medium list-none hover:text-primary font-fira">
            <Link to='/'>Home</Link>
          </li>
          <li            
            onClick={() => {
              setNavigate("all-recipes");
            }}             
            className="font-medium list-none hover:text-primary font-fira"
          >
            <Link to='/all-recipes'>All Recipes</Link>
          </li>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <li            
            onClick={() => {
              setNavigate("my-favorites");
            }}             
            className="cursor-pointer list-none hover:text-primary w-4 h-4"
          >
            <Link to='/my-favorites'><FaRegBookmark/></Link>
          </li>
          
          <LuUser className="cursor-pointer hover:text-primary w-5 h-5" />
          
          <Link to='/add-recipe'>
          <button
            onClick={() => {
              setNavigate("add-recipe");
            }}
            className="bg-secondary cursor-pointer text-black text-sm font-medium px-6 py-3 rounded-lg hover:bg-primary hover:text-white font-fira"
          >
            Add Recipe
          </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <RiCloseLargeFill className="cursor-pointer hover:text-primary w-5 h-5" />
          ) : (
            <AiOutlineMenu className="cursor-pointer hover:text-primary w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white font-fira shadow-md px-4 py-3 space-y-3">
          <li 
          onClick={() => {
              setNavigate("/");
            }} 
          className="block font-medium hover:text-primary">
            <Link to='/'>Home</Link>
          </li>
          <li            
            onClick={() => {
              setNavigate("all-recipes");
            }}             
            className="block font-medium hover:text-primary"
          >
            <Link to='/all-recipes'>All Recipes</Link>
          </li>
        </div>
      )}
    </nav>
  );
}
