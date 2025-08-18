import Navbar from './components/navbar.jsx'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'
import HomePage from './routes/HomePage.jsx';
import AllRecipes from './routes/AllRecipes.jsx';
import AddRecipe from './routes/AddRecipe.jsx';
import Favourites from './routes/Favourites.jsx';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/all-recipes' element={<AllRecipes/>}>
          <Route path=':recipeId' element={<AllRecipes/>}></Route>
        </Route>
        <Route path='/add-recipe' element={<AddRecipe/>}/>
        <Route path='/my-favorites' element={<Favourites/>}/>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
